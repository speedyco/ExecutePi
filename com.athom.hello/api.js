module.exports = [

    {
        description:		'Get something',
        method: 		'GET',
        path:			'/',
        fn: function( callback, args ){
            var result = Homey.app.getSomething();

            // callback follows ( err, result )
            callback( null, result );

            // access /?foo=bar as args.query.foo
        }
    },

    {
        description:		'Add something new',
        method: 		'POST',
        path:			'/',
        fn: function( callback, args ){
            var result = Homey.app.addSomething( args.body );
            callback( null, result );
        }
    },

    {
        description:		'Update something',
        method: 		'PUT',
        path:			'/:id',
        fn: function( callback, args ){
            var result = Homey.app.updateSomething( args.params.id, args.body );
            callback( null, result );
        }
    },

    {
        description:		'Delete something',
        method: 		'DELETE',
        path:			'/:id',
        fn: function( callback, args ){
            var success = Homey.app.deleteSomething( args.params.id );

            if( !result )
                callback( success, null );
            } else {
                callback( null, success );
            }
        }
    }

]
