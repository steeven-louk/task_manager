import connectMongoDb from "@/app/libs/db";
import User from "@/app/libs/models/User";
import NextAuth from "next-auth"
// import credentials, {CredentialsProvider} from "next-auth/providers/credentials"
// Credentials

// import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt';
 import  CredentialsProvider  from 'next-auth/providers/credentials';
//  export const authOptions = {
  
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET
//     })
//   ]
// }
// export default NextAuth(authOptions)

// const authOptions = {

//     providers:[
//         CredentialsProvider({
//             name: "credentials",
//             credentials: {},

//             async authorize(credentials) {
//                 // const user = {id: "1"};
//                 // return user;
//                 const  {email, password} = credentials;

//                 try {
//                     await connectMongoDb();
//                     const user = await User.findOne({email});

//                     if(!user){
//                         return null;
//                     }
//                     if( !email || !password){
//                         return null;
//                     }
                   
            
//                     const comparePassword = await bcrypt.compareSync(password,user.password);
//                     if(!comparePassword){
//                         return null;
//                      }
//                      return user
//                 } catch (error) {
                    
//                 }
//             }
//         })
//     ],
//     session:{
//         strategy: "jwt",
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     pages:{
//         signIn:"/",
//     },
// };

// const handler = NextAuth(authOptions);

// export {handler as GET, handler as POST};

