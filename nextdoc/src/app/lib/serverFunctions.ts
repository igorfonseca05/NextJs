"use server"

const posts: { title: string | undefined, content: string | undefined }[] = []

export async function createPost(formData: FormData) {

    const title = formData.get('title')?.toString()
    const content = formData.get('content')?.toString()

    const post = { title, content }

    posts.push(post)
}

export async function getPosts() {
    console.log(posts)
    return posts
}