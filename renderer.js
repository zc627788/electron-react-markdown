const { ipcRenderer } = require("electron");
window.addEventListener("DOMContentLoaded", () => {
  console.log(`11111`, 11111);
  document.getElementById("send").addEventListener("click", () => {
      console.log(`1111`, 1111)
    ipcRenderer.send("message", "hello from renderer");
  });
  ipcRenderer.on('reply',(event,args)=>{
      document.getElementById("message").innerHTML =args
  })
});
