import mongoose from 'mongoose';

const coreTeamSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    pfp: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const CoreTeam = mongoose.model('CoreTeam', coreTeamSchema);

export default CoreTeam;