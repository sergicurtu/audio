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
		

	var mediaRec = null;
    var recTime = 0;
	var filepart = Date.now();
	var recordSrc = filepart + "." + "amr";  // 'cdvfile://localhost/temporary/recording.mp3' //
	//alert(recordSrc);
	

	recordAudio();
	
    //Record audio
    function recordAudio() {
		
        alert("recordAudio(), recording to " + recordSrc);
        //alert(" -- media=" + mediaRec);

        //releaseAudio();

        if (!mediaRec) {
            mediaRec = new Media(recordSrc,
                function () {
                    alert("recordAudio():Audio Success");
                },
                    function (err) {
                    alert("recordAudio():Audio Error: " + err.code);
                    setAudioStatus("Error: " + err.code);
                },
                    function (status) {
                    alert("recordAudio():Audio Status: " + status);
                    setAudioStatus(Media.MEDIA_MSG[status]);
                });
        }

        // Record audio
        mediaRec.startRecord();

        // Stop recording after 10 sec
        recTime = 0;
        var recInterval = setInterval(function () {
                recTime = recTime + 1;
                setAudioPosition(recTime + " sec");
                if (recTime >= 10) {
                    clearInterval(recInterval);
                    if (mediaRec.stopAudioRecord) {
                        mediaRec.stopAudioRecord();
                    } else {
                        mediaRec.stopRecord();
                    }
                    alert("recordAudio(): stop");
                }
            }, 1000);
    }

	// Set audio position
	//
	function setAudioPosition(position) {
		document.getElementById('audio_position').innerHTML = position;
	};	
	
	//Set audio status
    function setAudioStatus(status) {
        document.getElementById('statusValue').innerHTML = status;
    }
	
	//Release audio
    function releaseAudio() {
        alert("releaseAudio()");
        if (mediaRec) {
            mediaRec.stop(); //imlied stop of playback, resets timer
            mediaRec.release();
        }
    }	
 
}, false);
