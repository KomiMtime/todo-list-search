import { createRoot } from "react-dom/client"
import "element-theme-default"
import "./index.css"



import ToDoList from "./todolist/ToDoList"

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<ToDoList></ToDoList>)