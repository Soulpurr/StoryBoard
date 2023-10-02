import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true },
    liked: [{ type: Schema.Types.ObjectId, ref: 'Story' ,default:[]}]
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("User", userSchema);