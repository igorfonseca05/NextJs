import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return Response.json({ data: 'Igor Fonseca' })
}