// @ts-check


const { shell } = require('electron')
const path = 'scripts'

const funcMC = func => {
    let btn = document.getElementById(func)

    // Saving initial value of the button
    let initial_value = btn.innerText
    btn.innerText = ''
    // Disabling button on click
    btn.disabled = true
    // Executing requested script
    shell.openPath(path + func + '.bat')
        .catch(err => {
            console.error(err)
        })
    // In 10s the button will be active again
    setTimeout(() => {
        btn.classList.remove('loading-spinner')
        btn.innerText = initial_value
        btn.disabled = false
    }, 10000)
    // While the button is disabled, show a loading spinner
    btn.classList.add('loading-spinner')
}
