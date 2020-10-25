window.onload = function(){

ip = location.host
hn=location.hostname

console.log(ip, hn)

$.getJSON( "//freegeoip.net/json/" + window.location.host + "?callback=?", function(data) {
    console.info('JSON data...')
    // Log output to console
    console.info(JSON.stringify(data, null, 2))
})

console.info(navigator.appVersion)

document.getElementById("client").innerHTML = navigator.appVersion
// document.getElementById('ip')=ip

}