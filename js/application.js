jQuery(document).ready(function($) {
	//
	setTimeout(function(){
		$(".content div").css('height',$(".box .image img").height() + 'px');
	}, 500);
	//
	$( window ).resize(function() {
		$(".content div").css('height',$(".box .image img").height() + 'px');
	});
	//
	$(document).on('click', '.modal-link', function(event) {
		event.preventDefault();
		/* Act on the event */
		var modal = $('#' + $(this).data('modal'));
        var src = $(this).data('video');
        var iframe = $(modal).find('iframe');
        $(modal).find('p.title').html($(this).find('.content').find('p').text());
        $(iframe).attr('src',src);
		//
		$(modal).modal('show');
        //
        $(modal).find('.modal-content').removeClass('blue');
        $(modal).find('.modal-content').removeClass('red');
        $(modal).find('.modal-content').removeClass('yellow');
        $(modal).find('.modal-content').removeClass('orange');
        $(modal).find('.modal-content').addClass($(this).data('border'));
        //		
       	return false;
	});
	//
	$(document).on('click', '.close', function(event) {
		event.preventDefault();
		/* Act on the event */
		var modal = $('#' + $(this).data('modal'));
        var iframe = $(modal).find('iframe');
        $(iframe).attr('src','');
		$(modal).modal('hide');
		return false;
	});
	//
	$('#video-modal').on('hidden.bs.modal', function () {
	    $('#video-modal iframe').removeAttr('src');
	});
	//
	$(document).on('click', '.menu', function(event) {
		event.preventDefault();
		/* Act on the event */
		if($(".share").hasClass('hidden')){
			$(".share").removeClass('hidden');
		}else{
			$(".share").addClass('hidden');
		}
	});
});
