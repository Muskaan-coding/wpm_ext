var mongoose = require('mongoose');
var Loc = mongoose.model('contents');
var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };
module.exports.homeCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.homeListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.homeReadOne = async  function (req, res) {
    try {
    const location = await
    Loc.findById(req.params.homeid).exec();
    sendJsonResponse(res, 200, location);
    console.log(location)
    } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: 'An error occurred' });
    }
    };
module.exports.homeUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.homeDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};