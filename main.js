// main.js
const electron = require("electron")
const path = require("path")
const url = require("url")

const app = electron.app
const BrowserWindow = electron.BrowserWindow

// Window creation
let win
const createWindow = () => {
	win = new BrowserWindow({
		title: "Hello World Application",
		width: 600,
		height: 600,
		// maxWidth: 50,
		icon: path.join(__dirname, 'static', 'img', 'icon.jpg'),
		transparent: false,
		frame: false,
		transparent: true,
		titleBarStyle: 'hiddenInset',
		resizable: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true
		}
	})
	win.setMenu(null)
	win.webContents.openDevTools()
	win.loadURL(url.format(
		{
			pathname: path.join(__dirname, 'templates', 'index.html'),
			protocol: "file",
			slashes: true
		}
	))

	win.on("closed", () => {
		win = null;
	})
}

// Window Specific event handling
app.on("ready", createWindow)

// For platform is darwin
app.on("window-all-close", () => {
	if (process.platform != 'darwin') {
		app.quit()
	}
})

app.on("activate", () => {
	if (win === null){
		createWindow()
	}
})
