
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