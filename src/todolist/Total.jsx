import React, { Component } from "react";
import "./total.css"

export default function Total(props) {
    return (
        <ul className="totalBox">
            <li>Total de tarefas: <span>{props.listNum}</span></li>
            <li>Total de tarefas concluidas: <span>{props.listCheckedNum}</span></li>
        </ul>
    )
}
