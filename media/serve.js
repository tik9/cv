window.onload = function () {

    ip = location.host

    console.log('location host: ', ip)

    $.getJSON("https://freegeoip.app/json/" + location.host, function (data) {
        console.info(JSON.stringify(data, null, 2))
        document.getElementById('ip').innerHTML = data.ip
        if (data.city) {
            stadt = data.city
        } else {
            stadt = 'Not known'
        }

        document.getElementById('stadt').innerHTML = stadt
        console.log('stadt', stadt)
        // document.getElementById('stadt').innerHTML = data.city
    })

    document.getElementById("client").innerHTML = navigator.appVersion
    console.log('client', navigator.appVersion)

}