var path = require('path');
var util = require('util');
var v8 = require('v8');

util.log(path.basename(__dirname));

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
//console.log(dirUploads);
util.log(dirUploads);
util.log(v8.getHeapSpaceStatistics());