//define global variables
//use object literal notation var className = {functionName: function(){}};


var counter = 0,
	XMLdata,
	contactDiv = $('#contactContainer'),
	skillDiv = $('#skillContainer'),
	currentProjectName;

//code
jQuery(document).ready(function($) {

	'use strict';

	// dragScroll.dragScrollablePlugin();
	// navigation.setAddressPlugin();
	navigation.preload(['resources/images/omnimedia-logo-3D2.png']);
	navigation.createMainNav();
	loadContent.loadXMLfile();

	console.log('ready cyborg');

});

var navigation = {

// setAddressPlugin: function ()
// {	
// 	//register each navigation element with jquery address plugin
// 	$.address.init(function(event)
// 	{
// 		$('ul#mainnav li a').address(function()
// 		{ 
// 			return $(this).attr('href').replace(location.pathname, ''); 
// 		});	
// 	})
// 	.change(function(event)
// 	{  
// 	    var page = event.value.replace(/^.(\s+)?/, "").replace(/\/$/, '').split('/');
// 	    navigation.mainNavPageSelect(page);
// 	});
// },

mainNavPageSelect: function(page)
{		  	
	switch(page[1])
	{
		case 'home':
			if(page.length > 1){
				pageSelect.showHome();
				
			} else {
				
			}
			break;
		case 'projects':
			if(page.length > 1){
				//once page[2] is set projects can be loaded
				//loadContent.convertNameToId(page[2]);
			} else {
				//set first project address
				//loadContent.setFirstProjectAddress();
			}
			break;
		case 'skills':
			if(page.length > 1){
				pageSelect.showSkills();
			} else {

			}				
			break;
		case 'contact':
			if(page.length > 1){
				pageSelect.showContact();
			} else {

			}
			break;
	}
},

preload: function (preloadImageArr) 
{
    $(preloadImageArr).each(function()
	{	
		//$('<img />').attr('src',this).appendTo('#introColumnTwo').css({marginTop:0});
		// $('#introColumnOne, #introColumnTwo, #projectNavContainer').css({opacity:0}).children('img').pngFix();
		$('#projectContainer, #skillContainer, #contactContainer').fadeOut(40);
    });
	
	$('#preloader').animate({opacity: 0}, 600, function()
	{
		$('#preloader').remove();
		$('#introColumnOne').delay(200).animate({opacity: 1}, 1200);						
		$('#projectNavContainer').delay(400).animate({opacity: 1}, 850);
	});
},

createMainNav: function ()
{
				
	$('#mainnav li').each(function(i)
	{ 
		$('#mainnav li:eq('+i+') a').delay(2400).animate({marginTop: 0}, 1200); 
	});
			
	$('.projectTitle').hover(function()
	{
		$(this).addClass('.projectImg').stop().animate({paddingTop: '60px'}, 350, 'easeInBounce');
		console.log('hoverin');
		// $(this).addClass('span.bg').stop().animate({height: '80px'}, 350, 'easeInCirc').animate({background:'#c69'},200, 'easeInCirc');
	},
	function()
	{
		// $(this).children('span.bg').stop().animate({height: '0px'}, 500, 'easeOutCirc').animate({background:'#ff0'},200, 'easeInCirc');
		$(this).removeClass('projectImg').stop().animate({paddingTop: '0px'}, 2500, 'easeOutBounce');
		console.log('hoverout');
	});
	
	$('.img-responsive').hover(function()
	{
		$(this).addClass('gblogo').stop().animate({paddingTop: '60px'}, 350, 'easeInBounce');
		console.log('hoverin');
		// $(this).addClass('span.bg').stop().animate({height: '80px'}, 350, 'easeInCirc').animate({background:'#c69'},200, 'easeInCirc');
	},
	function()
	{
		// $(this).children('span.bg').stop().animate({height: '0px'}, 500, 'easeOutCirc').animate({background:'#ff0'},200, 'easeInCirc');
		$(this).removeClass('gblogo').stop().animate({paddingTop: '0px'}, 2500, 'easeOutBounce');
		console.log('hoverout');
	});		
}

};

