import { ChemicalElement } from "./chemical-element";
// @ts-ignore
import * as d3 from 'd3';
import { ElementFigure } from "./element-figure";
import {clipPathD, map, range, TAU} from "./constants";
import {setAttrs} from "./functions";
import * as jsonData  from '../../data/periodic-table-data.json';

import '../scss/style.scss';

let elements: ChemicalElement[] = [];
let figures: ElementFigure[] = [];
let step = 0;

const animateElements = () => {
    step = (step + 1) % 100;
    const t = map(step, 0, 100, 0, TAU);

    const curve1 = range(10)
        .map((i) => {
            const ang = map(i, 0, 10, 0, TAU);
            const x = map(i, 0, 10, -50, 50);
            const y = 10 + 4 * Math.sin(ang + t);
            return `L${x},${y}`;
        })
        .join("");

    const curve2 = range(10)
        .map((i) => {
            const ang = map(i, 0, 10, 0, TAU);
            const x = map(i, 0, 10, -50, 50);
            const y = 10 + 6 * Math.sin(ang + t + Math.PI);
            return `L${x},${y}`;
        })
        .join("");

    const path1 = `M50,10L50,50L-50,50L-50,10${curve1}`;
    const path2 = `M50,10L50,50L-50,50L-50,10${curve2}`;

    for (const figure of figures) {
        figure.update(t, path1, path2);
    }

    requestAnimationFrame(animateElements);
}

window.addEventListener('load', async () => {
    const divElement = document.createElement('div');
    divElement.id = 'container';
    document.body.appendChild(divElement);

    const container = d3.select('#container');

    const svgRoot = container.append("svg");
    setAttrs(svgRoot, { width: "0px", height: "0px" });
    const defs = svgRoot.append("defs");
    const clipPath = defs.append("clipPath");
    setAttrs(clipPath, { id: "clipPath" });
    const clipPathPath = clipPath.append("path");
    setAttrs(clipPathPath, { d: clipPathD });

    elements = Array.from(jsonData.elements).map(element => ChemicalElement.factory(element));

    figures = elements.map(element => new ElementFigure(element));

    for (const figure of figures) {
        figure.render(container);
    }

    animateElements();
});
