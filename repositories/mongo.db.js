import mongoose from "mongoose"

async function connect() {
  const uri = "mongodb+srv://aplaraujo2:D9NFal2MCvSl4YnH@store.wk07wf8.mongodb.net/?retryWrites=true&w=majority"
  return await mongoose.connect(uri)
}

export { connect }