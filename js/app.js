window.addEventListener('load', function() {
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
	*/
    $JSView.declareView({ 
        home: {
            url: '/home',
            template: 'views/home.html',
            controller: 'home'
        },
        scanner: {
            url: '/scanner',
            template: 'views/scanner.html',
            controller: 'scanner'
        },
        test: {
            url: '/test',
            template: 'views/test.html',
            controller: 'test'
        }
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        modalA: {
            url: '/modalA',
            template: 'views/modalA.html',
            controller: 'modalA'
        }
    });
     
    /*designar la pàgina inicial */
    $JSView
        .initView('home');
		
	// capture callback
	var captureSuccess = function(mediaFiles) {
		var i, path, len;
		for (i = 0, len = mediaFiles.length; i < len; i += 1) {
			path = mediaFiles[i].fullPath;
			
			// do something interesting with the file
			setAudioPosition(path);
			
		}
	};

	// capture error callback
	var captureError = function(error) {
		navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
	};

	
	// Set audio position
	function setAudioPosition(position) {
		document.getElementById('audio_position').innerHTML = position;
	};	
	
	
	
	// limit capture operation to 3 media files, no longer than 10 seconds each
	var options = { limit: 3, duration: 10 };
	
	// start audio capture
	navigator.device.capture.captureAudio(captureSuccess, captureError, options );
	setAudioPosition("captura iniciada ?");
	
 
}, false);
