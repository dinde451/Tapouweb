const { app, BrowserWindow, Menu, MenuItem } = require('electron');
const path = require('node:path');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
    icon: path.join(__dirname, '..', 'assets', 'icon.png'), // Path to your icon
  });

  mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));

  // Handle context menu
  mainWindow.webContents.on('context-menu', (event, params) => {
    const menu = new Menu();
    if (params.linkURL) {
      // Append a valid MenuItem to the menu
      menu.append(
        new MenuItem({
          label: 'Open Link in New Window',
          click: () => {
            createNewWindow(params.linkURL);
          },
        })
      );
    }
    menu.popup({ window: mainWindow });
  });
};

const createNewWindow = (url) => {
  const newWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
    icon: path.join(__dirname, '..', 'assets', 'icon.png'), // Same icon for new window
  });
  newWindow.loadURL(url);
};

// App Lifecycle
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
