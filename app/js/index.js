// @ts-check


const { shell } = require('electron')

const launchMC = () => {    
    shell.beep()
    shell.openPath('D:\\MINECRAFT\\bin\\script\\funcs\\play.bat')
        .then(err => {
            console.error(err)
        })
}
