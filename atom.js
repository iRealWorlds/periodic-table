import { setAttrs } from "./functions.js";
import { TAU } from "./constants.js";
export class Atom {
    constructor(parent, element) {
        this.parent = parent;
        this.element = element;
        this.seeds = {
            x: 0,
            y: 0
        };
    }
    render() {
        this.figure = this.parent.append("circle");
        setAttrs(this.figure, { cx: 0, cy: 0, r: 4, fill: `${this.element.displayColor}88` });
        this.seeds.x = Math.random() * TAU;
        this.seeds.y = Math.random() * TAU;
    }
    updatePosition(t) {
        if (this.figure) {
            setAttrs(this.figure, {
                cx: 25 * Math.sin(this.seeds.x + t),
                cy: 25 * Math.sin(this.seeds.y + t)
            });
        }
    }
}
//# sourceMappingURL=atom.js.map