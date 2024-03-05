const { ipcRenderer } = require('electron')
let expandStatus = 0
let maximizeButtonImg = document.querySelector('.maximize img')
function closeApp(e) {
    e.preventDefault()
    ipcRenderer.send('close')
}
function minimize() {
    ipcRenderer.send('minimize')
}
function expandToggle() {
    if (expandStatus === 0) {
        ipcRenderer.send('maximize')
        expandStatus = 1
        maximizeButtonImg.setAttribute('src', '../assets/icons/windowControlsIcons/unexpand.svg')
    } else {
        ipcRenderer.send('unmaximize')
        expandStatus = 0
        maximizeButtonImg.setAttribute('src', '../assets/icons/windowControlsIcons/expand.svg')
    }
}

document.querySelector('.close').addEventListener("click", closeApp)
document.querySelector('.minimize').addEventListener('click', minimize)
document.querySelector('.maximize').addEventListener('click', expandToggle)
