window.onload = function(){

ags={
	neu:{
		dh:'Regierung von Oberbayern',
		dh2: 'LRA Eichstätt',
		email:'',
		job: 'Mitarbeiter für das Kontaktpersonenmanagement',
		asp:''
	},
	
	lfar:{
	dh:'Bayerisches Landesamt für Asyl und Rückführungen',
	dh2:'Dienststelle Ingolstadt/Manching',
	email: 'Bewerbungen@lfar.bayern.de',
	job: 'Sachbearbeiter für das Sachgebiet Zentralstelle Ausländerextremismus (Kennziffer: 11-2020-18)',
	asp:'Herr Popp'
},
pol:{
dh:'Präsidium der Bayerischen Bereitschaftspolizei',
dh2:'Eichstätt',
job:'IT - Professional - Mobile Devices für Eichstätt'
},

}


elems=['dh','dh2','email','job']

for (schluessel in ags) {
	for (subschl in ags[schluessel]) {

	 console.log(ags[schluessel][subschl])
	document.body.innerHTML = document.body.innerHTML.replace('{{ '+ subschl + ' }}', ags[schluessel][subschl])

	}
	break
}

heute = new Date()

dd = heute.getDate()

mm = heute.getMonth() + 1
yyyy = heute.getFullYear()

if(dd < 10) {
    dd='0' + dd
} 

if(mm < 10) {
    mm='0' + mm
} 

heute_de = dd + '.' + mm + '.' + yyyy
heute_en = dd + '/' + mm + '/' + yyyy
// console.log('heute ' + heute)
	
heute_ms=Date.now()	
geburtstag = Date.parse("1978-10-02")
alter = heute_ms - geburtstag
msProJahr = 31536000000
alter = Math.floor(alter / msProJahr)

werte = {

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
		en: heute_en,
		de:heute_de
	},
	
	ich_adresse:{
	en: 'Bergstr. 15, 85120 Hepberg'},
	
	ich_alter: {
	en: alter,
	},
	ich_name: {
	en: 'Timo Körner'},

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
