export const disableOverflowY = (tagName) => {
    document.getElementsByTagName(tagName)[0].style.overflowY = "hidden";
}

export const enableOverFlowY = (tagName) => {
    document.getElementsByTagName(tagName)[0].style.overflowY = "visible";
}