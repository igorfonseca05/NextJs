
'use server'


export async function salvar(formData: FormData) {
    const nome = formData.get('nome')

    console.log(nome)

    return { message: 'Adicionado com sucesso!' }
}