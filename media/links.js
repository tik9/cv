window.onload = function () {

    ich = 'Timo Körner'
    h1 = document.createElement('h1')
    document.getElementById("tk").appendChild(h1)
    h1.textContent = ich
    document.title = ich

    $("#from").click(function () {
        $("html, body").animate({ scrollTop: $("#to").offset().top }, 500)
        console.log('clicked')
        return true
    })

    listrepos = document.createElement('ul')
    document.getElementById('github').appendChild(listrepos)

    user = 'tik9'
    gh = 'https://api.github.com'
    repos = 'repos'
    ghApiUser = `${gh}/users/${user}`

    urlFilesGh = `${ghApiUser}/${repos}/${user}/cv/contents/output`
    // urlFilesGh = 'https://api.github.com/repos/tik9/cv/contents/output'

    $.getJSON(`${ghApiUser}/${repos}`, function (data) {
        // console.log('data now', data)

        function compare(a, b) {
            if (a.watchers > b.watchers) {
                return -1
            }
            if (a.watchers < b.watchers) {
                return 1
            }
            return 0
        }

        data.sort(compare)
        data.forEach(v => {

            listItemRepo = document.createElement('li')
            listrepos.appendChild(listItemRepo)
            hlink = document.createElement('a')
            listItemRepo.appendChild(hlink)
            hlink.textContent = `${v.description} | Stars: ${v.watchers}`
            hlink.href = v.html_url
        })
    })


    function truncate(str) {
        if (str.length <= truncateCut) {
            return str
        }
        subString = str.substr(0, truncateCut)
        return subString.substr(0, subString.lastIndexOf(' ')) + '..'
    }

    // arr = ['comments', 'posts', 'questions', 'answers']
    copo = ['comments', 'posts']
    maxcount = 6
    truncateCut = 200

    copo.forEach(function (elem) {
        // console.log('elem', elem);

        se = 'https://api.stackexchange.com/2.2'
        user = se + '/users/1705829'
        so = 'site=stackoverflow'
        so = 'site=stackoverflow&filter=withbody'
        // so = 'order=desc&sort=activity&site=stackoverflow&filter=withbody'

        urlFilesGh = user + '/' + elem + '?' + so
        // console.log('urlFilesGh', urlFilesGh)
        // $.getJSON(urlFilesGh, function (data) {
        //     console.log('data now', data)
        // })

        listpost = document.createElement('ul')

        document.getElementById('so_api').appendChild(listpost)

        responseData = fetch(urlFilesGh).then(response => response.json())

        responseData.then(({
            items,
            has_more,
            quota_max,
            quota_remaining
        }) => {
            counter = 1
            for ({
                creation_date,
                score,
                answer_count,
                link,
                body,
                title
            }
                of items) {
                if (counter == maxcount) {
                    break
                }
                counter++

                dateString = datef(creation_date)

                listItemPost = document.createElement('li')
                listpost.appendChild(listItemPost)
                bodyPost = truncate(body)

                bodyPost = bodyPost.replace(/<\/?[^>]+(>|$)/g, '')
                bodyPost = bodyPost.replace(/&quot;/g, '')
                bodyPost = bodyPost.replace(/&#39;/g, '')

                a = document.createElement('a')
                listItemPost.appendChild(a)
                if (link == undefined) {
                    a.href = 'https://stackexchange.com/users/1886776/timo?tab=activity'

                } else {
                    a.href = link
                }
                a.textContent = `${dateString} | ${bodyPost}`
                // | ${score}
            }
        })
    })
}