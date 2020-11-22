$(document).ready(function() {

    // console.log('test links')
    ich = 'Timo Körner'
    document.getElementById("tk").innerHTML = '<h1>' + ich + '</h1>'
        // $('title').text()= ich
    document.title = ich

    linkstop = {
        Github: 'https://github.com/tik9',
        LinkedIn: 'https://linkedin.com/in/timo-körner-65ab601b1',
        Stackexchange: 'https://stackexchange.com/users/1886776/timo?tab=activity',
    }

    i = 0
    for (key in linkstop) {
        // console.log(i, i %3, key)
        document.getElementById("linkstop").innerHTML += '<a href=' + linkstop[key] + '>' + key + '</a> || '
        i++
    }
})