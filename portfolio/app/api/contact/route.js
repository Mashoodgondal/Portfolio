import connectionDB from "@/lib/connection"
import visiter from "@/lib/schema"
import { NextResponse } from "next/server"


export const GET = async (req) => {
    try {
        await connectionDB();

        const items = await visiter.find()
        return NextResponse.json(items, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch" }, { status: 400 })
    }
}  