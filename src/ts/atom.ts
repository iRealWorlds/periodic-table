import {ChemicalElement} from "./chemical-element.js";
import {Selection} from "d3";
import {setAttrs} from "./functions.js";
import {TAU} from "./constants.js";

export class Atom {
    private figure: Selection<any, any, any, any>|undefined;
    private seeds: {
        x: number,
        y: number
    } = {
        x: 0,
        y: 0
    }

    constructor(private parent: Selection<any, any, any, any>, private element: ChemicalElement) {
    }

    render(): void
    {
        this.figure = this.parent.append("circle");
        setAttrs(this.figure, { cx: 0, cy: 0, r: 4, fill: `${this.element.displayColor}88` });

        this.seeds.x = Math.random() * TAU;
        this.seeds.y = Math.random() * TAU;
    }

    updatePosition(t: number) {
        if (this.figure) {
            setAttrs(this.figure, {
                cx: 25 * Math.sin(this.seeds.x + t),
                cy: 25 * Math.sin(this.seeds.y + t)
            });
        }
    }
}