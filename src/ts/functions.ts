import {Selection} from "d3";


export const setStyle = (el: Selection<any, any, HTMLElement, any>, attrs: object) => {
    return Object.entries(attrs).reduce((acc, [key, val]) => acc.style(key, val), el);
}
export const setAttrs = (el: Selection<any, any, HTMLElement, any>, attrs: object) => {
    return Object.entries(attrs).reduce((acc, [key, val]) => acc.attr(key, val), el);
}