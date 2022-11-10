import { themes } from '../types'

class Theming {
    public currentTheme: themes = themes.LIGHT

    private setTheme = (theme: themes) => {
        console.log(darkmode);
        
        darkmode.inDarkMode = theme === themes.DARK
    }

    constructor () {
        this.setTheme(themes.LIGHT)
    }
}

export default Theming
