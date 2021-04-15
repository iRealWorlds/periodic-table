import { ChemicalElement } from "./chemical-element.js";
import { Selection, BaseType } from 'd3';
import {clipPathD, range} from "./constants.js";
import {Atom} from "./atom.js";
import {setAttrs, setStyle} from "./functions.js";

export class ElementFigure
{
    private atoms: Atom[] = [];
    private liquidPaths: {
        A: Selection<any, any, HTMLElement, any>|null,
        B: Selection<any, any, HTMLElement, any>|null
    } = {
        A: null,
        B: null
    };

    private get position(): { x: number, y: number } {
        return {
            x: this.element.positionX * 4.8 + ((this.element.positionY + 1) % 2) * 2.5 - 2,
            y: this.element.positionY * 4.5 - 4
        }
    }

    constructor(private element: ChemicalElement) {
    }

    render(container: Selection<BaseType, any, HTMLElement, any>) {
        const root = container.append('div');

        setStyle(root, {
            width: "5vw",
            height: "5vw",
            transform: `translate(${this.position.x}vw, ${this.position.y}vw)`,
            position: "absolute",
        });

        const svg = root.append("svg");
        setAttrs(svg, {
            viewBox: "0 0 100 100",
            class: "svg"
        });

        const group = svg.append("g");
        setAttrs(group, {
            transform: "translate(50,50)"
        });

        const border = group.append("path");
        setAttrs(border, {
            d: clipPathD,
            fill: "none",
            stroke: `${this.element.displayColor}88`
        });

        switch (this.element.phase) {
            case 'Solid': {
                setAttrs(group.append("rect"), {
                    x: -50,
                    y: 18,
                    width: 100,
                    height: 60,
                    fill: `${this.element.displayColor}88`,
                    style: "clip-path: url(#clipPath)",
                });
                break;
            }
            case 'Liquid': {
                this.liquidPaths.A = group.append('path');
                setAttrs(this.liquidPaths.A, {
                    d: "",
                    fill: `${this.element.displayColor}88`,
                    style: "clip-path: url(#clipPath)",
                });

                this.liquidPaths.B = group.append('path');
                setAttrs(this.liquidPaths.B, {
                    d: "",
                    fill: `${this.element.displayColor}44`,
                    style: "clip-path: url(#clipPath)",
                });
                break;
            }
            case 'Gas': {
                this.atoms = range(5).map(() => new Atom(group, this.element));
                for (const atom of this.atoms) {
                    atom.render();
                }
                break;
            }
        }

        const name = root.append("div").text(this.element.symbol ?? '');
        setAttrs(name, { class: "element-name" });
        setStyle(name, { color: `${this.element.displayColor}88` });

        const number = root.append("div").text(this.element.number ?? '');
        setAttrs(number, { class: "element-number" });
        setStyle(number, { color: `${this.element.displayColor}88` });
    }


    update(t?: number, path1?: string, path2?: string) {
        switch (this.element.phase) {
            case 'Liquid': {
                this.updateLiquid(path1, path2);
                break;
            }

            case 'Gas': {
                this.updateAtoms(t);
                break;
            }
        }
    }

    updateLiquid(path1 = '', path2 = '') {
        if (this.liquidPaths.A) {
            setAttrs(this.liquidPaths.A, { d: path1 });
        }

        if (this.liquidPaths.B) {
            setAttrs(this.liquidPaths.B, { d: path2 });
        }
    }

    updateAtoms(t = 0) {
        this.atoms.forEach((atom) => {
            atom.updatePosition(t);
        });
    }
}
