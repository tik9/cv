window.onload = function(){
    console.log('test links')
    
    document.getElementById("tk").innerHTML='<h1>Timo Körner</h1>'
    
    arr = {
		Home: '', 
		Github: 'https://github.com/tik9',
		LinkedIn: 'https://linkedin.com/in/timo-körner-65ab601b1',
		Stackoverflow: 'https://stackoverflow.com/users/1705829/timo',
		CodeReview: 'https://codereview.stackexchange.com/users/169469/timo?tab=activity',
		Cv: 'output/cv_en.html'
		}
	for (key in arr) {
	  document.getElementById("links").innerHTML +='<li><a href='+ arr[key] +'>'+ key+ '</a></li>'
	}

    String.prototype.escape = function() {
        var tagsToReplace = {
            '<': '&lt;',
            '>': '&gt;'
        }
        return this.replace(/[&<>]/g, function(tag) {
            return tagsToReplace[tag] || tag;
        })
    }
    
    a = "<abc>"
    escapes = document.getElementsByClassName("escape")
    //console.log(escapes.item(0))
    
    Array.prototype.forEach.call(escapes, function (escap) {
        
        zu_escap=escap.innerHTML
    
    console.log( zu_escap) 
    neu=zu_escap.escape()
    console.log(neu)
    
    escap.innerHTML=zu_escap.replace(zu_escap,neu)
    
    })
}