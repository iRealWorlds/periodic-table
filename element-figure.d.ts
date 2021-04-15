import { ChemicalElement } from "./chemical-element";
import { Selection, BaseType } from 'd3';
export declare class ElementFigure {
    private element;
    private atoms;
    private liquidPaths;
    constructor(element: ChemicalElement);
    render(container: Selection<BaseType, any, HTMLElement, any>): void;
    update(t?: number, path1?: string, path2?: string): void;
    updateLiquid(path1?: string, path2?: string): void;
    updateAtoms(t?: number): void;
}
