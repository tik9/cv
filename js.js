    window.onload = function(){
    var geburtstag = Date.parse("1978-10-02")
    var alter = Date.now() - geburtstag
    var msProJahr = 31536000000
    var alter = Math.floor(alter / msProJahr);

    werte = {

        adresse:{
        en: 'Bergstr. 15, 85120 Hepberg'},
		
        alter: {
        en: alter,
        },

        an: {
        de: 'Autobahndirektion Nordbayern',
        en: 'Railroad public services'
        },

		erfahrung: {
		en: 'Bash, Git, Mysql, Powershell, Python, Sed, Zsh'	
		},
		
        h_studium: {
        de: 'Studium Diplom - Verwaltungsinformatik',
        en: 'Bachelor IT'
        },
		
        job_titel: {
        de: 'Technischer Oberinspektor',
        'en' : 'IT expert',
        },

        job_sys: {
        en: 'Administrator Windows'
        },

        job_frei:{
        en: 'Freelancer'
        
        },

        name: {
        en: 'Timo Körner'},
    }


	links={
		gh: 'https://github.com/tik9',
		stack: 'https://stackoverflow.com/users/1705829/timo',
	}
	for (link in links) {
		document.body.innerHTML = document.body.innerHTML.replace('{{ '+link + ' }}', links[link])
	
	}
		
	
	//document.body.innerHTML = document.body.innerHTML.replace('{{ ' + schluessel + ' }}', werte[schluessel][sprache])
	
	for (schluessel in werte) {
			if (werte[schluessel]['de']){
				sprache=document.getElementById('sprache').getAttribute('data-name')
			
			}
			else
			{
				sprache='en'
			}
		//	sprache='en'
			//console.log(obj1 + ' -- ' + )
			
			document.body.innerHTML = document.body.innerHTML.replace('{{ ' + schluessel + ' }}', werte[schluessel][sprache])
		   
	}
}
