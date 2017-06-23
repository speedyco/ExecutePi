var defaultOptions = {
	host: "192.168.2.14",
	path: ''
}

module.exports = [

    {
        description:		'Get P1 meter data',
        method: 		'GET',
        path:			'/',
        requires_authorization: false,
        
        fn: function( callback, args ){
            var result = Homey.app.executePiP1();

            // callback follows ( err, result )
            callback( null, result );

            // access /?foo=bar as args.query.foo
        }
    }

]
