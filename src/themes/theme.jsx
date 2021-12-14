import bannerLightDesktop from '../images/bg-desktop-light.jpg';
import iconMoon from '../images/icon-moon.svg';
import bannerDarkDesktop from '../images/bg-desktop-dark.jpg';
import iconSun from '../images/icon-sun.svg';

export const light = {
    colors: {
        backgroundBody: '#f0f0f3',
        backgroundInput: 'hsl(0,0%,98%)',
        placeholderInput: 'hsl(236, 9%, 61%)',
        backgroundButtonHover: 'hsl(236, 33%, 92%)',
        backgroundTasks: 'hsl(0,0%,98%)',
        borderTasks: 'hsl(236,33%,92%)',
        borderTasksCircle: 'hsl(236,33%,92%)',
        iconCross: 'hsl(236, 9%, 61%)',
        iconCrossHover: '#ff0000',
        textTitle: 'hsl(0,0%,98%)',
        textTasks: 'hsl(235,19%,35%)',
        textTaskFooter: 'hsl(236,9%,61%)',
        textTaskFooterHover: 'hsl(235,21%,11%)',
        textTaskFooterActive: 'hsl(220,98%,61%)',
        textFooter: 'hsl(236, 9%, 61%)'
    },
    image: {
        banner: bannerLightDesktop,
        iconTheme: iconMoon
    }
}
export const dark = {
    colors: {
        backgroundBody: 'hsl(235, 21%, 11%)',
        backgroundInput: 'hsl(235, 24%, 19%)',
        placeholderInput: 'hsl(237, 14%, 26%)',
        backgroundButtonHover: 'hsl(237, 14%, 26%)',
        backgroundTasks: 'hsl(235, 24%, 19%)',
        borderTasks: 'hsl(237, 14%, 26%)',
        borderTasksCircle: 'hsl(237, 14%, 26%)',
        iconCross: 'hsl(236, 9%, 61%)',
        iconCrossHover: '#ff0000',
        textTitle: 'hsl(0,0%,98%)',
        textTasks: 'hsl(236, 9%, 61%)',
        textTaskFooter: 'hsl(233, 14%, 35%)',
        textTaskFooterHover: 'hsl(235,21%,11%)',
        textTaskFooterActive: 'hsl(220,98%,61%)',
        textFooter: 'hsl(236, 9%, 61%)'
    },
    image: {
        banner: bannerDarkDesktop,
        iconTheme: iconSun
    }
}