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
 
}, false);
