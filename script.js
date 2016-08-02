$(document).ready(function(){
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});

  $('#LoginModal, #RegisterModal').on('shown.bs.modal', function () {
    console.log("yes");
    $('#myInput').focus()
  })




});
