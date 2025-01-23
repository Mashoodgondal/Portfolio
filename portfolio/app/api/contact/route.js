import connectionDB from "@/lib/connection"
// import visiter from "@/model/schema"
import visiter from "@/lib/schema"
import { NextResponse } from "next/server"


export const GET = async (req) => {
    await connectionDB()
    try {

        const items = await visiter.find()
        return NextResponse.json(visiter, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch" }, { status: 200 })
    }
}  