import mongoose from "mongoose";

const connectMongo = async () => {
  await mongoose.connect('mongodb+srv://api12:6E5SCNNgaRjgKjAK@cluster0.5zqtueq.mongodb.net/story?retryWrites=true&w=majority');
  console.log("connected");
};

export default connectMongo;