window.onload = function(){

datei = location.href.split("/").slice(-1)[0]
sprache =datei.slice(3,-5)
if (datei=='anschreiben.html'){
	sprache='de'
}
console.log(sprache)

templates = document.getElementsByClassName("tem")
templates_dh = document.getElementsByClassName("tem_dh")

 // templates.forEach(function (template, ind,obj) {

Array.prototype.forEach.call(templates_dh, function (template) {
  	innen=template.innerHTML
	template_ohne=innen.slice(3,-3)
	wert=ags[0][template_ohne]
	if (wert){
		//~ console.log(innen + wert)
		template.innerHTML = innen.replace(innen, wert)
	}
	else {
		template.innerHTML=''
	}
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
	de: 'Erweiterung einer MS Access und Excel VBA Anwendung zur Prüfung und Berechnung von Bodenwerten',
	en:'MS Access and Excel VBA App for calculation and visualization.'
	},
	
	erfahrung_prog: {
	en: 'Javascript Template system for cover letters and CV'	,
	de:'Javascript und Html Templating für Bewerbungsanschreiben und Lebenslauf'
	},
	
	erfahrung_ps:{
	de:'Erstellen von Powershell-Skripte für Routine-Aufgaben'
	},
	
	erfahrung_win: {
	de: 'Unterstützung der Anwender bei Standard- und Fachanwendungen',
	en:'Client support with MS Windows and MS Office Problems.'
	},
	
	erfahrung_win2: {
	de: 'Benutzerbetreuung im Team für 100 Benutzer. Tätigkeiten: Softwareverteilung, Umstellung von Windows 7 auf Windows 10.',
	en: 'User Support for 100 Users and Clients including VMs. Active Directory and group policy support, software deployment.'	
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
	en: 'Bergstr. 15, 85120 Hepberg, Tel.: 01573 9598 220'},
	
	ich_alter: {
	en: alter,
	},
	
	ich_name: {
	en: 'Timo Körner',
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
	
	ppm: {
		de: 'Polizeipräsidium Mittelfranken',
		en: ' Police Department Nürnberg'
	},

}

for (t in templates){
	 // debugger	
 // console.log('ende ' + t)
	
}

 Array.prototype.forEach.call(templates, function (template) {
 // console.log('ende2 ' + t)

//~ for (template in templates){		
	
	innen=template.innerHTML
	
	template_ohne=innen.slice(3,-3)
	wert=werte[template_ohne]
	
	// de= wert['de']
	if (wert['de']){
		spr= wert[sprache]
	}
	else {
		spr=wert['en']
	}
	// console.log(innen + ' -> '+spr)

	template.innerHTML = innen.replace(innen, spr)
})
 }
