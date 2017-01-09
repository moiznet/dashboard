//controlador llamado notasController al que inyectamos el modelo notasModel
Agenda.controller("notasController", function($scope, $location){

	$scope.widthboard = '80%';

	$scope.state  = 'close menu';
 
    $scope.closeMenu = function (){

    	var myEl = angular.element( document.querySelector( '.menu' ) );
    	var myEl2 = angular.element( document.querySelector( '.board' ) );

    	if( myEl.hasClass('closed') ){

    		myEl.removeClass('closed');
    		myEl2.removeClass('closed');
    		$scope.widthboard = '80%';
    		$scope.state  = 'close menu';



    	}else{

    	

    	
		myEl.addClass('closed');
		myEl2.addClass('closed');
		var width = document.body.clientWidth;
		$scope.widthboard	= width-80;
		$scope.state = 'Open menu';

	}







    }


    $scope.goto = function( path ){


    		$location.path( path );


    }

 
});
