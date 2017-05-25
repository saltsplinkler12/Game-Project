$(function(){
	animateDiv();
	$("#win").hide();
	$("#loose").hide();
	
	var counters = 0;
	//created an array for marvels and bad guys and set boolean to them if they are good (false) or bad (true)
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
//function used to create random images using Math.floor and Math.random function.
//variable newPerson ise used to asign people 
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
		        $(".start").hide();
		    });
		  	
		  	$(".start").click(function(){
		        $("#side").hide();
		    });

		    $(".start").click(function(){
		        $(".again").hide();
		    });
		}
		 hideElements();

	function gunMusic (){
		var isPlay = false;
		var sound = document.createElement('audio');
			
		sound.setAttribute('src', 'gunshot.mp3');

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

			if(person.hasClass ('bad')){	
				counters++;
				$('.score-count').html(counters);
			}
			else{
				counters--;
				$('.score-count').html(counters);
			}
			var id = '#' + $(this).attr('id');
			changeImage(id);
			
			if(counters === 5){
				$('.random').hide();
				$("#win").show();
				$(".again").show();
				$("#counter").hide();
			}
		})
	}
	addCounter();

	function makeNewPosition(){
	   // 
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
			$("#loose").show();
	
			if(counter === 0) {
				$('.random').hide();
				$(".again").show();
		}
			return;

		}
	}


});