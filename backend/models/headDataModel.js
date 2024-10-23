import mongoose from 'mongoose';

const headDataSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    pfp: {
        type: String,
        required: true
    },
    por: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    phno: {
        type: String,
        required: true
    }
});

const HeadData = mongoose.model('HeadData', headDataSchema);

export default HeadData;