import { useState } from "react"
import ProductList from "./components/useFetch"
import ToDoList from "./components/todolist"
import './App.css'
export default function App() {
    return (
        <div>
            <ToDoList />
        </div>
    )
}