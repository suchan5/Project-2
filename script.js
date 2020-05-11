    // when user clicks navbar
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
      };
      
      function closeNav() {
        document.getElementById("myNav").style.height = "0%";
      };





    // when user search their favourite character
    $(document).ready(function () {
      $(".card").hide();


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


                if (n.house === 'Gryffindor') {
                  $( ".card-title" ).append( '<img src="/img/gryffindor.png">' );
                } else if (n.house === 'Slytherin') {
                  $( ".card-title" ).append( '<img src="/img/slytherin.png">' );
                } else if (n.house === 'Ravenclaw') {
                  $( ".card-title" ).append( '<img src="/img/ravenclaw.png">' );
                } else if (n.house === 'Hufflepuff') {
                  $( ".card-title" ).append( '<img src="/img/hufflepuff.png" >' );    
                } 


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
              }
                
            }
              
  
  
  
          });
  
      });



    })

      


      

