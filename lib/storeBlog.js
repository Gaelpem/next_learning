import fs from 'node:fs/promises'

export async function storeBlog(post ){
      const storedBlog = await fs.readFile('data/post.json', 'utf8')
      const blog = JSON.parse(storedBlog)

      blog.push({ id : new Date().getTime(), text:post.title, content: post.content })

      await  fs.writeFile('data/post.json', JSON.stringify(blog))
}