var test = require('tape'),
    geojsonPick = require('./');

test('unpickProperties', function(t) {
    t.deepEqual({
        type: 'Feature',
        properties: { b: 2 }
    }, geojsonPick.unpickProperties({
        type: 'Feature',
        properties: { a: 1, b: 2 }
    }, ['a']));
    t.end();
});
