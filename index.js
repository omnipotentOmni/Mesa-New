const electron = require('electron')
const {app, dialog, ipcMain, ipcRenderer, shell} = require('electron');
const { Menu } = require('electron');
var curWindow;

const BrowserWindow = electron.BrowserWindow;

const createWindow = () => {
    const win = new BrowserWindow({
      frame: false,
      titleBarStyle: 'hidden',
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true
      },
      width: 1250,
      minWidth: 825,
      height: 720
    })
  
    win.loadFile('./ApplicationSupport/html/main-page.htm')
    curWindow = win;

}
  
app.whenReady().then(() => {
  createWindow();
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
})

const icon = __dirname + 'icon.icns';

const menuTemplate = [
  {
    label: 'Null'
  },
  {
    label: 'File',
    submenu: [
      {
        label: 'Create New Alert',
        accelerator: 'CmdOrCtrl+N',
        click: () => {
          console.log('New Alert');
        }
      },
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: (menuItem, browserWindow) => {
          if (browserWindow) {
            browserWindow.reload();
          }
        }
      },
      {
        label: 'Update',
        accelerator: 'CmdOrCtrl+U',
        click: () => {
          console.log('updating');
        }
      },
      {
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click: () => {
          app.quit();
        }
      }
      // Add additional submenu items for the "Edit" menu
    ]
  },
  {
    label: 'Settings',
    submenu: [
      {
        label: 'View DevTools',
        accelerator: 'CmdOrCtrl+Alt+I',
        click: (menuItem, browserWindow) => {
          browserWindow.webContents.toggleDevTools();
        }
      }
    ]
  }
  // Add more top-level menu items as needed
];





