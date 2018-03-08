/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

var scrollHere = function(element) {
    $('html, body').stop().animate({
        scrollTop: $(element.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        scrollHere($(this));
        event.preventDefault();
    });
    $('#hidecontact').bind('click', function() {
        $("section#contact").addClass('hidden');
    });
    $('#hideapply').bind('click', function() {
        $("section#apply").addClass('hidden');
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});