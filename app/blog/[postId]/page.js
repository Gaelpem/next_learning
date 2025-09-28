
import Link from 'next/link'
import fs from 'node:fs/promises'

export default async function PostDetailPage({params}){
          const { postId } = await params
          const storedBlog = await fs.readFile('data/post.json', 'utf-8') 
          const posts =  JSON.parse(storedBlog)
          const post  =   posts.find((post) =>  post.id === Number(postId))
   
          //Est-ce que l’id de ce blog est égal à l’id que j’ai reçu depuis l’URL 
         // find : tableau ca sert trouver un element selon une condition 

         const formattedDate = new Date(post.createAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
         })

         return (
            <article>
                <header>
                    <h1>{post.title}</h1>
                    <p>Posted on {formattedDate}</p>
                </header>
                <p>{post.body}</p>
                <p>
                    Go <Link href = '/'>back</Link> to starting page. 
                </p>
            </article>
         )
}