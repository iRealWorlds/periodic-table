import { ChemicalElement } from "./chemical-element";
import { Selection } from "d3";
export declare class Atom {
    private parent;
    private element;
    private figure;
    private seeds;
    constructor(parent: Selection<any, any, any, any>, element: ChemicalElement);
    render(): void;
    updatePosition(t: number): void;
}
