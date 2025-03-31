/*
Clase 6 - Manejo del DOM (06/03/2025)
Vídeo: https://www.twitch.tv/videos/2403686130?t=00h11m52s
*/

const text = document.getElementById("text")
const button = document.getElementById("button")
const list = document.getElementById("list")

function addTask() {

    if (text.value === "") return

    const newElement = document.createElement("li")
    newElement.textContent = text.value

    newElement.addEventListener("click", () => {
        newElement.remove()
    })

    list.appendChild(newElement)

    text.value = ""
}

button.addEventListener("click", addTask)

text.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask()
    }
})