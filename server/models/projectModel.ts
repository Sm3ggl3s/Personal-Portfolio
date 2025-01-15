import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    githubRepo: {
        type: String
    },
    liveUrl: {
        type: String
    },
}, { timestamps: true });

export default mongoose.model('Project', projectSchema, 'projects'); // Ensure the collection name is specified here