import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './infrastructure/webserver/routes/UserRoutes';
import connectDB from './config/db';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
