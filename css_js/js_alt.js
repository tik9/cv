<script>

window.onload = function(){
    var geburtstag = Date.parse("1978-10-02")
    var alter = Date.now() - geburtstag
    var msProJahr = 31536000000
    var alter = Math.floor(alter / msProJahr);

    werte = {
        alter: alter,
        name: 'Timo Körner',
        adresse: 'Bergstr. 15, 85120 Hepberg',

        job_titel: 'Technischer Oberinspektor',
        job_sys: 'Systemadministrator für Windows Server und Exchange',
        job_freib:'Freiberuflicher IT Spezialist',

        an: 'Autobahndirektion Nordbayern',
        h_studium: 'Studium Diplom - Verwaltungsinformatik',

        gith:'https://github.com/tik9'
    }
for (schluessel in werte){
    document.body.innerHTML = document.body.innerHTML.replace('{{ '+ schluessel +' }}', werte[schluessel])
}

}
</script>