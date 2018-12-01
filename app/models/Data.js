const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name: {type: String, required: true,},
    description: {type: String, required: true,},
    date: {type: Number, required: true},
});

module.exports = mongoose.model('Data', DataSchema);
