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
    cardsContainer = '#cards-container'
}

// T0dolist

export interface Todo {
    readonly id: number
    isCompleted: boolean
    title: string
    text: string
}