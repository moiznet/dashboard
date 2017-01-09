//controlador llamado notasController al que inyectamos el modelo notasModel
Agenda.controller("newsController", function($scope){
 
    //obtenemos todas las notas
    $scope.news = [

    	{	category: 'Chain Store Age',
    		date:'Feb 22, 2016 ',
    		likes: 132,	
    		title: 'Billabong taps NetSuite to power omnichannel strategy',
    		img: 'views/images/Image01.png',
    		description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'

    	},
    	{	category: 'Business Wire',
    		date:'Feb 18, 2016  ',
    		likes: 132,	
    		title: 'New Study Shows One Critical Industry Lagging Behind in Software Security',
    		img: '',
    		description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'

    	},
    	{	category: 'Business Wire',
    		date:'Feb 13, 2016 ',
    		likes: 132,	
    		title: 'AlphaGo and the Declining Advantage of Big Companies',
    		img: 'views/images/Image02.png',
    		description: 'Panelists at CIIs spring conference discuss governance implications of shift in US firms’ approach to capital allocation When it comes to uses of cash, investors are slightly schizophrenic about...'

    	},
    	{	category: 'Chain Store Age',
    		date:'Feb 13, 2016 ',
    		likes: 132,	
    		title: 'Journelle, Alton Lane streamline process with NetSuite platform',
    		img: 'views/images/Image01.png',
    		description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'

    	},
    	{	category: 'Internet Retailer',
    		date:'Feb 14, 2016 ',
    		likes: 132,	
    		title: 'NetSuite rolls out a new e-procurement system for B2B companies',
    		img: 'views/images/Image03.png',
    		description: 'Katherine BoccaccioNetSuite Inc. announced that two fashion and apparel retailers — Journelle, a seller of high-end lingerie and loungewear, and Alton Lane, a maker of men’s custom-tailored...'

    	},
    	{	category: 'The Wall Street Journal',
    		date:'Feb 13, 2016  ',
    		likes: 132,	
    		title: 'NetSuite to Buy Email Marketing Company for $200 Million',
    		img: '',
    		description: 'Its been 25 years since Professor Jeffrey Sonnenfelds landmark book The Heros Farewell vividly documented the challenges and failures of CEO succession planning at large publicly traded...'

    	},
    	{	category: 'Business Wire',
    		date:'Feb 18, 2016  ',
    		likes: 132,	
    		title: 'New Study Shows One Critical Industry Lagging Behind in Software Security',
    		img: '',
    		description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'

    	},
    	{	category: 'Business Wire',
    		date:'Feb 13, 2016 ',
    		likes: 132,	
    		title: 'AlphaGo and the Declining Advantage of Big Companies',
    		img: 'views/images/Image02.png',
    		description: 'Panelists at CIIs spring conference discuss governance implications of shift in US firms’ approach to capital allocation When it comes to uses of cash, investors are slightly schizophrenic about...'

    	},
    	{	category: 'Chain Store Age',
    		date:'Feb 13, 2016 ',
    		likes: 132,	
    		title: 'Journelle, Alton Lane streamline process with NetSuite platform',
    		img: 'views/images/Image01.png',
    		description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'

    	},
    	{	category: 'Internet Retailer',
    		date:'Feb 14, 2016 ',
    		likes: 132,	
    		title: 'NetSuite rolls out a new e-procurement system for B2B companies',
    		img: 'views/images/Image03.png',
    		description: 'Katherine BoccaccioNetSuite Inc. announced that two fashion and apparel retailers — Journelle, a seller of high-end lingerie and loungewear, and Alton Lane, a maker of men’s custom-tailored...'

    	}




    ]


});
Agenda.directive("diferentheight",function(){
  return{
    link: function(scope,ele,attr){

    	setInterval(function(){ $('.container').masonry({
  // options
  itemSelector: '.grid-item',
  
}); }, 0);
     
    }
  }
});