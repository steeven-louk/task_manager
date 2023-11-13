// import {  } from 'next/server.js';
import connectMongoDb from "@/app/libs/db";
import Tasks from "@/app/libs/models/Tasks";
import { NextResponse , NextRequest} from "next/server";


export async function GET(){
    await connectMongoDb().catch((error)=> console.log(error));

    try {
        const tasks = await Tasks.find({});
        return NextResponse.json({tasks}, {status:200});
    } catch (error) {
        return NextResponse.json({error: error},{status:500});
    }
}

export async function POST(req:any){
    await connectMongoDb().catch((error)=> console.log(error));

    try {
        const body = await req.json();

        const newtask = await Tasks.create(body);
        return NextResponse.json(newtask, {status:201});

    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error},{status:500});
    }
}