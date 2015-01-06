var omit = require('101/omit'),
    through = require('through'),
    assign = require('101/assign'),
    Combiner = require('stream-combiner'),
    geojsonStream = require('geojson-stream');

module.exports = unpickStream;
module.exports.unpickProperties = unpickProperties;

function unpickStream(properties) {
    return Combiner(geojsonStream.parse(),
        through(function(feature, callback) {
            this.queue(unpickProperties(feature, properties));
        }),
        geojsonStream.stringify());
}

function unpickProperties(feature, properties) {
    return assign({}, feature, {
        properties: omit(feature.properties, properties)
    });
}
