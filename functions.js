export const setStyle = (el, attrs) => {
    return Object.entries(attrs).reduce((acc, [key, val]) => acc.style(key, val), el);
};
export const setAttrs = (el, attrs) => {
    return Object.entries(attrs).reduce((acc, [key, val]) => acc.attr(key, val), el);
};
//# sourceMappingURL=functions.js.map