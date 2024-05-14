export const sendPropsToCustomComponent = (component, props) =>
    `<${component} data-props='${JSON.stringify(props)}'></${component}>`

export const getPropsFromCustomComponent = (component) => {
    const customComponent = document.querySelector(component);
    return JSON.parse(customComponent.getAttribute('data-props'));
}