import { app, BrowserWindow } from 'electron'

let mainWindow: BrowserWindow;

app.on('ready', createWindows);

function createWindows(): void {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + '/preload.js'
        },
        show: false,
    });

    mainWindow.loadFile('index.html');
    mainWindow.on('ready-to-show', () => mainWindow.show());
}