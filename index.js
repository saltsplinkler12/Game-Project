$(function(){
	animateDiv();

	var counters = 0;
	//created an array for people and set boolean to them if they are good or bad
	var people = [{
		src: "batman.jpg",
		isBad: false
	},{
		src: "spider.jpg",
		isBad: false
	},{
		src: "captainAm.jpg",
		isBad: false
	},{
		src: "flash.jpg",
		isBad: false
	},{
		src: "super-man-logo.jpg",
		isBad: false
	},{
		src: "bane.jpg",
		isBad: true
	},
	{
		src: "captain.cold.jpg",
		isBad: true
	},{
		src: "redskull.jpg",
		isBad: true
	},{
		src: "lexluther.jpg",
		isBad: true


	}];

function  changeImage (id) {
	var size = people.length
	var x = Math.floor(size * Math.random())
	var newPerson = people[x]
		
		$(id).removeClass("bad")
		$(id).attr('src', newPerson.src)
	
	if (newPerson.isBad) {
		$(id).addClass("bad")
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

function startGame(){
	for(var i = 0; i < 9; i++) {
		var size = people.length
		var x = Math.floor(size * Math.random());
		var newPerson = people[x]
	
		$('#randoms' + i).attr('src', newPerson.src);
	
	if (newPerson.isBad){
			$('#randoms' + i).addClass("bad")
		}
}

	}
    $(".start").click(function (event){
    	counter = 21;	
		timer = setInterval(decTime,1000);
    	startGame();	
	});

function hideElements(){
    
    $(".start").click(function(){
        $(".start",).hide();
    });
  	
  	$(".start").click(function(){
        $("#side",).hide();
    });
}
hideElements();

function gunMusic (){
	var isPlay = false;
	var sound = document.createElement('audio');
		
	sound.setAttribute('src', 'gunshot.mp3');
	$.get();

	$('.random').click(function(){
		sound.play();
		isPlay = true;
	});

	$('.random').click(function(){
		sound.play();
		isPlay = true;
	});
	
	}
	gunMusic();

    // if we have, increment the score or else decrement if friendly
function addCounter(){
	$('.random').click(function () {
		var person = $(this)
		// console.log(person.attr("src"))
		// console.log(person.hasClass("bad"))

		// check to see if we've shot a bad person
		if(person.hasClass ('bad')){	
			counters++;
			$('.score-count').html(counters);
		}
		// else if('.score-count' === 10){
		// 	console.log("you win");
		// }
		else{
			counters--;
			$('.score-count').html(counters);
		}
		var id = '#' + $(this).attr('id');
		changeImage(id);
	})
}
	addCounter();

function makeNewPosition(){
    	// Get viewport dimensions (remove the dimension of the div)
    var h = $('#board').height() + 10;
    var w = $('#board').width() + 10;

    var nh = Math.floor(Math.random() * h);
   	var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
}
function animateDiv(){
    
    $('.random').each(function() {
       var newq = makeNewPosition();

      $(this).animate({ top: newq[0]+110, left: newq[1] },3000, function(){
       	 animateDiv();        
      });
    })
}



function decTime(){

	
	counter = counter -1;
	
	$('#counter').html(counter);
	
	if(counter <= 0){
		clearInterval(timer);
		$('#counter').html("OUT OF TIME!!");
		return;
	}

}
// decTime();




});