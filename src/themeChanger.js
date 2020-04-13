const htmlElem = document.querySelector('html');
const checkboxElem = document.querySelector('input[name=theme]');

const getStyle = (element, style) => {
  return window.getComputedStyle(element).getPropertyValue(style);
}

const lightTheme = {
  bg: getStyle(htmlElem, '--bg'),
  bgPanel: getStyle(htmlElem, '--bg-panel'),
  colorHeadings: getStyle(htmlElem, '--color-headings'),
  colorText: getStyle(htmlElem, '--color-text'),
  toggleBackground: getStyle(htmlElem, '--toggle-background'),
}

const darkTheme = {
  bg: '#333333',
  bgPanel: '#434343',
  colorHeadings: '#ffffff',
  colorText: '#b5b5b5',
  toggleBackground: '#000',
}

// Convert camelCase to kebab-base with a "--"" prefix
const convert2KebabCase = (str) => {
  const prefix = '--';
  const kebabCaseString = str.replace(/([A-Z])/, '-$1').toLowerCase();
  
  return prefix + kebabCaseString;
}

const changeTheme = (theme) => {
  Object.keys(theme).map((key) => {
    return htmlElem.style.setProperty(convert2KebabCase(key), theme[key]);
  });
}

checkboxElem.addEventListener('change', ({target}) => {
  target.checked ? changeTheme(darkTheme) : changeTheme(lightTheme);
})
