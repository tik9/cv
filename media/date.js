function datef(timestamp) {

    // console.log('zeit fun', timestamp)
    if (timestamp == undefined) {
        dat = new Date()
    } else {
        dat = new Date(timestamp * 1000)
    }

    dd = dat.getDate()

    mm = dat.getMonth() + 1
    yyyy = dat.getFullYear()

    if (dd < 10) { dd = '0' + dd }

    if (mm < 10) { mm = '0' + mm }

    dat = dd + '/' + mm + '/' + yyyy

    return dat
}
