const { app, BrowserWindow,ipcMain } = require("electron");


app.on('ready',()=>{
  let mainWindow = new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation: false,
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
  ipcMain.on('message',(event,args)=>{
    console.log(`args`, args)
    event.reply('reply','hello from main message')

  })

  //   let secondWindow = new BrowserWindow({
  //   width:400,
  //   height:300,
  //   webPreferences:{
  //     nodeIntegration:true
  //   },
  //   parent:mainWindow
  // })
  //   secondWindow.loadFile('second.html')
})