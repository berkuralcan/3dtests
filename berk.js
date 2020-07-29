console.log("berk here")

let playing = true
let isChanged = false

const playButton = document.getElementById("playButton");
const playButtonContent = document.getElementById("playButtonContent")
const mainTest = document.getElementById("3dTest")
const changeButton = document.getElementById("change")

const rotation = function() {
    console.log("Performing rotation.")
    if(playing) {
        playButtonContent.innerHTML = "⏸"
        mainTest.setAttribute("auto-rotate", "")
        mainTest.setAttribute("camera-controls", "")

    } else {
        playButtonContent.innerHTML = "▶️"
        mainTest.removeAttribute("auto-rotate")
        mainTest.removeAttribute("camera-controls")
        
    }

}

playButton.addEventListener("click", function() {
    console.log("Button clicked.")
    playing = !playing
    console.log(playing)
    rotation()
})

const changed = function() {
    console.log("Performing change")
    if(isChanged) {
        mainTest.setAttribute("src", "test2.glb")
    } else {
        mainTest.setAttribute("src", "test4.glb")
    }
}

changeButton.addEventListener("click", function() {
    console.log("Change clicked.")
    isChanged = !isChanged
    changed()
})




