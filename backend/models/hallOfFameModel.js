import mongoose from 'mongoose';

const hallOfFameSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    year: {
        type: String,
        required: true
    },
    pfp: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const HallOfFame = mongoose.model('HallOfFame', hallOfFameSchema);

export default HallOfFame;
