document.getElementById("1").addEventListener("click", trykkKnapp)

function trykkKnapp(event) {
    event.target.style.color = 'red'
    event.target.innerText = 'Jeg er nå rød!'
}