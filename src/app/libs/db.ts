import mongoose from "mongoose";


const connectMongoDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log('db lancer');
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDb;