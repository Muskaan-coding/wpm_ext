var mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
    date:String,
    imghref: String,
});

var wholeSchema = new mongoose.Schema({
    title:String,
    content:[contentSchema]
});

mongoose.model('contents', wholeSchema);