var loadContent = {
loadXMLfile: function()
{
	$.ajax
	({
		type: "GET",
		url: 'resources/portfolio.json',
		contentType:"application/json",
		dataType: 'json',
		success: function(data)
		{
		
			var projectNameListArr = [];
			$.each(data.projects.project, function(index, item)
			{
				projectNameListArr.push('<li><a href="#">' + item.name + '</a></li>'); 
			});
			
			$('#projectNav').html(projectNameListArr);
			loadContent.loadProjectNames();
		
		},
		error: function(error)
		{
			//alert('XML:'+error.statusText);
		}
	});
},

loadProjectNames: function ()
{
	$('#projectNav li a').click(function(e)
	{
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		var projectNamePath = $(this).text().toLowerCase().replace(/ /g,'-');
		$.address.path('/html5/projects/'+projectNamePath+'/');
		loadContent.convertNameToId(projectNamePath);
		pageSelect.showProjects();
	});
},

convertNameToId: function (projectName)
{
	var projectArray = [];
	
	$.getJSON('resources/portfolio.json', function(data){	
		$.each(data.projects.project, function(index, item)
		{
			projectArray.push(item.id);
			//alert('convert');
		});
	});
	
	var id = $.inArray(projectName, projectArray);

	loadContent.loadProjectImages(id);
	loadContent.loadProjectText(id);
	//currentProjectName == id;
},

//gallery

loadProjectImages: function (id)
{
	var projectImageArr = [];
	
	$.getJSON('resources/portfolio.json', function(data){	
		$.each(data.projects.project, function(index, item)
		{
			projectImageArr+= '<li id=projectListItem'+index+'><img src= "../../../resources/js/'+item.images+'"></li>';
			
			var projectImage = $('<img>').attr('src', $(this).text())
			.load(function()
			{
				$('#projectListItem'+i+'').html(projectImage)
				
				.find('img')
				.css({opacity: 0}, 0)
				//.width('400px')
				.delay(400*i)
				.animate({opacity: 1}, 200);
			});
			
		});
		$('#scroller').html(projectImageArr);
	});
	
},

loadProjectText: function (id)
{
	var projectNameStr = [];
	
	$.getJSON('resources/portfolio.json', function(data){	
		$.each(data.projects.project, function(index, item)
		{
			//projectNameStr+='<li><img src= "../../../resources/js/'+item.name[0]+'"></li>';
			projectNameStr.push(item.client);
			//alert('projectNameStr');
		});
		$('#project-title').html(projectNameStr);
	});
	//var name = $(XMLdata).find('project:eq('+id+')').find('name').text();
	//var description = $(XMLdata).find('project:eq('+id+')').find('description').text();
	//var services = $(XMLdata).find('project:eq('+id+')').find('services').text();
	//var link = $(XMLdata).find('project:eq('+id+')').find('link').text();
	//var websitelink = '<a href="../../../resources/js/'+link+'" class="hyperLink" target="_blank">'+link+'</a>';
	
	
	//$('span#project-description').html(description);
	//$('span#project-services').html(services);
	//$('span#project-link').html(websitelink); 
}
};

var dragScroll = {
//scrollPos returns a number which is a parameter for scrollTo
scrollPos: function (currentImageNumber)
{
	number = ((
	(338*(currentImageNumber-1))
	+
	(1*(currentImageNumber-1))
	));
	
	return number;
},

dragScrollablePlugin: function ()
{
//	$("#viewport").niceScroll({
//		cursoropacitymin:0,
//      cursoropacitymax:1,
//      cursorcolor:"#3366cc",
//      cursorwidth:"4px",
//      cursorborder:"1px solid #336699",
//      cursorborderradius:"2px",
//      scrollspeed:30,
//      mousescrollstep:8*3,
//      touchbehavior:true,
//      hwacceleration:true,
//      usetransition:true,
//      boxzoom:false,
//      dblclickzoom:true,
//      gesturezoom:true,
//      grabcursorenabled:true,
//      autohidemode:true,
//      background:"",
//      iframeautoresize:true,
//      cursorminheight:32,
//      preservenativescrolling:true,
//      railoffset:false,
//      bouncescroll:true,
//      spacebarenabled:true,
//      railpadding:{top:0,right:0,left:0,bottom:0},
//      disableoutline:true,
//      horizrailenabled:true,
//      railalign:"right",
//      railvalign:"bottom",
//      enabletranslate3d:true,
//      enablemousewheel:true,
//      enablekeyboard:true,
//      smoothscroll:true,
//      sensitiverail:true,
//      enablemouselockapi:true,
////      cursormaxheight:false,
//      cursorfixedheight:false
//		});
	
	// $('#viewport').overscroll({
 //    	cancelOn:       'select,input,textarea',
	// 	direction:      'horizontal',
	// 	dragHold:       false,
	// 	hoverThumbs:    false,
	// 	scrollDelta:    6,
	// 	showThumbs:     true,
	// 	persistThumbs:  false,
	// 	wheelDelta:     20,
	// 	wheelDirection: 'horizontal',
	// 	zIndex:         999
				
	// });
}
};

