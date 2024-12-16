import mongoose from "mongoose";

const connectDB = async (url) => {
    try {
        await mongoose.connect(url)
        console.log('connected mongoDb')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB