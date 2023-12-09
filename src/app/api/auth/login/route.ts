import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import connectMongoDb from '@/app/libs/db';
import User from '@/app/libs/models/User';
import { NextResponse, NextRequest } from 'next/server';


export async function POST(NextRequest:any){
    try {
        await connectMongoDb().catch((error)=> console.log(error));


        const {email, password} = await NextRequest.json();
        const secret = process.env.JWT_SECRET;

        if( !email || !password){
            return NextResponse.json({"message":"tout les champs sont requis"},{status:200});
        }

        const userExist = await User.findOne({email});
        if(!userExist){
            return NextResponse.json({"message":"user not found"},{status:400});
        }

        const comparePassword = await bcrypt.compareSync(password,userExist.password);
        if(!comparePassword){
            return NextResponse.json( {'message':'email ou mot de pas incorrect'}, {status:400})
        }
         const data ={
           id: userExist._id,
           username: userExist.username
        }
        const token = await jwt.sign({user:email},secret,{expiresIn:'4d'});
        console.log("token", token)
       return NextResponse.json({data, token}, {status:200});
     
     } catch (error) {
        console.log(error)
        return NextResponse.json({error}, {status:500})
    }
}