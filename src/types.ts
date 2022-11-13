// Theme

export enum Themes {
    DARK = 'dark',
    LIGHT = 'light'
}

export enum LocalStorageKeys {
    THEME = 'bs.prefers-color-scheme',
    TODO_LIST = 'todo-list'
}

export enum Selectors {
    themeChanger = '#theme-changer',
    cardsContainer = '#cards-container',
    titleInput = '#title-input',
    textInput = '#text-input',
    submitButton = '#submit-button'
}

// T0dolist

export interface ITodo {
    readonly id: string
    isCompleted: boolean
    title: string
    text: string
}

// Form

export enum InputsNames {
    TITLE = 'title',
    TEXT = 'text'
}

export interface IFormInput {
    selector: string
    name: InputsNames
}

export interface IInputValue {
    name: InputsNames
    value: string
}
