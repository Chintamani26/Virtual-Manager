import mongoose from 'mongoose';

const ChatLogSchema = new mongoose.Schema({
    employeeId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    message: { type: String, required: true },
    context: { type: mongoose.Schema.Types.Mixed },
});

export default mongoose.model('ChatLog', ChatLogSchema);