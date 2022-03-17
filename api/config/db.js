const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("DB Connected Succesfully!!!"))
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;