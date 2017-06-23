"use strict";

module.exports.init = function(){
	Homey.log("Starting Execute Pi P1");
	currentP1meterdataHost = Homey.manager('settings').get('currentRaspberryPiHost');
	currentDataLoation = Homey.manager('settings').get('currentDataLocation');	
	if(currentP1meterdataHost == null || currentDataLoation == null){
		Homey.log('No settings selected');
		Homey.manager('speech-output').say(__('setupneeded'));
	}
	
	Homey.manager('cron').on('action.get_p1meter_data',function(callback,args){
		Homey.log('Triggered by cron');
		onScheduleTrigger();
		callback(null,true);
	})
	
	Homey.log('Done init execute Pi P1 app');
	
}

var onScheduleTrigger = function(){
	Homey.log('Start Schedule trigger');
	
	currentP1meterdataHost = Homey.manager('settings').get('currentRaspberryPiHost');
	currentDataLoation = Homey.manager('settings').get('currentDataLocation');	
	
	if(currentCinemaId == null){
		Homey.manager('speech-output').say(__('setupneeded'));
		return;
	}
}

module.exports.init = init;
