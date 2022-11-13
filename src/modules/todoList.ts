import {
    IFormInput,
    IInputValue,
    InputsNames,
    LocalStorageKeys,
    Selectors,
    ITodo
} from '../types'
import {
    getDataFromLocalStorage,
    getElementBySelector,
    setDataToLocalStorage
} from '../utils'
import Form from './form'

import uniqid from 'uniqid'

class TodoList {
    private todos: ITodo[] = []

    constructor() {
        const todos = getDataFromLocalStorage<ITodo[]>(
            LocalStorageKeys.TODO_LIST
        )

        this.controlForm()

        this.todos = todos || []
        this.render()
    }

    private controlForm = () => {
        const inputs: IFormInput[] = [
            { name: InputsNames.TITLE, selector: Selectors.titleInput },
            { name: InputsNames.TEXT, selector: Selectors.textInput }
        ]

        const onSubmit = (inputsValues: IInputValue[]) => {
            const todo: ITodo = {
                id: uniqid(),
                isCompleted: false,
                title: inputsValues[0].value,
                text: inputsValues[1].value
            }

            this.addTodo(todo)
        }

        const submitButton = getElementBySelector<HTMLButtonElement>(
            Selectors.submitButton
        )

        new Form(inputs, submitButton, onSubmit)
    }

    private addTodo = (todo: ITodo) => {
        this.todos.push(todo)

        setDataToLocalStorage(LocalStorageKeys.TODO_LIST, this.todos)
        this.render()
    }

    private setCompletedTodo = (id: string, isCompleted: boolean) => {
        this.todos.map((value: ITodo) => {
            if (value.id === id) {
                value.isCompleted = isCompleted
            }
        })

        setDataToLocalStorage(LocalStorageKeys.TODO_LIST, this.todos)
        this.render()
    }

    private deleteTodo = (id: string) => {
        console.log(id)
        console.log(this.todos)

        this.todos = this.todos.filter((value: ITodo) => {
            return value.id !== id
        })

        setDataToLocalStorage(LocalStorageKeys.TODO_LIST, this.todos)
        this.render()
    }

    private render = () => {
        const cardsContainer = getElementBySelector<HTMLDivElement>(
            Selectors.cardsContainer
        )
        cardsContainer.innerHTML = ''

        this.todos.forEach((todo: ITodo) => {
            const card = document.createElement('div')
            card.className = 'card mb-3'

            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title ${
                        todo.isCompleted ? 'line-through' : ''
                    }">${todo.title}</h5>
                    <p class="card-text ${
                        todo.isCompleted ? 'line-through' : ''
                    }">
                        ${todo.text}
                    </p>
                    <div class="buttons">
                        <button class="btn ${
                            todo.isCompleted ? 'btn-secondary' : 'btn-success'
                        } btn-complete">${
                todo.isCompleted ? 'UNCOMPLETE' : 'COMPLETE'
            }</button>
                        <button class="btn btn-outline-danger btn-delete">
                            DELETE
                        </button>
                    </div>
                </div>
            `

            card.querySelector('.btn-complete')?.addEventListener(
                'click',
                (e) => {
                    e.preventDefault()
                    this.setCompletedTodo(todo.id, !todo.isCompleted)
                }
            )

            card.querySelector('.btn-delete')?.addEventListener(
                'click',
                (e) => {
                    e.preventDefault()
                    console.log('delete')

                    this.deleteTodo(todo.id)
                }
            )

            cardsContainer.insertAdjacentElement('beforeend', card)
        })
    }
}

export default TodoList
