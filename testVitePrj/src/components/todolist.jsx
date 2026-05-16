import React, { useState } from 'react'

export default function ToDoList() {
    const [tasks, setTasks] = useState(["Làm bài tập về nhà", "Tập gym", "Chơi game"]);
    const [newTask, setNewTask] = useState("");


    function handledTask(e) {
        setNewTask(e.target.value)
    }

    function addedTask() {
        if (newTask.trim() != "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function removedTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
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
                Xác nhận
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
                            onClick={() => editTask(index)}>
                            Sửa
                        </button>
                    </li>
                )}
            </ol>
        </div>

    )
}