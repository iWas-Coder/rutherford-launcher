// @ts-check

const { app, BrowserWindow } = require('electron')
const path = require('path')


const createWindow = () => {
    const win = new BrowserWindow({
        title: 'Rutherford Launcher',
        minWidth: 640,
        width: 800,
        maxWidth: 1280,
        minHeight: 480,
        height: 600,
        maxHeight: 720,
        maximizable: false,
        backgroundColor: '#f7df1e',
        webPreferences: {
            preload: path.join(__dirname, 'app/preload.js'),
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            contextIsolation: false
        },
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#f7df1e',
            symbolColor: '#000000'
        },
        icon: 'D:\\MINECRAFT\\img\\rutherford.ico'
    })
    win.loadURL(path.join(__dirname, 'app/index.html'))
}


app.whenReady().then(() => {
    createWindow()
    app.commandLine.appendSwitch('in-process-gpu')
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
