// import {  } from 'next/server.js';
import Task from "@/app/components/ShowTask";
import connectMongoDb from "@/app/libs/db";
import Tasks from "@/app/libs/models/Tasks";
import { NextResponse , NextRequest} from "next/server";


export async function GET(){
    await connectMongoDb().catch((error)=> console.log(error));

    try {
        const tasks = await Tasks.find({});
        return NextResponse.json({tasks}, {status:200});
    } catch (error) {
        return NextResponse.json({error},{status:500});
    }
}

export async function POST(NextRequest:any){
    await connectMongoDb().catch((error)=> console.log(error));

    try {
        const body = await NextRequest.json();

        const newtask = await Tasks.create(body);
        return NextResponse.json(newtask, {status:201});

    } catch (error) {
        console.log(error)
        return NextResponse.json({error},{status:500});
    }
}


export async function PUT(NextRequest:any){
    await connectMongoDb().catch((error)=> console.log(error));

    try {
        const body = await NextRequest.json();
        const existingTask = await Tasks.findById(body._id);
        if(!existingTask){
            return NextResponse.json({"error":"la task n'existe pas"}, {status:404})
        }
        const updateTask = await Tasks.findByIdAndUpdate(body._id, {$set:body}, {new: true})
        return NextResponse.json({updateTask},{status: 200});
    } catch (error) {
        console.log("update error", error);
        console.log("update error", "errur lors de l'ajout de la task");
        return NextResponse.json({error}, {status:500})
    }
}

export async function DELETE(NextRequest:any){

    await connectMongoDb().catch((error)=> console.log(error));

    try {
        const body = await NextRequest.json();
        const existingTask = await Tasks.findById(body._id);
        if(!existingTask){
            console.log("task non trouver");
            return NextResponse.json({"error":"task not found"}, {status:404});
        }

        const task = await Tasks.findByIdAndDelete(existingTask._id);
        return NextResponse.json({task}, {status:200});

    } catch (error) {
        console.log("error", error);
        return NextResponse.json({error}, {status:500})
    }
}