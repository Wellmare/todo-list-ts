export const getDataFromLocalStorage = <T>(key: string) => {
    const recievedItem = localStorage.getItem(key)
    try {
        return JSON.parse(recievedItem!)
    } catch (error) {
        return recievedItem
    }
}

export const setDataToLocalStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getElementBySelector = <T>(selector: string): T => {
    return document.querySelector(selector!) as T
}