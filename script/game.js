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
(function() {
    $('.btn').click(function () {
        $('.btn').removeClass('active').addClass('inactive');
        $(this).removeClass('inactive').addClass('active');
    });
})();




// when user clicks Replay button : page reloaded
(function () {
    const replay = document.querySelector('#replay');

    function clickEasyModeHandler(e) {
        document.location.reload();
    };

    replay.addEventListener('click', clickEasyModeHandler);
})();





// when user clicks Easy-mode button
(function () {
    const easyMode = document.querySelector('#easyMode');

    function clickEasyModeHandler(e) {
        $('.stageEasy').show();
    };

    easyMode.addEventListener('click', clickEasyModeHandler);


    // Hard-mode is disabled while user plays Easy-mode
    (function () {
        const ifClick = document.querySelector('#easyMode');

        function clickHandler(e) {
            const disabled = document.querySelector('#hardMode');
            disabled.disabled = true;
        };

        ifClick.addEventListener('click', clickHandler);
    })();


})();



// when Easy-mode is playing
(function () {

    const stageEasy = document.querySelector('.stageEasy');

    function EasyModePlay(e) {
        console.log(e.target);

        if (e.target.classList.contains('dementor')) {
            stageEasy.removeChild(e.target);
        };
    };

    stageEasy.addEventListener('click', EasyModePlay);
})();



// when user clicks Hard-mode button
(function () {
    const easyMode = document.querySelector('#hardMode');

    function clickHardModeHandler(e) {
        $('.stageHard').show();
    };
    
    hardMode.addEventListener('click', clickHardModeHandler);



    // Easy-mode is disabled while user plays Hard-mode
    (function () {
        const ifClick = document.querySelector('#hardMode');

        function clickHandler(e) {
            const disabled = document.querySelector('#easyMode');
            disabled.disabled = true;
        };

        ifClick.addEventListener('click', clickHandler);
    })();
})();




// When Hard-mode is playing
(function () {

    const stageHard = document.querySelector('.stageHard');

    function hardModePlay(e) {
        console.log(e.target);

        if (e.target.classList.contains('dementor')) {
            stageHard.removeChild(e.target);
        };
    };

    stageHard.addEventListener('click', hardModePlay);
})();