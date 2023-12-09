import mongoose from "mongoose";


const connectMongoDb = async()=>{

    try {
    // @ts-ignore:next-line

        await mongoose.connect(process.env.MONGO_URL);
        console.log('db lancer');
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDb;