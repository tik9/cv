$(document).ready(function(){
    setTimeout(function () {
    $("#cookieConsent").fadeIn(200)
 }, 4000)

 $(document).on('keypress',function(e) {
    if(e.which == 13) {
        // console.log('You pressed enter!');
        $("#cookieConsent").fadeOut(200)

    }
})

$("#closeCookieConsent,.cookieConsentOk").click(function() {
    $("#cookieConsent").fadeOut(200)
})
})