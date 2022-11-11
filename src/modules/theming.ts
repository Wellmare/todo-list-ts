import { LocalStorageKeys, Selectors, Themes } from '../types'
import {
    getDataFromLocalStorage,
    getElementBySelector,
    setDataToLocalStorage,
} from '../utils'

class Theming {
    public currentTheme: Themes = Themes.LIGHT

    private setTheme = (theme: Themes) => {
        this.currentTheme = darkmode.inDarkMode ? Themes.DARK : Themes.LIGHT

        darkmode.setDarkMode(theme === Themes.DARK)
        setDataToLocalStorage<String>(
            LocalStorageKeys.THEME,
            theme || Themes.LIGHT
        )
    }

    private setThemeFromLocalStorage() {
        const theme = getDataFromLocalStorage<Themes>(LocalStorageKeys.THEME)
        const currentTheme = theme
        this.setTheme(theme)
    }

    constructor() {
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
