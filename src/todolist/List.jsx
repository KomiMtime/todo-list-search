import React, { Component } from "react";
import "./list.css"
import { Checkbox } from "element-react"


export default function List(props) {
    return (
        <ul className="listBox">
            {
                props.list.map(value => <li className="listData" key={value.id} >
                    <span > <Checkbox checked={value.checked} onChange={(e) => { props.onCheckBoxCuont(value.id) }}></Checkbox> {value.taskname.value}</span>
                    <i className="el-icon-delete" onClick={(e) => { props.onDeleteTask(value.id) }}></i>
                </li>)
            }
        </ul>
    )
}
