import mongoose from 'mongoose';

const experiencesCardSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    ImgSrc: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    Content: {
        type: String,
        required: true
    }
});

const ExperiencesCard = mongoose.model('ExperiencesCard', experiencesCardSchema);

export default ExperiencesCard;