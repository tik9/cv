    window.onload = function(){
	
heute = new Date()
dd = heute.getDate()

mm = heute.getMonth()+1
yyyy = heute.getFullYear()

if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

heute = dd+'.'+mm+'.'+yyyy
console.log('heute ' +heute);
	
	heute_ms=Date.now()	
    geburtstag = Date.parse("1978-10-02")
    alter = heute_ms - geburtstag
    msProJahr = 31536000000
    alter = Math.floor(alter / msProJahr);

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

		b_studium: {
		
		de: 'BWL - Studium',
		en: 'Management - Studies'
		},
		
		erfahrung: {
		en: 'Git, Javascript, Mysql, Powershell, Python, Zsh'	
		},
		
        h_studium: {
        de: 'Studium Diplom - Verwaltungsinformatik',
        en: 'Bachelor IT'
        },
		
		heute: {
			en: heute
		},
		
	    job_frei:{
        en: 'Freelancer'
        
        },
		
		job_sys: {
        en: 'Administrator Windows'
        },

		job_titel:{
			de: 'IT Mitarbeiter',
			en: 'IT expert'
		},
		
        name: {
        en: 'Timo Körner'},

		ppm: {
			de: 'Polizeipräsidium Mittelfranken',
			en: ' Police Department Nürnberg'
		},
		
        toi: {
        de: 'Technischer Oberinspektor',
        'en' : 'IT expert',
        },

    }


	links={
		gh: 'https://github.com/tik9',
		stack: 'https://stackoverflow.com/users/1705829/timo',
	}
	for (link in links) {
		document.body.innerHTML = document.body.innerHTML.replace('[[ '+link + ' ]]', links[link])
	}
		
	
	//document.body.innerHTML = document.body.innerHTML.replace('{{ ' + schluessel + ' }}', werte[schluessel][sprache])
	
	for (schluessel in werte) {
			if (werte[schluessel]['de']){
				sprache=document.getElementById('spr').getAttribute('data-name')
			
			}
			else
			{
				sprache='en'
			}
		//	sprache='en'
			console.log(werte[schluessel][sprache] )
			
			document.body.innerHTML = document.body.innerHTML.replace('{{ ' + schluessel + ' }}', werte[schluessel][sprache])
		   
	}
}
