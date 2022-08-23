import mongoose from "mongoose";

const adressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    cep: {
        type: String,
        required: true,
        match: [/^[0-9]{8}$/, "CEP must be 8 numbers"],
    },
    street: {
        type: String,
        required: true,
    },
    district: {
      type: String,
      required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    complement: {
        type: String,
        required: false,
    },
});

const adresses = mongoose.model('addresses', adressSchema);
export default adresses;

    
