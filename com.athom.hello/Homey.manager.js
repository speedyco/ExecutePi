Homey.manager('api').get('/manager/executePiP1/', function( err, result ){
    console.log( err, result );
});


Homey.manager('insights').createLog( 'power_usage', {
    label: {
        en: 'Power Usage'
    },
    type: 'number',
    units: {
        en: 'kWh'
    },
    decimals: 2,
    chart: 'stepLine' // prefered, or default chart type. can be: line, area, stepLine, column, spline, splineArea, scatter
}, function callback(err , success){
    if( err ) return console.error(err);
    Homey.manager('insights').createEntry( 'power_usage', 9, new Date(), function(err, success){
        if( err ) return console.error(err);
    })
});
