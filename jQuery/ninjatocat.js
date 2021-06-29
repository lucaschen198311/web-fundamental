$(document).ready(function(){
    $('img').click(function(){
        let imgsrc = $(this).attr('src');
        let altimgsrc = $(this).attr('data-alt-src');
        $(this).attr('src', altimgsrc);
        $(this).attr('data-alt-src', imgsrc);
        $(this).show();
    })
})