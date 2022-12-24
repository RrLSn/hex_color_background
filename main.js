const bodyEl = document.querySelector('body')
const clickmeEl = document.querySelector('button')
const h2El = document.querySelector('h2')

clickmeEl.addEventListener(
    'click',
    (e) => {
     const randHex = '#' + Math.floor(Math.random()*16777215).toString(16)
     bodyEl.style.background = randHex
     h2El.textContent = `HEX COLOR : ${randHex}`
    }
)