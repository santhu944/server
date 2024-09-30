import mongoose from 'mongoose';

const Connection = async (username,password) => {
    const URL = `mongodb://santhoshn641:1234@blog-app-shard-00-00.v0er8.mongodb.net:27017,blog-app-shard-00-01.v0er8.mongodb.net:27017,blog-app-shard-00-02.v0er8.mongodb.net:27017/?ssl=true&replicaSet=atlas-wvud67-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

