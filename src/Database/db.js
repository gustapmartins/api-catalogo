import mongoose from 'mongoose'

const db = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("connected mongoDB")).catch((err) => console.log(err))
}

export default db