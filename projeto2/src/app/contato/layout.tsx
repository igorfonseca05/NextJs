
// export const metadata = {
//     title: 'Contatos',
//     description: 'Essa é minha pagina de contato'
// }

// export default function ContatoLayout({
//     children
// }: { children: React.ReactNode }) {
//     return (
//         <>
//             <h2>Minha pagina contato</h2>
//             {children}
//         </>
//     )
// }

export const metadata = {
    title: 'Minha pagina contato',
    description: 'Essa é a minha pagina de contato'
}

export default function ContatoLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            <h3>Meu layout aninhado</h3>
            {children}
        </>
    )
}