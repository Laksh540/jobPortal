import React, { useEffect, useState } from 'react'
import DropDown from './DropDown';
import searchIcon from "./images/search.png";
import Search from './Search';
import "./Filters.css";
import AppliedFilers from './AppliedFilers';


const initialValues = {
    selectedDeptId: null,
    selectedlocationId: null,
    selectionFunctionId: null,
    query: null,
    funTitle: "",
    locTitle: "",
    deptTitle: ""
};
const Filters = (props) => {
    //const [serach, setSerach] = useState(null);
    const [department, setDepartment] = useState([]);
    const [location, setLocation] = useState([]);
    const [functions, setFuntions] = useState([]);
    const [allFilers, setAllFilters] = useState([]);
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        const getDropdowm = (val, update, valueUpdate, placeholder) => {
            fetch('https://teknorix.jobsoid.com/api/v1/' + val)
                .then(response => response.json())
                .then(resData => {
                    //console.log(val, resData);
                    const res = resData;
                    setValues((prevVal) => ({
                        ...prevVal, [valueUpdate]: ""
                    }));

                    update([{ title: placeholder, id: "" }, ...res]);
                })
        }
        getDropdowm("departments", setDepartment, "selectedDeptId", "Select Department");
        getDropdowm("locations", setLocation, "selectedlocationId", "Select Loacation");
        getDropdowm("functions", setFuntions, "selectionFunctionId", "Select Function");

        // setTimeout(() => {
        //     console.log("values", values);
        // }, 5000);
    }, [])

    const convertSpace = (val) => {
        let regex = / /g;
        let result = val.replace(regex, "%20");
        //console.log("result", result);
        return result;
    }
    const concatValues = (val, key, prevParameters) => {
        let updatedString;
        if (val) {
            const checkdedVal = convertSpace(val);
            updatedString = prevParameters + `${key === "q" ? "" : prevParameters.length > 0 ? "&" : ""}${key}=${checkdedVal}`;
        }
        else {
            return prevParameters;
        }

        return updatedString;
    };
    useEffect(() => {
        let filterValues = "";
        // loc=dwq&dept=la
        filterValues = concatValues(values.query, "q", filterValues);
        filterValues = concatValues(values.selectedlocationId, "loc", filterValues);
        filterValues = concatValues(values.selectedDeptId, "dept", filterValues);
        filterValues = concatValues(values.selectionFunctionId, "fun", filterValues);

        //console.log("comp string ", filterValues);
        props.filtersApiString(filterValues);
    }, [values])

    const valueChangeHandler = (e, list, titleUpdate) => {
        const name = e.target.name;
        const val = e.target.value;
        // console.log("name", name);
        // console.log("val", val);
        if (name != "query") {
            const requiredVal = list.find(c => c.id === parseInt(val));
            // console.log("dept title :", dept);
            setValues({ ...values, [name]: val, [titleUpdate]: requiredVal.title });
        }
        else {
            setValues({ ...values, [name]: val });
        }

    };
    return (
        <div>
            <div className='filters container-fluid p-3 mb-3'>
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <Search logo={searchIcon} name="query"
                            placeholder='Search for Job' alt="search"
                            onChange={valueChangeHandler} value={values.query} />
                    </div>
                    <div className="col-md-4 ">
                        <DropDown name="selectedDeptId" onChange={(e) => valueChangeHandler(e, department, "deptTitle")}
                            value={values.selectedDeptId}
                            placeholder="Department"
                            list={department} />
                    </div>
                    <div className="col-md-4 ">
                        <DropDown name="selectedlocationId"
                            onChange={(e) => valueChangeHandler(e, location, "locTitle")}
                            value={values.selectedlocationId}
                            placeholder="Location"
                            list={location} />
                    </div>
                    <div className="col-md-4 ">
                        <DropDown name="selectionFunctionId"
                            onChange={(e) => valueChangeHandler(e, functions, "funTitle")}
                            value={values.selectionFunctionId}
                            placeholder="Functions"
                            list={functions} />
                    </div>

                </div>
            </div>
            <div className='filters appliedFilters p-3'>
                <div className="content_left">
                    <AppliedFilers values={values} clearFilterHandler={(val) => {
                        //console.log("prop val", val);
                        if (val.key !== "query") {
                            setValues((prevVal) => {
                                return { ...prevVal, [val.key]: null, [val.titleKey]: "" }
                            })
                        }
                        else {
                            setValues((prevVal) => {
                                return { ...prevVal, [val.key]: null }
                            })
                        }
                    }}

                    />
                </div>
                <div className="content_right">
                    <button onClick={() => {
                        setValues({
                            ...values, selectedDeptId: null,
                            selectedlocationId: null,
                            selectionFunctionId: null,
                            query: null,
                            funTitle: "",
                            locTitle: "",
                            deptTitle: ""
                        })
                    }} >Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Filters
