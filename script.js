    // when user clicks navbar
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
      };
      
      function closeNav() {
        document.getElementById("myNav").style.height = "0%";
      };




    $ ('#charSearch').click(function(e){
      e.preventDefault();
      
      let userInput = $("#charName").val();

      $.ajax({
        method: "GET",
        url: "http://hp-api.herokuapp.com/api/characters",        
      })
        .done(function( msg ) {
          console.log( msg );

          for (let n of msg) {
            if (userInput.toLowerCase() === (n.name).toLowerCase ()) {
              $( ".card-title" ).append( `<strong>${n.name}</strong>` );
              $( ".card-img" ).append( `<img src="${n.image}"/>` );
              $( "#house" ).append( `${n.house}` );
              $( "#wood" ).append( `${n.wand.wood}` );
              $( "#core" ).append( `${n.wand.core}` );
              $( "#ancestry" ).append( `${n.ancestry}` );
              $( "#patronus" ).append( `${n.patronus}` );
              $( "#dob" ).append( `${n.dateOfBirth}` ); 
            }
            
          }
           



        });

    });


      

