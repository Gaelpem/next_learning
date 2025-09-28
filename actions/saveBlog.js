'use server'

import { storeBlog } from "../lib/storeBlog"

export async function saveBlog(_, formData){
     const title = formData.get('title')
     const content = formData.get('body')
     if(!title || !content){
         return {error : "Vous devez tous remplir"}
     }


     await storeBlog({title, content})
     return {error : null}
    
}