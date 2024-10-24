import mongoose from 'mongoose';

const hiringCardSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    eligibility: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

const HiringCard = mongoose.model('HiringCard', hiringCardSchema);

export default HiringCard;