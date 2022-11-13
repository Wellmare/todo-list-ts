import { IFormInput, IInputValue } from '../types'
import { getElementBySelector } from '../utils'

class Form {
    constructor(
        private inputs: IFormInput[],
        private submitButton: HTMLButtonElement,
        private onSubmit: (inputsValues: IInputValue[]) => void
    ) {
        this.submitButton.addEventListener('click', (e) => {
            e.preventDefault()
            this.onSubmit(this.getInputsValues())
        })
    }

    private getInputsValues = (): IInputValue[] => {
        return this.inputs.map((value: IFormInput) => {
            return {
                name: value.name,
                value: getElementBySelector<HTMLInputElement>(value.selector)
                    .value
            }
        })
    }
}

export default Form