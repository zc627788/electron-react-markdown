const { ipcRenderer } = require("electron");

// 可以把.remote相当于在main文件中取出BrowserWindow
const { BrowserWindow} = require("electron").remote;
window.addEventListener("DOMContentLoaded", () => {
  console.log(`11111`, 11111);
  document.getElementById("send").addEventListener("click", () => {
      console.log(`1111`, 1111)
    ipcRenderer.send("message", "hello from renderer");
    let win = new BrowserWindow({width:800,height:600})
    win.loadURL('https://www.google.com')
  });
  ipcRenderer.on('reply',(event,args)=>{
      document.getElementById("message").innerHTML =args
  })
});
