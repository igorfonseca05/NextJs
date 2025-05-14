
async function getData() {
    const data = await fetch('http://localhost:3000/api/data')
    return data.json()
}

export default async function Cardapio() {
    const res: { data: string } = await getData()

    return (
        <div>
            <h1>{res.data}</h1>
        </div>
    )
}