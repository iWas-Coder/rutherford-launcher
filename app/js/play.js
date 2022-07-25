// @ts-check


import { spawn } from 'child_process'

let container = document.getElementById('pre-out')

const launchMC = () => {
    let cmd = spawn('cmd', ['/c', 'D:\\MINECRAFT\\bin\\script\\funcs\\play.bat'])
    cmd.stdout.on('data', data => {
        container.textContent += data.toString()
    })
    cmd.stderr.on('data', data => {
        container.textContent += data.toString()
    })
    cmd.on('exit', code => {
        container.textContent += 'MC process ended with code ' + code.toString()
    })
}
