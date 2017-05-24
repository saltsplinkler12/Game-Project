$(function(){

	// console.log('dom is ready');	
	var counters = 0;
	//created an array for people and set boolean to them if they are good or bad
	var people = [{
		src: "trump.jpg",
		isBad: true
	},{
		src: "barack.jpg",
		isBad: false
	},{
		src: "Katie.jpg",
		isBad: true
	}];
	
	function  changeImage () {
	    var size = people.length
	  	var x = Math.floor(size * Math.random())

	  	var newPerson = people[x]

	  	$('#random').removeClass("bad")

		$('#random').attr('src', newPerson.src)

		if (newPerson.isBad) {
			$('#random').addClass("bad")
		}
		}

	function playMusic (){
		var isPlaying = false;
		var song = document.createElement('audio');
		
		song.setAttribute('src', 'kano.mp3');
		$.get();

		$('.button').click(function(){
		song.play();
		isPlaying = true;
	
	});
	
	}	
	playMusic();

	// to prevent friendly images from being shot
	$(".friendly").click(function (event){
  		changeImage();
	});
	
	// calling changeImage  function on start button 
    $(".start").click(function (event){
  		changeImage();
	});

    function gunMusic (){
		var isPlay = false;
		var sound = document.createElement('audio');
		
		sound.setAttribute('src', 'gunshot.mp3');
		$.get();

		$('#random').click(function(){
		sound.play();
		isPlay = true;
	});

	}
		gunMusic();

    // if we have, increment the score or else decrement if friendly
    function addCounter(){
		$('#random').click(function () {
		var person = $(this)
		console.log(person.attr("src"))
		console.log(person.hasClass("bad"))

		// check to see if we've shot a bad person
		if(person.hasClass ('bad')){	
			counters++;
			$('.score-count').html(counters);
		}
		else{
			counters--;
			$('.score-count').html(counters);
		}
		changeImage();
	})
}
		addCounter();

});