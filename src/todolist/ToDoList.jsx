import React, { useState, useMemo, } from "react";

import Form from "./Form";
import List from "./List";
import Total from "./Total";




const ToDoList = (props) => {

    const [list, setList] = useState([]);

    const [listCopy, setListCopy] = useState([]);

    function handleReceiveKeywords(value) {
        if (value.value === '') {
            return;
        }

        list.push({
            id: new Date().getTime(),
            taskname: value,
            checked: false,
        })

        listCopy.push({
            id: new Date().getTime(),
            taskname: value,
            checked: false,
        })
        setList([...list]);
        setListCopy([...listCopy])
    }

    function onCheckBoxCuont(id) {

        console.log(123)
        list.map((value) => {
            if (value.id === id) {
                value.checked = !value.checked;
            }
        })
        setList([...list])
    }

    function onDeleteTask(id) {
        let newList = list.filter((value) => {
            return value.id != id;
        })
        setList(newList)

        let newListCopy = listCopy.filter((value) => {
            return value.id != id;
        })
        setListCopy(newListCopy)
    }

    function searchTaskname(value) {
        if (value) {
            let searchList = list.filter((val) => {
                return (val.taskname.value.toLowerCase().includes(value.toLowerCase()))
            })
            setList(searchList)
        } else {
            return setList([...listCopy]);
        }
    }

    return (
        <>
            <Form handleReceiveKeywords={handleReceiveKeywords} searchTaskname={searchTaskname}></Form>
            <List list={list} onCheckBoxCuont={onCheckBoxCuont} onDeleteTask={onDeleteTask}></List>
            <Total listNum={list.length} listCheckedNum={list.filter((item) => { if (item.checked) { return item } }).length}></Total>
        </>
    )
}
export default ToDoList;