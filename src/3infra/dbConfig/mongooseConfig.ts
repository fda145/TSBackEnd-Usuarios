import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';
dotenv.config();

class MongooseConfig {
    static async connect(): Promise<void>{
        try{
            const CHAVEMONG = `${process.env.MONGO_DB_KEY}${process.env.DATABASE}?${process.env.DB_OPTIONS}`;
            if (!CHAVEMONG) 
                throw new Error('Chave do DB não encontrada');
            
            const ConnectOptions: ConnectOptions = { connectTimeoutMS: 5000,};
            await mongoose.connect(CHAVEMONG, ConnectOptions);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB: ', error);
            process.exit(1);
        }
    }
}

export default MongooseConfig;