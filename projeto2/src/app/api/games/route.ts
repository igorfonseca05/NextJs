
import { NextResponse } from "next/server";

const games = [
   {name: 'Resident Evil', price: 254}
]

export async function GET(request: Request) {
   return NextResponse.json({games})
}

export async function POST(request: Request) {
   const data = await request.json()

   games.push(data)

   return NextResponse.json({message: 'Dado inserido com sucesso', games})
}


// Vamosa atualizar nossos dados
export async function PUT(request: Request) {
   const {searchParams} = new URL(request.url)
   const index = searchParams.get('index')

   const data = await request.json()

   games[Number(index)].name = data.name
   
   return NextResponse.json({message: "Dado atualizado com sucesso", game: games[Number(index)]})
}


// Deletando dado da API

export async function DELETE(request: Request) {
   const {searchParams} = new URL(request.url)
   const index = searchParams.get('index')


   delete games[Number(index)]

   return NextResponse.json({message: 'Dado deletado com sucesso'})
}