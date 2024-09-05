$(document).ready(function () {
    // Adiciona classe 'active' ao item do menu correspondente ao scroll
    $('body').scrollspy({ target: '#navbarResponsive', offset: 70 });

    $('.navbar-nav .nav-link').on('click', function () {
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });
});
