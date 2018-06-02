var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ttwSchema = new Schema({
    "year" : Number,
    "month" : Number,
    "day" : Number,
    "time_taken" : Number
});

module.exports = mongoose.model('timestamps', ttwSchema, 'timestamps');
