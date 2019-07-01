$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('tutup');
        $('#content').toggleClass('layarpenuh');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});