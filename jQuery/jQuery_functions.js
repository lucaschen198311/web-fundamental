$(document).ready(function(){
    $('#addclassbtn').click(function(){
        $('#addclassp').addClass('red');
    })
    $('#slidetogglebtn').click(function(){
        $('#slidetogglep').slideToggle('slow');
    })
    $('#appendbtn').click(function(){
        $('#appendp').append('<p>Append a new paragraph!</p>');
    })
})