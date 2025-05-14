/*
Clase 70 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=22342
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