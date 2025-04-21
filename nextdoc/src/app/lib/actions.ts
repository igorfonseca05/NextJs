
'use server'


export async function salvar(prevState: any, formData: FormData) {
    const nome = formData.get('nome')

    console.log(nome)

    await new Promise((resolve, reject) => setTimeout(() => resolve('resolvido'), 3000))

    return { message: 'Adicionado com sucesso!' }
}


export async function getData() {
    setTimeout(() => {
        console.log('Clicou no botão')
    }, 3000)
}