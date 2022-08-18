import React, { useState } from "react";

import { Button } from "element-react";



import "./form.css"

export default function Form(props) {

    const [value, setValue] = useState('');
    const [searchValue, setSearch] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        props.searchTaskname(e.target.value);
    }

    return (
        <div className="contentBox">
            <p className="title">TODOLIST</p>
            <div className="inputBox">

                <input className="input"
                    type="text"
                    placeholder="Nome da tarefa"
                    value={value}
                    onChange={(e) => { handleChange(e) }}
                ></input>
                <Button type="primary" icon="plus" onClick={() => { props.handleReceiveKeywords({ value }); setValue('') }}>Adicionar</Button>
            </div>
            <div className="divider"></div>
            <input className="input"
                type="text"
                value={searchValue}
                onChange={(e) => { handleSearchChange(e) }}
                placeholder="Pesquisar uma tarefa"
            ></input>
        </div>
    )
}
