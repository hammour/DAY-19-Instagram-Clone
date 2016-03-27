
// toggling the input form 

$('#crossToggle').on('click',function(){
	$('.addingUrl').css('display','block');
		});

$('#cancelImageBtn').on('click',function(){
	$('.addingUrl').css('display','none');
		});

// defining form input values and ouput values linked to the HTML page using jQuery

var imageUrlEl=$('#imageUrl');
var imageCaptionEl=$('#imageCaption');
var hammoGramPhoto={
	url: imageUrlEl.val(),
	Caption: imageCaptionEl.val()
}




var gettingData = {
	url: 'http://small-tiyfe.herokuapp.com/collections/Hammogram',
	dataType: 'json',
	type: 'GET',
	success: function(data){
		console.log(data);
		console.log('ok');
		$('.postingImages').html(' ')
		data.forEach(function (val){
			
			$('.postingImages').append(
			
				'<div class="empty"></div>'
				+'<div class="item">' 
				+'<img src="'+val.url+'">'
				+'<div class="description">'
				+'<p>'
				+' '+val.Caption+' '
				+'</p>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'<div class="empty"></div>'
				);
			

			});
		$('.addingUrl').css('display','none');
		$('#imageUrl').val('');
		$('#imageCaption').val('');
	},

	error: function(err){
		console.log(err);

	},

	complete: function(){
		console.log('Loaded');
	}


}








$('form').submit(function(e){
		e.preventDefault();
		if (checkFields(imageUrlEl.val(),imageCaptionEl.val())){
				$.ajax({

				
					url: 'http://small-tiyfe.herokuapp.com/collections/Hammogram',
					dataType: 'json',
					type: 'POST',
					data: {
						url: imageUrlEl.val(),
						Caption: imageCaptionEl.val()
							},
						success: function(data){
							
							console.log('posted');

							

						},

						error: function(err){
							console.log(err);

						},

						complete: function(){
							console.log('Loaded');
						}


				})
			$.ajax(gettingData);

		}
	});



//checking fields for right input before adding an image 
function checkFields(url,caption){
	var urlLength= url.length;


	if((!caption)||(!url)){
		
		return false;

	}
	else if(url.substring(0,4)!=='http'){
		return false
	}

	// else if(url.substring(urlLength-4,urlLength)!=='.jpg'){
	// 	return false
	// }
	else{
		return true;
	}

}
$.ajax(gettingData);


// Adding more images using the input form 






//displaying added images in the HTML page using append






