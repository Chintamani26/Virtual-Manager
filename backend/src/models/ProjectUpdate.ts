import mongoose from 'mongoose';

const ProjectUpdateSchema = new mongoose.Schema({
    projectId: { type: String, required: true },
    updateType: { type: String, required: true },
    details: { type: mongoose.Schema.Types.Mixed },
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.model('ProjectUpdate', ProjectUpdateSchema);