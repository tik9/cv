window.onload = function () {

	datei = location.href.split("/").slice(-1)[0]
	// sprache =datei.slice(3,-5)
	// if (datei.includes('anschreiben')){

	sprache = document.getElementById("spr").getAttribute("data-name")
	// }
	// sprache='en'
	// console.log(datei, sprache)

	templates = document.getElementsByClassName("tem")
	templates_ag = document.getElementsByClassName("tem_ag")

	Array.prototype.forEach.call(templates_ag, function (template) {
		innen = template.innerHTML
		template_ohne_kla = innen.slice(3, -3)
		wert = ags[0][template_ohne_kla]
		if (wert) {
			template.innerHTML = innen.replace(innen, wert)
		}
		else {
			template.innerHTML = ''
		}
	})

	heute = new Date()

	dd = heute.getDate()

	mm = heute.getMonth() + 1
	yyyy = heute.getFullYear()

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
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
			de: 'Diplom-Kaufmann',
			en: 'Master in Management Studies'
		},

		erfahrung_bw: {
			de: 'Controlling, regelmäßige Kundenacquise und -bindung in Form von Newslettern',
			en: 'Controlling, Personal Marketing via LinkedIn and Telephone'
		},

		erfahrung_it: {
			de: 'Lösen von Software Problemen aller Art in Windows und Linux',
			en: 'Customer Support in Windows und Linux'
		},

		erfahrung_lin: {
			de: 'Konfiguration von Apache, Nginx und Lighttpd. Benutzer- und Gruppenverwaltung. Konfiguration von IPhones',
			en: 'Configuration of Apache, Nginx and Lighttpd, User and Groups. Configuration of Apple IPhones per remote'
		},

		erfahrung_web: {
			en: 'Git Client and Server. Javascript and Markdown Template system for cover letters and CV',
			de: 'Einsatz von Git auf verschiedenen Systemen, u. a. Linux und Android. Javascript und Html Templating für Bewerbungsanschreiben und Lebenslauf'
		},

		erfahrung_win: {
			de: 'Benutzerbetreuung im Team für 100 Benutzer. Softwareverteilung, Umstellung von Windows 7 auf Windows 10. Erstellen von Powershell-Skripte für Routine-Aufgaben. Erweiterung einer MS Access und Excel VBA Anwendung zur Prüfung und Berechnung von Bodenwerten.',
			en: 'Client support solving difficult MS Windows and MS Office problems. MS Access and Excel VBA App for calculation and visualization. Powershell fileserver automation. User Support for 100 Users and Clients including VMs. Active Directory and group policy support, software deployment.'
		},


		h_studium: {
			de: 'Diplom-Verwaltungsinformatiker (dual)',
			en: 'Bachelor IT dual degree'
		},

		h_studium_ausf: {
			de: 'Vergleichbar mit einem Informatik Bachelor an einer Hochschule',
			en: 'Bachelor in IT with focus on the public sector including public law and public controlling (administration for cities and villages)'
		},

		heute: {
			en: heute_en,
			de: heute_de
		},

		ich_adresse: {
			en: 'Bergstrasse 15, 85120 Hepberg, Deutschland, Tel.: +49(0)1573 9598 220'
		},

		ich_alter: {
			en: alter,
		},

		ich_name: {
			en: 'Timo Körner',
		},

		ich_website: {
			en: 'tik9.github.io/cv'
		},

		job_frei: {
			en: 'Freelancer and software developer',
			de: 'Freelancer und Software Entwickler'

		},

		job_sys: {
			en: 'System-Administrator'
		},

		oed: {
			de: 'Öffentlicher Dienst',
			en: 'Bavarian State'
		},

		tools_job_sys: {
			en: 'Javascript, MS Access, MS Excel, Mysql, Php, Powershell, VBA, Windows Server'
		},

		tools_job_frei: {
			en: 'Bash, Python, Git'
		},

	}


	Array.prototype.forEach.call(templates, function (template) {

		innen = template.innerHTML

		template_ohne_kla = innen.slice(3, -3)
		wert = werte[template_ohne_kla]

		// de= wert['de']
		if (wert['de']) {
			spr = wert[sprache]
		}
		else {
			spr = wert['en']
		}
		// console.log(innen + ' -> '+spr)

		template.innerHTML = innen.replace(innen, spr)
	})
}
