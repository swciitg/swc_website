import mongoose from 'mongoose';

const landingCardSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    gradBgFrom: {
        type: String,
        required: true
    },
    gradBgTo: {
        type: String,
        required: true
    },
    textBoxbg: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    isDesktop: {
        type: Boolean,
        required: true
    },
    cardTitle: {
        type: String,
        required: true
    },
    cardSubtitle: {
        type: String,
        default: ''
    }
});

const LandingCard = mongoose.model('LandingCard', landingCardSchema);

export default LandingCard;