    // when user clicks navbar
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
      };
      
      function closeNav() {
        document.getElementById("myNav").style.height = "0%";
      };




      $.ajax({
        method: "GET",
        url: "http://hp-api.herokuapp.com/api/characters",        
      })
        .done(function( msg ) {
          console.log( msg );


          



        });

