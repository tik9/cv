<script>

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
        en: 'Timo K�rner'},

        adresse:{
        en: 'Bergstr. 15, 85120 Hepberg'},

        job_titel: {
        de: 'Technischer Oberinspektor',
        'en' : 'IT expert',
        },

        job_sys: {
        de:'Systemadministrator f�r Windows Server und Exchange',
        en: Administrator Windows
        },

        job_freib:{
        de: 'Freiberuflicher IT Spezialist',
            en: Freelancer
        },

        an: {
        de: 'Autobahndirektion Nordbayern',
        en: 'Railway public services'
        }

        h_studium: {
        de: 'Studium Diplom - Verwaltungsinformatik',
        en: 'Bachelor IT'
        }
    }

        // document.body.innerHTML = document.body.innerHTML.replace('{{ ' + schluessel + ' }}', werte[schluessel])

for (schluessel in werte) {
        // console.log(schluessel);
        // for (subkey in werte[schluessel]) { 
        console.log(schluessel + ' ' + werte[schluessel]['en']);
        // console.log(schluessel + ' '+werte[schluessel]['de']);
    // }
}
}
</script>