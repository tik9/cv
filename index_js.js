window.onload = function(){


datei = location.href.split("/").slice(-1)[0]
datei =datei.slice(3,-3)

console.log(datei)

	arr = {
		Home: '', 
		Github: 'https://github.com/tik9',
		LinkedIn: 'https://linkedin.com/in/timo-körner-65ab601b1',
		Stackoverflow: 'https://stackoverflow.com/users/1705829/timo',
		Cv: 'output/cv_en.html'
		}
	for (key in arr) {
	  document.getElementById("links").innerHTML +='<li><a href='+ arr[key] +'>'+ key+ '</a></li>'

	}
	
}