import React, { useEffect, useState } from 'react'
import "./AppliedFilter.css";
import closeIcon from "./images/close.png";

const AppliedFilers = (props) => {
    const [allFilers, setAllFilters] = useState([]);
    useEffect(() => {
        const currentVal = props.values;
        let list = [
            {
                val: currentVal.deptTitle,
                key: "selectedDeptId",
                titleKey: "deptTitle"
            },
            {
                val: currentVal.locTitle,
                key: "selectedlocationId",
                titleKey: "locTitle"
            },
            {
                val: currentVal.funTitle,
                key: "selectionFunctionId",
                titleKey: "funTitle"
            },
            {
                val: currentVal.query,
                key: "query",
            }
        ];
        list = list.filter(element => {
            // 👇️ using OR (||) operator
            return element.val != null && element.val != "";
        });
        //console.log("list", list);
        setAllFilters(list)
    }, [props.values])

    return (
        <div className='d-flex align-items-center'>
            {allFilers.map((item, key) => (
                <div className='filter_item' key={key} onClick={() => {
                    props.clearFilterHandler(item);
                }}>
                    <div >
                        <span>{item.val}</span>
                    </div>
                    <div >
                        <img src={closeIcon} alt="close" />
                    </div>
                </div>

            ))}
        </div>

    )
}

export default AppliedFilers
