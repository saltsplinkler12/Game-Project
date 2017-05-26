//This is to prevent any jQuery code from running before the document is finished loading 
$(function(){
	
	//Function for animation declared at the top so when Document is loaded visuals are in place. 
	animateDiv();
	
	//hidden elements of html when Document loaded declared here
	$("#win").hide();
	$("#loose").hide();
	
	//Global variable declared for function of game scoring
	var counters = 0;
	
	//created a global array variable of people for marvels and bad guys and set boolean to them if they are good (false) or bad (true)
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
	//variable newPerson is used to assign people with Math.Random value 
	function  changeImage (id) {
		var size = people.length
		var x = Math.floor(size * Math.random())
		var newPerson = people[x]
	
	//Obtaining the id of the images of the marvels and removing their class of bad if their boolean is false
		$(id).removeClass("bad")
		$(id).attr('src', newPerson.src)
	
	//Conditional if statement to add the class of bad to the bad guys.
		if (newPerson.isBad) {
			$(id).addClass("bad")
		}
	}	
	// Function created to play audio mp3 on click button function. createELement creates the audio class and setAttributes sets 
	// the source of the mp3 file to the variable song.
	function playMusic (){
		var isPlaying = false;
		var song = document.createElement('audio');
		song.setAttribute('src', 'kano.mp3');
		
		$('.button').click(function(){
			song.play();
			isPlaying = true;
		});
		
	}	
	playMusic();
 
	//This Function was created to implement the randomisation of the marvel and enemy images on the event of clicking the start button.
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

    //hideElements is stopping the corresponding elements defined in the HTML to be shown when the start button is clicked. 
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

	//A seprate function was created for a gunshot sound to be implemented on a click function.	 
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

    // addCounter is,incrementing the score or else decrementing depending on if an enemy or a marvel has been shot.
    // Further this function is hiding or showing certain elements once the winning points of 5 has been reached. 
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
	//This function taken from an online animation snippet ('JS FIDDLE'), implements the randomisation
	// of the elements in the ID Board on the horizontal and vertical axis. 
	function makeNewPosition(){
	   // 
	    var h = $('#board').height() + 10;
	    var w = $('#board').width() + 10;

	    var nh = Math.floor(Math.random() * h);
	   	var nw = Math.floor(Math.random() * w);
	    
	    return [nh,nw];    
	}
	//animateDev, takes the index position of the marvel and enemy images and implements the animation elements to them. 
	function animateDiv(){
	    $('.random').each(function() {
	       var newq = makeNewPosition();

	      $(this).animate({ top: newq[0]+110, left: newq[1] },3000, function(){
	       	 animateDiv();        
	      });
	    })
	}
	//decTime is the count down function showing the conditions when the counter reaches 0. 
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