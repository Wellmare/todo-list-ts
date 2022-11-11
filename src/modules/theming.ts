import { LocalStorageKeys, Selectors, Themes } from '../types'
import {
    getDataFromLocalStorage,
    getElementBySelector,
    setDataToLocalStorage
} from '../utils'

class Theming {
    public currentTheme: Themes = Themes.LIGHT

    private setTheme = (theme: Themes) => {
        darkmode.setDarkMode(theme === Themes.DARK)
        this.currentTheme = theme
    }

    constructor() {
        const theme = getDataFromLocalStorage<String>(LocalStorageKeys.THEME)
        this.currentTheme = theme === 'dark' ? Themes.DARK : Themes.LIGHT

        getElementBySelector<HTMLButtonElement>(
            Selectors.themeChanger
        ).addEventListener('click', (e) => {
            e.preventDefault()
            this.setTheme(
                this.currentTheme === Themes.DARK ? Themes.LIGHT : Themes.DARK
            )
        })
    }
}

export default Theming
