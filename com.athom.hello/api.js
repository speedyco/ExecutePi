module.exports = [

    {
        description:		'Get P1 meter data',
        method: 		'GET',
        path:			'192.168.2.14/',
        fn: function( callback, args ){
            var result = Homey.app.getP1MeterData();

            // callback follows ( err, result )
            callback( null, result );

            // access /?foo=bar as args.query.foo
        }
    }

]
