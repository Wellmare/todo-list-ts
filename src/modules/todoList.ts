import { LocalStorageKeys, Selectors, Todo } from '../types'
import { getDataFromLocalStorage, getElementBySelector, setDataToLocalStorage } from '../utils'

class TodoList {
    private todos: Todo[] | []

    constructor() {
        this.todos = getDataFromLocalStorage<Todo[]>(LocalStorageKeys.TODO_LIST) || []
        this.render()
    }

    private addTodo = (todo: Todo) => {
        this.todos.push(todo)

        setDataToLocalStorage(LocalStorageKeys.TODO_LIST, this.todos)
        this.render()
    }

    private setCompletedTodo = (id: number, isCompleted: boolean) => {
        this.todos.map((value: Todo) => {
            if (value.id === id) {
                value.isCompleted = isCompleted
            }
        })

        setDataToLocalStorage(LocalStorageKeys.TODO_LIST, this.todos)
        this.render()
    }

    private deleteTodo = (id: number) => {
        console.log(id);
        console.log(this.todos);
        
        
        this.todos = this.todos.filter((value: Todo) => {
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

        this.todos.forEach((todo: Todo) => {
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
                    console.log('delete');
                    
                    this.deleteTodo(todo.id)
                }
            )

            cardsContainer.insertAdjacentElement('beforeend', card)
        })
    }
}

export default TodoList
