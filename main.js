const path = require("path");
// require("electron-reload")(path.join(__dirname, "."), {
//   electron: require(`${__dirname}/node_modules/electron`),
// });
const { app, BrowserWindow } = require("electron");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 210,
    height: 130,
    icon: __dirname + "./counter.ico", // Path ke ikon
    resizable: false,
    frame: false,
    alwaysOnTop: true,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
