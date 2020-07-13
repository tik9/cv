    window.onload = function(){
    var geburtstag = Date.parse("1978-10-02")
    var alter = Date.now() - geburtstag
    var msProJahr = 31536000000
    var alter = Math.floor(alter / msProJahr);

    werte = {
        alter: {
        en: alter,
        },

        name: {
        en: 'Timo Körner'},

        adresse:{
        en: 'Bergstr. 15, 85120 Hepberg'},

        job_titel: {
        de: 'Technischer Oberinspektor',
        'en' : 'IT expert',
        },

        job_sys: {
        de:'Systemadministrator Windows Server und Exchange',
        en: 'Administrator Windows'
        },

        job_freib:{
        en: 'Freelancer'
        
        },

        an: {
        de: 'Autobahndirektion Nordbayern',
        en: 'Railroad public services'
        },

        h_studium: {
        de: 'Studium Diplom - Verwaltungsinformatik',
        en: 'Bachelor IT'
        }
    }


for (schluessel in werte) {
		if (werte[schluessel]['de']){
			sprache='de'
        
		}
		else
		{
			sprache='en'
		}
	//	sprache='en'
		
		document.body.innerHTML = document.body.innerHTML.replace('{{ ' + schluessel + ' }}', werte[schluessel][sprache])
       
}
}
