In order to use this app you must have:
- Have a Raspberry Pi
- Have a P1 cable connected to your Raspberry Pi
- Configured a DSMR parser on your Raspberry Pi
- Configured an API on your Raspberry Pi to execute a command line



Basic flow of the app:
1. Execute cron job to initialize the app
2. Gather settings from file
3. Execute a REST GET call to your Raspberry Pi
4. Recieve response with body
5. Parse body into fields for storage
6. Store data
7. Graph data



Possible use cases:
1. Execute flow based on current power usage
2. Execute flow based on current power production
3  ...
