import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
    employeeId: { type: String, required: true },
    projectId: { type: String, required: true },
    feedbackType: { type: String, enum: ['Task', 'Project', 'General'], required: true },
    comments: { type: String },
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.model('Feedback', FeedbackSchema);