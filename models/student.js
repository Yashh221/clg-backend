import mongoose from "mongoose";

const schema = new mongoose.Schema({
  SName: {
    type: String,
  },
  SDOB: {
    type: String,
  },
  Division: {
    type: String,
  },
  USN: {
    type: String,
  },
  Rno: {
    type: Number,
  },
  Sem: {
    type: Number,
  },
  Branch: {
    type: String,
  },
});

export const model = mongoose.model("Student", schema);
