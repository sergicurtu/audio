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
		}
	};

	// capture error callback
	var captureError = function(error) {
		navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
	};

	// start audio capture
	navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:10});
		
	//alert("recording now");
	recordAudio();

	function recordAudio() {
		
		//alert("cridada funció");
		
		var filepart = Date.now();
		
		//alert(filepart);
		
		var src = filepart + "." + "amr";  // 'cdvfile://localhost/temporary/recording.mp3' //

		alert(src);
		
		var mediaRec = new Media(src);

		mediaRec.release();
		
		// Record audio
		mediaRec.startRecord();

		alert("recording");
		
		// Stop recording after 10 sec
		var recTime = 0;
		var recInterval = setInterval(function() {
			recTime = recTime + 1;
			setAudioPosition(recTime + " sec");
			if (recTime >= 10) {
				clearInterval(recInterval);
				mediaRec.stopRecord();
			}
		}, 1000);
	};

	// onSuccess Callback
	//
	function onSuccess() {
		//console.log("recordAudio():Audio Success");
		alert("recordAudio():Audio Success");
	};

	// onError Callback
	//
	function onError(error) {
		alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
	};

	// Set audio position
	//
	function setAudioPosition(position) {
		document.getElementById('audio_position').innerHTML = position;
	};	
	
		
 
}, false);
