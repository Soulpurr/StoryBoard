import mongoose from "mongoose";
const { Schema } = mongoose;

const storySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    story: { type: String, required: true },
    upvotes: [{ type: Schema.Types.ObjectId,default: [] }],
    user: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Story", storySchema);