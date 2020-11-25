window.onload = function () {
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200)
    }, 4000)
    
    // document.addEventListener("keydown", event => {
    //     if (event.isComposing || event.keydown === 13) {
    //       return;
    //     }
    //     // console.log('You pressed enter!');
    //     log.textcontent='You pressed enter!'
    //         $("#cookieConsent").fadeOut(200)        // do something
    //   });

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            // console.log('You pressed enter!');
            $("#cookieConsent").fadeOut(200)

        }
    })

    $("#closeCookieConsent,.cookieConsentOk").click(function () {
        $("#cookieConsent").fadeOut(200)
    })
}