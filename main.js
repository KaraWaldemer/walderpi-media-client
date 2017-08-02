import { BrowserWindow, app } from 'electron'

import path from 'path'
import url from 'url'

let mainWindow = null

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }))
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if( process.platform !== 'darwin' ) {
    app.quit()
  }
})

app.on('activate', () => {
  if( mainWindow === null ) {
    createWindow()
  }
})
