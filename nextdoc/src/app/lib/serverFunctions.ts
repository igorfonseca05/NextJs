"use server"

export async function createPost(formData: FormData) {

    const title = formData.get('title')

    console.log(title)
}

