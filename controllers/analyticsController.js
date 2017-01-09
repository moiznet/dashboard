//controlador llamado notasController al que inyectamos el modelo notasModel
Agenda.controller("analyticsController", function($scope, $http) {



    $scope.zonesid = [];
    $scope.speed = [];
    $scope.time = "";
    $scope.data1 = [];
    $scope.data2 = [];
    $scope.data3 = [];
    $scope.data4 = [];
    $scope.data5 = [];
    $scope.lables = [];
    $scope.counterMinute = 0;
    $scope.dataChartLine = [];
    $scope.lablestime = [];
    $scope.zonesid2 = [];
   
    $scope.speed2 = [];
     $scope.zonesid3 = [];
   
    $scope.speed3 = [];

    var drawlinechart = function() {


        var ctx = document.getElementById('myChart').getContext('2d');

        var options = {
        	 		responsive: true,
        		scales: {
            yAxes: [{
                ticks: {
                    
                    callback: function(value, index, values) {
                        return value+'Km';
                    }
                }
            }]
        },
        	legend: {
            display: true,
            position:'right',
            labels: {
                fontColor: 'rgb(101, 113, 122)'
            }
        },
            bezierCurve: false

        };


        var myChart = new Chart(ctx, {
            type: 'line',
            

            data: {
                labels: $scope.lablestime,
                datasets: $scope.datasets,

            },
            options: options

        });



    }


    $scope.setlinechar = function() {




        $http.get("models/activity-data.json")
            .then(function(response) {
                
                $scope.places = response.data;

                for (i = 0; i < $scope.places.length; i++) {


                    $scope.zonesid[i] = $scope.places[i].zoneId;
                    $scope.time = $scope.places[i].data.time;
                    $scope.speed[i] = $scope.places[i].data.speed;


                }




                console.log($scope.time);


                if ($scope.lables.length > 0) {

                    $scope.timex = ($scope.lables[$scope.lables.length - 1] + 60000);
                } else {

                    $scope.timex = $scope.time;

                }




                $scope.lables.push($scope.timex);

                if ($scope.lables.length > 7) { $scope.lables.shift(); }
                if ($scope.data1.length > 6) { $scope.data1.shift(); }
                if ($scope.data2.length > 6) { $scope.data2.shift(); }
                if ($scope.data3.length > 6) { $scope.data3.shift(); }
                if ($scope.data4.length > 6) { $scope.data4.shift(); }
                if ($scope.data5.length > 6) { $scope.data5.shift(); }

                function stampToTime(num) {
                    return (new Date(num)).getHours() + ":" + (new Date(num)).getMinutes() + "min";
                }
                $scope.lablestime = $scope.lables.map(stampToTime);

                $scope.data1.push($scope.speed[0]);
                $scope.data2.push($scope.speed[1]);
                $scope.data3.push($scope.speed[2]);
                $scope.data4.push($scope.speed[3]);
                $scope.data5.push($scope.speed[4]);





                $scope.datasets = [{
                    label: $scope.zonesid[0],
                    lineTension: 0.1,
                    data: $scope.data1,
                    borderColor: "rgba(218, 111, 231, 1)",
                    fill: false
                }, {
                    label: $scope.zonesid[1],
                    lineTension: 0.1,
                    data: $scope.data2,
                    borderColor: "rgba(250, 177, 62, 1)",
                    fill: false
                }, {
                    label: $scope.zonesid[2],
                    lineTension: 0.1,
                    data: $scope.data3,
                    borderColor: "rgba(127, 210, 13, 1)",
                    fill: false
                }, {
                    label: $scope.zonesid[3],
                    lineTension: 0.1,
                    data: $scope.data4,
                    borderColor: "rgba(92, 157, 245, 1)",
                    fill: false
                }, {
                    label: $scope.zonesid[4],
                    lineTension: 0.1,
                    data: $scope.data5,
                    borderColor: "rgba(239, 0, 0, 1)",
                    fill: false
                }]





                drawlinechart();

            }); //http:get
        $scope.counterMinute++;

    }


    $scope.setdonutchart = function (){

    		 $http.get("models/activity-data.json")
            .then(function(response) {
                console.log(response);
                $scope.places = response.data;

                for (i = 0; i < $scope.places.length; i++) {


                    $scope.zonesid2[i] = $scope.places[i].zoneId;
                  
                    $scope.speed2[i] = $scope.places[i].data.speed;


                }


                 var ctxd = document.getElementById('myChartdonut').getContext('2d');

            	console.log("hola lola");
            		console.log($scope.speed2);
		            var data = {
				    labels: $scope.zonesid2,
				    datasets: [
				        {
				            data: [$scope.speed2[0],$scope.speed2[1],$scope.speed2[2],$scope.speed2[3],$scope.speed2[4]],
				            backgroundColor: [
				                "#c25991",
				                "#f9992e",
				                "#a578f7",
				                "#5ddfca",
				                "#ef0000"
				            ],
				            hoverBackgroundColor: [
				                "#c25991",
				                "#f9992e",
				                "#a578f7",
				                "#5ddfca",
				                "#ef0000"
				            ]
				        }]
			};	

			var options = {
        	 
        	cutoutPercentage: 70,	
        	legend: {
            display: true,
            position:'bottom',
            labels: {
                fontColor: 'rgb(101, 113, 122)'
            }
        },
            

        };



            var myDoughnutChart = new Chart(ctxd, {
			    type: 'doughnut',
			    data: data,
			    options: options
			});











            });








    }



    $scope.setbarchart = function(){

    	$http.get("models/activity-data.json")
            .then(function(response) {
                console.log(response);
                $scope.places = response.data;

                for (i = 0; i < $scope.places.length; i++) {


                    $scope.zonesid3[i] = $scope.places[i].zoneId;
                  
                    $scope.speed3[i] = $scope.places[i].data.speed;


                }



    		 var ctxb = document.getElementById('myChartbar').getContext('2d');

    		var data = {
			    labels: $scope.zonesid2,
			    datasets: [
			        {
			           
			            backgroundColor: [
			                'rgba(91, 157, 245, 0.71)',
			                'rgba(91, 157, 245, 0.71)',
			                'rgba(91, 157, 245, 0.71)',
			                'rgba(91, 157, 245, 0.71)',
			                'rgba(91, 157, 245, 0.71)'
			                
			            ],
			            borderColor: [
			                'rgba(91, 157, 245, 0.71)',
			                'rgba(91, 157, 245, 0.71)',
			                'rgba(91, 157, 245, 0.71)',
			                'rgba(91, 157, 245, 0.71)',
			                'rgba(91, 157, 245, 0.71)'
			                
			            ],
			            borderWidth: 1,
			            data: $scope.speed2,
			        }
			    ]
			};
			var options = {};

    		var myBarChart = new Chart(ctxb, {
    	      type: 'bar',
      		  data: data
      		 
   			}); 

		 });






    }


    $scope.setlinechar();
    setInterval($scope.setlinechar, 60000);
    $scope.setdonutchart();
    setInterval($scope.setdonutchart, 60000);
    $scope.setbarchart();
     setInterval($scope.setbarchart, 60000);





})
