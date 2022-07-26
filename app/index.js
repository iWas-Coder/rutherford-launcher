// @ts-check


const { shell } = require('electron')
const path = 'D:\\MINECRAFT\\bin\\script\\funcs\\'

const funcMC = func => {
    shell.beep()
    shell.openPath(path + func + '.bat')
        .then(err => {
            console.error(err)
        })
}