$.fn.pngFix = function() 
{
	if (!$.browser.msie || $.browser.version >= 7) {return $(this);}

  	return $(this).each(function()
  	{
    	var img = $(this);
    	var src = img.attr('src');

    	img.attr('src', 'resources/images/x.gif')
		.css('filter', "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='crop',src='" + src + "')");
  	});
};

// if (!window.console || !console.firebug)
// {
//     var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
//     "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

//     window.console = {};
//     for (var i = 0; i < names.length; ++i)
// 	window.console[names[i]] = function() {}
// }

//home
var pageSelect = {
showHome: function ()
{
	//pageSelect.hideDisplayDiv();
	$.address.path('/html5/home/');
	
	var currentContainer = '';
	
	$('#introContainer, #projectContainer, #skillContainer, #contactContainer').hide();
	$('.section-1, .section-2, .section-3').parent().removeClass('tabs-selected');
	showContainer('introContainer');
	
	$('ul#mainnav li a').click(function(e)
	{
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		hideContainer($(this).attr('class').split(' ')[0]);
	});
		
	function showContainer(id)
	{
		currentContainer = id;
		$('#'+id).fadeIn(40);
		$('.'+id).parent().addClass('tabs-selected');
	}
	
	function hideContainer(id)
	{
		//$('#'+currentContainer).fadeOut(400);
		$('.'+currentContainer).parent().removeClass('tabs-selected');
		showContainer(id);
	}
},

showProjects: function(){
	
		var currentContainer = '';
		
		$('#introContainer, #projectContainer, #skillContainer, #contactContainer').hide();
		$('.section-1, .section-2, .section-3').parent().removeClass('tabs-selected');
		showContainer('projectContainer');
		
		
		$('ul#mainnav li a').click(function(e)
		{
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
			hideContainer($(this).attr('class').split(' ')[0]);
		});
			
		function showContainer(id)
		{
			currentContainer = id;
			$('#'+id).fadeIn(40);
			$('.'+id).parent().addClass('tabs-selected');
		}
		
	function hideContainer(id)
	{
		//$('#'+currentContainer).fadeOut(400);
		$('.'+id).parent().removeClass('tabs-selected');
		showContainer(id);
	}
},

//skills
showSkills: function ()
{	
	//pageSelect.hideDisplayDiv();
	$.address.path('/html5/skills/');
	
	var currentContainer = '';
	
	$('#introContainer, #projectContainer, #skillContainer, #contactContainer').hide();
	$('.section-1, .section-2, .section-3').parent().removeClass('tabs-selected');
	showContainer('skillContainer');
	alert('showskillcon')
	
	$('ul#mainnav li a').click(function(e)
	{
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		hideContainer($(this).attr('class').split(' ')[0]);
	});
		
	function showContainer(id)
	{
		currentContainer = id;
		$('#'+id).fadeIn(40);
		$('.'+id).parent().addClass('tabs-selected');
	}
	
	function hideContainer(id)
	{
		//$('#'+currentContainer).fadeOut(400);
		$('.'+currentContainer).parent().removeClass('tabs-selected');
		showContainer(id);
	}
},

//contact
showContact: function ()
{
	
	//pageSelect.hideDisplayDiv();
	$.address.path('/html5/contact/');
	
	var currentContainer = '';
	
	$('#introContainer, #projectContainer, #skillContainer, #contactContainer').hide();
	$('.section-1, .section-2, .section-3').parent().removeClass('tabs-selected');
	showContainer('contactContainer');
	
	$('ul#mainnav li a').click(function(e)
	{
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		hideContainer($(this).attr('class').split(' ')[0]);
	});
		
	function showContainer(id)
	{
		currentContainer = id;
		$('#'+id).fadeIn(40);
		$('.'+id).parent().addClass('tabs-selected');
	}
	
	function hideContainer(id)
	{
		//$('#'+currentContainer).fadeOut(400);
		$('.'+currentContainer).parent().removeClass('tabs-selected');
		showContainer(id);
	}

},

showDisplayDiv: function(displayDiv){
	if (displayDiv == contactDiv)
	{
		$('#contactContainer').delay(700).animate({marginBottom: '0px'}, 80, function()
		{
			pageSelect.showOverlay();
		});
	}
	else{}
},

showOverlay: function ()
{
	$('#overlay').fadeIn();
	$('#overlay').click(function(e)
	{
		$.address.path('/html5/home/');
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		pageSelect.hideDisplayDiv(contactDiv);
	})
},

hideDisplayDiv: function (displayDiv){
	if(displayDiv == contactDiv)
	{
		$('#contactContainer').animate({marginBottom: '-120px'}, 60, function()
		{
			$('#overlay').fadeOut();
			//alert('showhome');
		});
		//reset displayDiv
		displayDiv = undefined;
	}
	else{}
}
};