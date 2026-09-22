import mongoose from "mongoose";

const setupMongoDB = async () => {
    try {

        await mongoose.connect("mongodb://zainworks721_db_user:wWCZu7hf9ZkiWHC3@ac-bc0d7mp-shard-00-00.ls4tu6s.mongodb.net:27017,ac-bc0d7mp-shard-00-01.ls4tu6s.mongodb.net:27017,ac-bc0d7mp-shard-00-02.ls4tu6s.mongodb.net:27017/MYBASE?ssl=true&replicaSet=atlas-3jn5we-shard-0&authSource=admin&appName=Cluster0");
        console.log("Connected to MongoDB");

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    
    }

}

export default setupMongoDB;