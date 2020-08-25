
window.onload = function(){

templates = document.getElementsByClassName("tem_dh")
// console.log(templates)

 // templates.forEach(function (template, ind,obj) {

Array.prototype.forEach.call(templates, function (template) {
  	innen=template.innerHTML
	template_ohne=innen.slice(3,-3)
	wert=ags[0][template_ohne]
	console.log(innen+wert)
	template.innerHTML = innen.replace(innen, wert)
})


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
	
heute_ms = Date.now()	
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
	
	erfahrung_acc:{
	de: 'Erweiterung einer MS Access und Excel VBA App zur Prüfung und Berechnung von Bodenwerten',
	en:'MS Access and Excel VBA App for calculating and visualization of surface track values.'
	},
	
	erfahrung_prog: {
	en: 'Git, Javascript, Mysql, Powershell, Python, Zsh'	
	},
	
	erfahrung_win: {
	de: 'Unterstützung der Anwender bei Windows und MS Office Problemen',
	en:'Client support with MS Windows and MS Office Problems.'
	},
	
	erfahrung_win2: {
	de: 'Verantwortlich im Team für ca. 100 Benutzer. Einschließlich Softwareverteilung, Umstellung von Windows 7 auf Windows 10 und Installation.',
	en: 'Responsible for 100 Users and Clients including VMs. Active Directory and group policy support, software deployment.'	
	},
	
	h_studium: {
	de: 'Studium Diplom - Verwaltungsinformatik',
	en: 'Bachelor IT'
	},
	h_studium_ausf: {
	de: 'Vergleichbar mit einem Informatik Bachelor an einer Hochschule',
	en: 'Bachelor in IT with focus on the public sector including public law.'
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

	
templates = document.getElementsByClassName("tem")

 Array.prototype.forEach.call(templates, function (template) {
		
	//~ debugger
	
	innen=template.innerHTML
	
	template_ohne=innen.slice(3,-3)
	wert=werte[template_ohne]
	
	// de= wert['de']
	// console.log('vor if de '+de)
	if (wert['de']){
		sprache= document.getElementById('spr').getAttribute('data-name')
		spr= wert[sprache]
	}
	else {
		en=wert['en']
		spr=en
	}
	console.log(innen + ' -> '+spr)
	//~ innen = innen.replace(innen, spr)
	template.innerHTML = innen.replace(innen, spr)
})

}
