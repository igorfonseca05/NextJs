
import { NextResponse } from "next/server";

const games = [
   {name: 'Resident Evil', price: 254}
]

export async function GET(request: Request) {
   return NextResponse.json({message: 'oi'})
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
   
   console.log(index)
   console.log(data)

   return NextResponse.json({})
}