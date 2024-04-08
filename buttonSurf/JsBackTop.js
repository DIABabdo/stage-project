$(document).ready(function() {
    var btn = document.getElementById("mybtn");

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    })
});