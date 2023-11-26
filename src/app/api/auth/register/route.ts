import bcrypt from 'bcrypt';
// import { bcrypt } from 'b';
import connectMongoDb from '@/app/libs/db';
import User from '@/app/libs/models/User';
import { NextResponse, NextRequest } from 'next/server';


export async function POST(NextRequest:any){
    try {
        await connectMongoDb().catch((error)=> console.log(error));


        const {username,email, password,} = await NextRequest.json();
        const saltRound = 10;

        if(!username || !email || !password){
            return NextResponse.json({"message":"tout les champs sont requis"},{status:200});
        }

        const userExist = await User.findOne({email});
        if(userExist){
            return NextResponse.json({"message":"email deja existant, connecté vous"},{status:400});
        }

        const salt = bcrypt.genSaltSync(saltRound);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const userData = await new User({
            username,
            email,
            password:hashedPassword
        });
        await userData.save();
        return NextResponse.json({userData}, {status:201});
    } catch (error) {
        console.log(error)
        return NextResponse.json({error}, {status:500})
    }
}