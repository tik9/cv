$(document).ready(function(){

    // console.log('test links')
    ich='Timo Körner'
    document.getElementById("tk").innerHTML='<h1>' + ich + '</h1>'
    // $('title').text()= ich
    document.title=ich

    arr = {
		Github: 'https://github.com/tik9',
		LinkedIn: 'https://linkedin.com/in/timo-körner-65ab601b1',
		Stackoverflow: 'https://stackoverflow.com/users/1705829/timo',
		CodeReview: 'https://codereview.stackexchange.com/users/169469/timo?tab=activity',
		Cv: 'output/cv_en.html'
    }

    i=0
	for (key in arr) {
        // console.log(i, i %3, key)
        document.getElementById("links").innerHTML +='<a href='+ arr[key] +'>'+ key+ '</a> || '
        i++
	}
})