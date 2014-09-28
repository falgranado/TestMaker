$(document).ready(function(){

	

	$('#courseSelect').on('change',function () {
		var selection = $(this).val();

		switch(selection){
			case 'art':
				$.ajax
				break;
			case 'caculus':
				break;
			case 'probability':
				break;
			case 'databases':
				break;
			case 'datastructure':
				break;
			default:

		}

	});

	$('#submit').on('click',function(){
		var time =$('#time').val();
		if(time == ""){
			alert('Time is mandatory')
		}else{
			timer(time);
		}
		
	});


});

function timer(time,showTime){
	if(time <= 60){
		var  millis = time *1000*60;
	}else{
		var millis = time*1000*60;
	}
	
	console.log(millis);

	function displaytimer(){
	    //Thank you MaxArt.
	    var hours = Math.floor(millis / 36e5),
	        mins = Math.floor((millis % 36e5) / 6e4),
	        secs = Math.floor((millis % 6e4) / 1000);
	       // if(showTime == false){
	        	$('#timer').text(hours+':'+mins+':'+secs);
	        //}else{

	       // }  
	}

	setInterval(function(){
	    millis -= 1000;
	    displaytimer();
	}, 1000);
		
}
