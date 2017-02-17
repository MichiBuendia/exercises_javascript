$(document).ready(function(){

	$("textarea").keyup(function(){
		var max = 140;
		var char;
		var len = $(this).val().length;
		if (len <= max) {
			char = max - len;
			$('.counter').text(char);
			$('a').css({ "pointer-events":"auto","opacity": "1"});
		  }
		  else {
		  	char = - (len - max);
		  	$('.counter').text(char);
			$('a').css({ "pointer-events":"none", "opacity": "0.5"});
		  }

	});

	$("a").click(function(){
		var post = ($("textarea").val());
		if(post!=""){
			$(".posts").prepend("<li><img src='img/account.png' width='30px'>"+ post +"</li>");
			$("textarea").val('');
			$(".counter").text("140");
		}
	});

});
