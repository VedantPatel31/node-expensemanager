const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdaSchema = new Schema({
    studentId : {
        type:Schema.Types.ObjectId,
        ref:"students"
    },
    attendanceStatus: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('ada', AdaSchema);