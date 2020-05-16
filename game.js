$(function () {
    $(document).ready(function () {
        console.log('ready!');

        $('.stageEasy').hide();
        $('.stageHard').hide();
    });
});





(function () {

    const stage = document.querySelector('.stage');

    function Play(e) {
        console.log(e.target);

        if (e.target.classList.contains('dementor')) {
            stage.removeChild(e.target);
        };
    };

    stage.addEventListener('click', Play);
})();
