const { app, BrowserWindow, BrowserView , ipcMain } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1024,
        height: 576,
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true
        }
    })

    const view = new BrowserView()
    win.setBrowserView(view)
    view.setBounds({
        x: 0,
        y: 31,
        width: 1024,
        height: 545
    })
    view.setAutoResize({
        width: true,
        height: true
    })
    view.setBackgroundColor('#2c2c2c')
    view.webContents.loadURL('https://www.figma.com/files/recents-and-sharing/recently-viewed')

    win.loadFile('assets/index.html')

    ipcMain.on('minimize',() => {
        win.minimize()
    })
    ipcMain.on('close', () => {
        app.quit()
    })
    ipcMain.on('maximize', () => {
        win.maximize()
    })
    ipcMain.on('unmaximize', () => {
        win.unmaximize()
    })

}

app.whenReady().then(() => {
    createWindow()
})