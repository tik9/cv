$(document).ready(function(){

    // console.log('test links')
    ich='Timo Körner'
    document.getElementById("tk").innerHTML='<h1>' + ich + '</h1>'
    // $('title').text()= ich
    document.title=ich

    arr = {
		Github: 'https://github.com/tik9',
		LinkedIn: 'https://linkedin.com/in/timo-körner-65ab601b1',
		Stackexchange: 'https://stackexchange.com/users/1886776/timo?tab=activity',
		Cv: 'output/cv_en.html'
    }

    i=0
	for (key in arr) {
        // console.log(i, i %3, key)
        document.getElementById("links").innerHTML +='<a href='+ arr[key] +'>'+ key+ '</a> || '
        i++
	}
})