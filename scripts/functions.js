$('tbody td:not(.table-red):first-child').on('click',function(e){
	$(this).parent().toggleClass('active')
})

$('.openModal').on('click',function(e){
	e.preventDefault();
	$('.modal').fadeIn();
	$('body').addClass('modal-open')
})

$('.delivery a').on('click',function(e){
	e.preventDefault();
	$('.delivery li').removeClass('active');
	$(this).parent().addClass('active');
	bucket = $(this).attr('class');
	if(bucket == "pickup"){
		$('#del-add').slideUp();
		$('#time').slideDown();
	}else{
		$('#time').slideUp();
		$('#del-add').slideDown();
	}
});

$('span.close').on('click',function(e){
	$('.modal').fadeOut();
	$('body').removeClass('modal-open')
})

$('.remove-order').on('click',function(e){
	$(this).parent().remove();
})

$('.bxslider').bxSlider({
  captions: true,
  auto:true
});