$(function() {
	$('#mainMenu li').click(function() {
		alert('click');
		$('#mainMenu li').removeClass('special');
		$(this).addClass('special');
	});
});