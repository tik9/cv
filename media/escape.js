$(document).ready(function(){
 
    String.prototype.escape = function() {
    var tagsToReplace = {
        '<': '&lt;',
        '>': '&gt;'
    }
    return this.replace(/[&<>]/g, function(tag) {
        return tagsToReplace[tag] || tag;
    })
}

escapes = document.getElementsByClassName("escape")
//console.log(escapes.item(0))

Array.prototype.forEach.call(escapes, function (escap) {
    
    zu_escap=escap.innerHTML

// console.log( zu_escap) 
    neu=zu_escap.escape()

    escap.innerHTML=zu_escap.replace(zu_escap,neu)

})
})