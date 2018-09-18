const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    win = new BrowserWindow({ width:800, height:600, icon:__dirname + '/img/icons8-wi-fi-filled-50.png' });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file',
        slashes: true
    }));

    //Open DevTools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

// run create window function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});
