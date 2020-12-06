window.onload = function () {

    // console.log('test links')
    ich = 'Timo Körner'
    document.getElementById("tk").innerHTML = '<h1>' + ich + '</h1>'
    // $('title').text()= ich
    document.title = ich

    linkstop = {
        // LinkedIn: 'https://linkedin.com/in/timo-körner-65ab601b1',
        Home:'index.html',
        Further: 'file.html',
    }

    about = [
        'CEO of my life', 'CTO of localhosts', 'COO of my Flat'
    ]

    toplinks = document.createElement('ul')
    Object.keys(linkstop).forEach(function (key){
        toplinksitem = document.createElement('li')
        toplinks.appendChild(toplinksitem)
        a = document.createElement('a')
        toplinksitem.appendChild(a)
        a.href = linkstop[key]
        a.textContent = key
    })

    document.getElementById('linkstop').appendChild(toplinks)

    aboutlinks = document.createElement('ul')
    document.getElementById('about').appendChild(aboutlinks)
    for (value of about) {
        // console.log(i, i %3, key)
        aboutlinksitem = document.createElement('li')
        aboutlinksitem.textContent = value
        aboutlinks.appendChild(aboutlinksitem)
    }
}