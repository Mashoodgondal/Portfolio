import connectionDB from "@/lib/connection"
import visiter from "@/lib/schema"
import { NextResponse } from "next/server"
connectionDB()

export const GET = async (req) => {
    try {
        // await connectionDB();

        const items = await visiter.find()
        return NextResponse.json(items, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch" }, { status: 400 })
    }
}

export const POST = async (req) => {
    try {
        const { name, email, message } = await req.json()
        // await connectionDB()
        await visiter.create({ name, email, message })
        return NextResponse.json({ message: "Created Successfully" }, { status: "200" })
    } catch (error) {
        console.log("Error in creating", error);

    }
}