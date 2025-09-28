'use client'

import { useActionState } from "react"
import { saveBlog } from "../../../actions/saveBlog"


export   default function newBlog(){
       
    const [formState, formAction] = useActionState(saveBlog, {
        error : null
    })
    return(
        <>
         <h1> SHARE A NEW POST WITH THE WORDLD</h1>
        <form action={formAction}>
         <label htmlFor="title">Tilte</label>
         <input type="text" name="title"/>
         <label htmlFor="content">Content</label>
         <textarea type="text" name="body"/>
         
         <button>Save Post</button>
         {formState.error && (<p style={{color : 'red' }}>{formState.error}</p>)}

        </form>
        </>
        
    )
}