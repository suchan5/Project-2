    // when user clicks navbar
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
      };
      
      function closeNav() {
        document.getElementById("myNav").style.height = "0%";
      };





    // when document loaded
    $(document).ready(function () {
      $( ".h1" ).hide().fadeIn(3000);   
      $(".card").hide();
      $("#answer").hide();
      $("#hint").hide();
      $("#replay").hide();


       // when user search their favourite character
      $ ('#charSearch').click(function(e){
        e.preventDefault();
  
        $(".card").show();

        let userInput = $("#charName").val();
  
        $.ajax({
          method: "GET",
          url: "http://hp-api.herokuapp.com/api/characters",        
        })
          .done(function( msg ) {
            console.log( msg );
  
            for (let n of msg) {
              if (userInput.toLowerCase() === (n.name).toLowerCase ()) {
                $( ".card-title" ).html("");
                $( ".card-title" ).append( `<strong>${n.name}</strong>` )
                
                $( ".card-img" ).html("");
                $( ".card-img" ).append( `<img src="${n.image}"/>` );

                $( "#house" ).html("");
                $( "#house" ).append( `${n.house}` );

                $( "#wood" ).html("");
                $( "#wood" ).append( `${n.wand.wood}` );

                $( "#core" ).html("");
                $( "#core" ).append( `${n.wand.core}` );

                $( "#ancestry" ).html("");
                $( "#ancestry" ).append( `${n.ancestry}` );

                $( "#patronus" ).html("");
                $( "#patronus" ).append( `${n.patronus}` );

                $( "#dob" ).html("");
                $( "#dob" ).append( `${n.dateOfBirth}` ); 


                // Image of the matched house will be shown
                if (n.house === 'Gryffindor') {
                  $( ".card-title" ).append( '&emsp;<img src="img/gryffindor.png" style="width:80px; height:80px;"/>' );
                } else if (n.house === 'Slytherin') {
                  $( ".card-title" ).append( '&emsp;<img src="img/slytherin.png" style="width:80px; height:80px;"/>' );
                } else if (n.house === 'Ravenclaw') {
                  $( ".card-title" ).append( '&emsp;<img src="img/ravenclaw.png" style="width:80px; height:80px;"/>' );
                } else if (n.house === 'Hufflepuff') {
                  $( ".card-title" ).append( '&emsp;<img src="img/hufflepuff.png" style="width:80px; height:80px;"/>' );    
                }
              }
                
            }    
          });  
      });
    });

      


      



    // Array for the House Quiz : data from Harry Potter API
    const list = [
      {
          "name": "Harry Potter",
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "31-07-1980",
          "yearOfBirth": 1980,
          "ancestry": "half-blood",
          "eyeColour": "green",
          "hairColour": "black",
          "wand": {
              "wood": "holly",
              "core": "phoenix feather",
              "length": 11
          },
          "patronus": "stag",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Daniel Radcliffe",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/harry.jpg"
      },
      {
          "name": "Hermione Granger",
          "species": "human",
          "gender": "female",
          "house": "Gryffindor",
          "dateOfBirth": "19-09-1979",
          "yearOfBirth": 1979,
          "ancestry": "muggleborn",
          "eyeColour": "brown",
          "hairColour": "brown",
          "wand": {
              "wood": "vine",
              "core": "dragon heartstring",
              "length": ""
          },
          "patronus": "otter",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Emma Watson",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/hermione.jpeg"
      },
      {
          "name": "Ron Weasley",
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "01-03-1980",
          "yearOfBirth": 1980,
          "ancestry": "pure-blood",
          "eyeColour": "blue",
          "hairColour": "red",
          "wand": {
              "wood": "willow",
              "core": "unicorn tail-hair",
              "length": 14
          },
          "patronus": "Jack Russell terrier",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Rupert Grint",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/ron.jpg"
      },
      {
          "name": "Draco Malfoy",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "05-06-1980",
          "yearOfBirth": 1980,
          "ancestry": "pure-blood",
          "eyeColour": "grey",
          "hairColour": "blonde",
          "wand": {
              "wood": "hawthorn",
              "core": "unicorn tail-hair",
              "length": 10
          },
          "patronus": "",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Tom Felton",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/draco.jpg"
      },
      {
          "name": "Minerva McGonagall",
          "species": "human",
          "gender": "female",
          "house": "Gryffindor",
          "dateOfBirth": "04-10-1925",
          "yearOfBirth": 1925,
          "ancestry": "",
          "eyeColour": "",
          "hairColour": "black",
          "wand": {
              "wood": "",
              "core": "",
              "length": ""
          },
          "patronus": "tabby cat",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Dame Maggie Smith",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
      },
      {
          "name": "Cedric Diggory",
          "species": "human",
          "gender": "male",
          "house": "Hufflepuff",
          "dateOfBirth": "",
          "yearOfBirth": 1977,
          "ancestry": "",
          "eyeColour": "grey",
          "hairColour": "brown",
          "wand": {
              "wood": "ash",
              "core": "unicorn hair",
              "length": 12.25
          },
          "patronus": "",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Robert Pattinson",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/cedric.png"
      },
      {
          "name": "Cho Chang",
          "species": "human",
          "gender": "female",
          "house": "Ravenclaw",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "",
          "eyeColour": "brown",
          "hairColour": "black",
          "wand": {
              "wood": "",
              "core": "",
              "length": ""
          },
          "patronus": "swan",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Katie Leung",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/cho.jpg"
      },
      {
          "name": "Severus Snape",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "09-01-1960",
          "yearOfBirth": 1960,
          "ancestry": "half-blood",
          "eyeColour": "black",
          "hairColour": "black",
          "wand": {
              "wood": "",
              "core": "",
              "length": ""
          },
          "patronus": "doe",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Alan Rickman",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/snape.jpg"
      },
      {
          "name": "Rubeus Hagrid",
          "species": "half-giant",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "06-12-1928",
          "yearOfBirth": 1928,
          "ancestry": "half-blood",
          "eyeColour": "black",
          "hairColour": "black",
          "wand": {
              "wood": "oak",
              "core": "",
              "length": 16
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Robbie Coltrane",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/hagrid.png"
      },
      {
          "name": "Neville Longbottom",
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "30-07-1980",
          "yearOfBirth": 1980,
          "ancestry": "pure-blood",
          "eyeColour": "",
          "hairColour": "blonde",
          "wand": {
              "wood": "cherry",
              "core": "unicorn tail-hair",
              "length": 13
          },
          "patronus": "",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Matthew Lewis",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/neville.jpg"
      },
      {
          "name": "Luna Lovegood",
          "species": "human",
          "gender": "female",
          "house": "Ravenclaw",
          "dateOfBirth": "13-02-1981",
          "yearOfBirth": 1981,
          "ancestry": "",
          "eyeColour": "grey",
          "hairColour": "blonde",
          "wand": {
              "wood": "",
              "core": "",
              "length": ""
          },
          "patronus": "hare",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Evanna Lynch",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/luna.jpg"
      },
      {
          "name": "Ginny Weasley",
          "species": "human",
          "gender": "female",
          "house": "Gryffindor",
          "dateOfBirth": "11-08-1981",
          "yearOfBirth": 1981,
          "ancestry": "pure-blood",
          "eyeColour": "brown",
          "hairColour": "red",
          "wand": {
              "wood": "yew",
              "core": "",
              "length": ""
          },
          "patronus": "horse",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Bonnie Wright",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/ginny.jpg"
      },
      {
          "name": "Sirius Black",
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "03-11-1959",
          "yearOfBirth": 1959,
          "ancestry": "pure-blood",
          "eyeColour": "grey",
          "hairColour": "black",
          "wand": {
              "wood": "",
              "core": "",
              "length": ""
          },
          "patronus": "hare",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Gary Oldman",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/sirius.JPG"
      },
      {
          "name": "Remus Lupin",
          "species": "werewolf",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "10-03-1960",
          "yearOfBirth": 1960,
          "ancestry": "half-blood",
          "eyeColour": "green",
          "hairColour": "brown",
          "wand": {
              "wood": "cypress",
              "core": "unicorn tail-hair",
              "length": 10.25
          },
          "patronus": "wolf",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "David Thewlis",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/lupin.jpg"
      },
      {
          "name": "Arthur Weasley",
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "06-02-1950",
          "yearOfBirth": 1950,
          "ancestry": "pure-blood",
          "eyeColour": "blue",
          "hairColour": "red",
          "wand": {
              "wood": "",
              "core": "",
              "length": ""
          },
          "patronus": "weasel",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Mark Williams",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/arthur.jpg"
      },
      {
          "name": "Bellatrix Lestrange",
          "species": "human",
          "gender": "female",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": 1951,
          "ancestry": "pure-blood",
          "eyeColour": "brown",
          "hairColour": "black",
          "wand": {
              "wood": "walnut",
              "core": "dragon heartstring",
              "length": 12.75
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Helena Bonham Carter",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/bellatrix.jpg"
      },
      {
          "name": "Lord Voldemort",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "31-12-1926",
          "yearOfBirth": 1926,
          "ancestry": "half-blood",
          "eyeColour": "red",
          "hairColour": "bald",
          "wand": {
              "wood": "yew",
              "core": "phoenix feather",
              "length": 13.5
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Ralph Fiennes",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/voldemort.jpg"
      },
      {
          "name": "Horace Slughorn",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "pure-blood",
          "eyeColour": "green",
          "hairColour": "blonde",
          "wand": {
              "wood": "cedar",
              "core": "dragon heartstring",
              "length": 10.25
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Jim Broadbent",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/slughorn.JPG"
      },
      {
          "name": "Dolores Umbridge",
          "species": "human",
          "gender": "female",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "half-blood",
          "eyeColour": "brown",
          "hairColour": "grey",
          "wand": {
              "wood": "birch",
              "core": "dragon heartstring",
              "length": 8
          },
          "patronus": "persian cat",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Imelda Staunton",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/umbridge.jpg"
      },
      {
          "name": "Lucius Malfoy",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": 1954,
          "ancestry": "pure-blood",
          "eyeColour": "grey",
          "hairColour": "blonde",
          "wand": {
              "wood": "elm",
              "core": "dragon heartstring",
              "length": 18
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Jason Isaacs",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/lucius.jpg"
      },
      {
          "name": "Vincent Crabbe",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "pure-blood",
          "eyeColour": "black",
          "hairColour": "black",
          "wand": {
              "wood": "",
              "core": "",
              "length": ""
          },
          "patronus": "",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Jamie Waylett",
          "alive": false,
          "image": "http://hp-api.herokuapp.com/images/crabbe.jpg"
      },
      {
          "name": "Gregory Goyle",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "pure-blood",
          "eyeColour": "",
          "hairColour": "brown",
          "wand": {
              "wood": "",
              "core": "",
              "length": ""
          },
          "patronus": "",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Josh Herdman",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/goyle.jpg"
      }
  ]

  // To retrieve ramdom elemnts(character's name and the picture) from the above array
  const keys = Object.keys(list);
  const randomIndex = keys[Math.floor(Math.random() * keys.length)];
  const item = list[randomIndex];
  console.log(item.name, item.house, item.image); 



  // when user clicks the button for the House Quiz
  function randomFunction() {    
    $('.house h2').css('color','white');        
    $('#house_btn, .house p, .house h6').hide();
    $('#random_div').append(`<img src="${item.image}" style="width:250px; height:250px;"/> <br><p>${item.name}</p> `);
    $("#answer").show(); 
    $("#hint").fadeIn(3000); 
  };
  


  // when user submit the answer for the House Quiz
  $("#answer").submit(function (e) {
      e.preventDefault();

      $("#hint").hide();

      let houseInput = $("#houseName").val();

      if (houseInput.length === 0) {
        $("#result").html("Please enter the house name").hide().show().hide().fadeIn('slow');
        $("#result").css("color", "purple")
      } else if (houseInput.toLowerCase() === (item.house).toLowerCase()) {
        $("#random_div").hide().show().hide().fadeIn('3000');
        $("#result").html("CORRECT!").hide().show().hide().fadeIn('slow');
        $("#result").css("color", "blue")
        $('#answer').hide();
        $("#replay").show(); 
      } else {
        $("#result").html("WRONG!").hide().show().hide().fadeIn('slow');
        $("#result").css("color", "red")
      };
  });


  
  // when user clicks Replay button : page reloaded
 (function () {
    const replay = document.querySelector('#replay');

    function clickEasyModeHandler(e) {
        document.location.reload();
    };

    replay.addEventListener('click', clickEasyModeHandler);
 })();