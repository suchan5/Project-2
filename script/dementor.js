// when page loaded 
$(function () {
    $(document).ready(function () {
        console.log('ready!');
        $('#dialogue').hide().show().hide().fadeIn(3000);        
        $('.stageEasy').hide();
        $('.stageHard').hide();
    });
});





// when user clicks button : active on click
(function () {
    $('.btn').click(function () {
        $('.btn').removeClass('active').addClass('inactive');
        $(this).removeClass('inactive').addClass('active');
    });
})();





// when user clicks Replay button : page reloaded
(function () {
    const replay = document.querySelector('#replay');

    function clickEasyModeHandler() {
        document.location.reload();
    }

    replay.addEventListener('click', clickEasyModeHandler);
})();





// when user clicks Easy-mode button
(function () {
    const easyMode = document.querySelector('#easyMode');

    function clickEasyModeHandler() {        
        $('#dialogueText').hide();
        $('.stageEasy').show().hide().fadeIn('slow');        
    }

    easyMode.addEventListener('click', clickEasyModeHandler);



    // Hard-mode is disabled while user plays Easy-mode
    (function () {
        const ifClick = document.querySelector('#easyMode');

        function clickHandler() {
            const disabled = document.querySelector('#hardMode');
            disabled.disabled = true;
        }

        ifClick.addEventListener('click', clickHandler);
    })();
})();





// When Easy-mode is playing
(function () {

    const stageEasy = document.querySelector('.stageEasy');

    function EasyModePlay(e) {
        console.log(e.target);

        if (e.target.classList.contains('dementor')) {
            stageEasy.removeChild(e.target);
            console.log("still have");
        }

        const count = document.getElementsByClassName("dementor").length;
        console.log(count);

        if (count===0) {                         
            $('#dialogueText, #modeBtn').hide();                 
            $( "#endmsg" ).append(`<h1>You saved Hogwarts !</h1>`).hide().fadeIn(3000);                 
        }      
    }

    stageEasy.addEventListener('click', EasyModePlay);    
})();







// when user clicks Hard-mode button
(function () {
    const hardMode = document.querySelector('#hardMode');

    function clickHardModeHandler() {  
        $('#dialogueText').hide();     
        $('.stageHard').show();
    }

    hardMode.addEventListener('click', clickHardModeHandler);



    // Easy-mode is disabled while user plays Hard-mode
    (function () {
        const ifClick = document.querySelector('#hardMode');

        function clickHandler() {
            const disabled = document.querySelector('#easyMode');
            disabled.disabled = true;
        }

        ifClick.addEventListener('click', clickHandler);
    })();
})();





// When Hard-mode is playing
(function () {

    const stageHard = document.querySelector('.stageHard');

    function hardModePlay(e) {
        console.log(e.target);

        if (e.target.classList.contains('dementorHard')) {
            stageHard.removeChild(e.target);
            console.log("still have");
        }

        const countHard = document.getElementsByClassName("dementorHard").length;
        console.log(countHard);

        if (countHard===0) {
            $('#dialogueText, #modeBtn').hide();     
            $( "#endmsg" ).append(`<h1>You saved Hogwarts !</h1>`).hide().fadeIn(3000);   
        }
    }

    stageHard.addEventListener('click', hardModePlay);
})();





