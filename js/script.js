$('.waypoint').waypoint(function(e){
		var waypointId = this.element.id;
		$('.topMenu a').removeClass('link_active');
		// console.log(this.element.id);
		$('.topMenu a').each(function(){
			// console.log($(this).attr('href').slice(1), waypointId);
			if( $(this).attr('href').slice(1) == waypointId )
				$(this).addClass('link_active');
		});
		
		// alert(this.element.id + ' hit')
	},
	{
		offset: '50%'
	}
);

$("a.link").click(function() {
	var element = $(this).attr('href').slice(1);
	// $('.topMenu a').removeClass('link_active');
	// $(this).addClass('link_active');
    $('html, body').animate({
        scrollTop: $("#"+element).offset().top-100
    }, 700);
    return false;
});
$(".logo").click(function() {
	$('html, body').animate({
        scrollTop: $("body").offset().top
    }, 700, function(){
    	$('.topMenu a').removeClass('link_active');
    });
    return false;
});


$('.portfolioBlock').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
  	enabled: true
  }
  // other options
});

$('.test').magnificPopup({ 
  items: [
	  {
	  	src: 'http://localhost/portfolio/img/works/1_orginal.png',
	  	title: 'test title'
	  }
  ],
  gallery: {
  	enabled: true
  },
  type: 'image'
});

$(window).scroll(function(){
	if( $(window).scrollTop() > 100 )
	{
		$('.nav_bar').addClass('opacity');
	}
	else
	{
		$('.nav_bar').removeClass('opacity');
	}

});

/* ANIMATE */
$('.resumeAnimate').waypoint(function(e){
	$(this.element).removeClass('animateHidded');
	if( $(this.element).attr('data-block') == 1 )
		$(this.element).addClass('fadeInUp');
	else
		$(this.element).addClass('fadeInUp');
},
{
	offset: '70%'
});

$('.works').waypoint(function(e){
	$(this.element).removeClass('animateHidded');
	$(this.element).addClass('flipInY');
},
{
	offset: '70%'
});

$('.wrapRec').waypoint(function(e){
	$(this.element).removeClass('animateHidded');
	$(this.element).addClass('bounceIn');
},
{
	offset: '85%'
});