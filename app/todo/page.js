'use client'

import { useEffect, useRef, useState } from "react"
import { storeBlog } from "../../lib/storeBlog"

export default function UserTodo(){
    const todoRef = useRef()
    const [todos, setTodos] = useState([])
    useEffect(()=>{
         const storedTodos = localStorage.get("todos",
         setTodos(storedTodos ? JSON.parse(storedTodos) : []))
    },[])
    

    function handleAdd(e){
        e.preventDefault()

        // recuperation de la valeur de l'utilisateur
        const todo = todoRef.current.value.trim()

        const newTodo = {
            id : new Date(), 
            text : todo
        }

        setTodos((prev)=> [...prev, newTodo])

        
        localStorage.setItem("todos", 
         JSON.stringify(
            storedTodos? [...JSON.parse(storedTodos), newTodo] : [newTodo]
         )
         )
        
    }
      return (
        <form onSubmit={handleAdd}>
         <label>Ecrivez quelque chose</label>
          <input text ="text" ref={todoRef}/>
          <ul>
            {todos.map((t)=>(
                <li key={t.id}>{t.text}</li>
            ))}
          </ul>
        </form>
      )
}