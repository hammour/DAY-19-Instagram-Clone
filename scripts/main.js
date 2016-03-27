
// toggling the input form 
	
	//to show...

$('#crossToggle').on('click',function(){
	$('.addingUrl').css('display','block');
		});
	// to hide...
$('#cancelImageBtn').on('click',function(){
	$('.addingUrl').css('display','none');
		});

// defining form input values and ouput values linked to the HTML page using jQuery

var imageUrlEl=$('#imageUrl');
var imageCaptionEl=$('#imageCaption');


//getting the data from the server and displaying it on the page...


var gettingData = {
	url: 'http://small-tiyfe.herokuapp.com/collections/Hammogram',
	dataType: 'json',
	type: 'GET',
	success: function(data){
		console.log(data);
		console.log('ok');
		//clearing the page...
		$('.postingImages').html(' ')
		data.forEach(function (val){
			//writting to HTML document
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
		//toggling the input form...
		$('.addingUrl').css('display','none');
		//clearing the fields by reseting the value
		$('#imageUrl').val('');
		$('#imageCaption').val('');
		$('#errMsg').css('display','none');
	},

	error: function(err){
		console.log(err);

	},

	complete: function(){
		console.log('Loaded');
	}


}







// getting input from the form and posting it...
$('form').submit(function(e){
		e.preventDefault();
		// running check if the fields have valid strings or not
		if (checkFields(imageUrlEl.val(),imageCaptionEl.val())){
				//case true... Post and get the data, display it on the HTML page 
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
			//getting data and display it... 
			$.ajax(gettingData);

			}
		else{$('#errMsg').css('display','block');}
		
	});



// the function that is checking fields for right input. 
function checkFields(url,caption){
	var urlLength= url.length;


	if((!caption)||(!url)){
		//$('#errorMessage').css('display','block');
		return false;

	}
	else if(url.substring(0,4)!=='http'){
		//$('#errorMessage').css('display','block');
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

















