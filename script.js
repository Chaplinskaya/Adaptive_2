$(function() 
{
	$('.toggles button').click(function()
	{
		var get_id = this.id;
		var get_current = $('.latest_block9 .' + get_id);

		$('.photo_latest').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#all').click(function()
	{
		$('.photo_latest').show(500);
	});
});