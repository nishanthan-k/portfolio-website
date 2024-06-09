export const updateTheme = () => {
    const html = document.querySelector('html');
    const theme = html.getAttribute('theme');
    html.setAttribute('theme', theme === 'dark' ? 'light' : 'dark');
}