export const getDataFromLocalStorage = <T>(key: string) => {
    return JSON.parse(localStorage.getItem(key)!) as T
}

export const setDataToLocalStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getElementBySelector = <T>(selector: string): T => {
    return document.querySelector(selector!) as T
}