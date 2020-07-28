console.log("berk here")

let playing = true

const playButton = document.getElementById("playButton");
const playButtonContent = document.getElementById("playButtonContent")
const mainTest = document.getElementById("3dTest")

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


