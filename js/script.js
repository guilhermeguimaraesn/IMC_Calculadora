import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { notANumber } from "./utils.js"
import { IMC } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.onfocus = event => AlertError.close()
inputHeight.onfocus = event => AlertError.close()

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNaN = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNaN) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    displayResultMessage(result)

}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}










