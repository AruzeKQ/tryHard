import React, { useState } from 'react'

export default function ToDoList() {
    const [tasks, setTasks] = useState(["Làm bài tập về nhà", "Tập gym", "Chơi game"]);
    const [newTask, setNewTask] = useState("");
    const [isEdit, setIsEdit] = useState(false)
    const [editIndex, setEditIndex] = useState(null)

    function handledTask(e) {
        setNewTask(e.target.value)
    }

    function addedTask() {
        // Kiểm tra button
        if (isEdit === true) {
            const updateTask = [...tasks]
            updateTask[editIndex] = newTask
            setTasks(updateTask) // update Task được sửa
            // console.log(updateTask) debug           
            setIsEdit(false)
            setEditIndex(null)
        } else if (newTask.trim() != "") {
            setTasks(t => [...t, newTask]) // thêm Task vào trong List
        }
        setNewTask("")

    }

    function removedTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    function editedTask(index) {
        const selectedTask = tasks[index]
        setEditIndex(index)
        setNewTask(selectedTask)
        setIsEdit(true)
    }

    return (
        <div className='to-do-container'>
            <h1>ToDoList</h1>
            <input
                className='inputTodo'
                type="text"
                value={newTask}
                onChange={handledTask}
                placeholder='Nhập công việc' />

            <button
                className='btn-add'
                onClick={() => addedTask()}>
                {isEdit ? "Sửa" : "Xác nhận"}
            </button>

            <ol>
                {tasks.map((element, index) =>
                    <li key={index}>
                        <span className='text'>{element}</span>
                        <button
                            className='btn-delete'
                            onClick={() => removedTask(index)}>
                            Xóa
                        </button>
                        <button
                            className='btn-edit'
                            onClick={() => editedTask(index)}>
                            Sửa
                        </button>
                    </li>
                )}
            </ol>
        </div>

    )
}