export const TAU = 2 * Math.PI;

export const range = (n: any, m = 0) => Array(n).fill(m).map((i, j) => i + j);

export const map = (
    value: number,
    sMin: number,
    sMax: number,
    dMin: number,
    dMax: number
) => {
    return dMin + ((value - sMin) / (sMax - sMin)) * (dMax - dMin);
};

export const polar = (ang: number, r = 1, [x = 0, y = 0] = []) => [
    x + r * Math.cos(ang),
    y + r * Math.sin(ang),
];

export const clipCoords = range(6).map((i) => {
    const ang = map(i, 0, 6, 0, TAU);
    return polar(ang + Math.PI / 2, 50);
});

export const clipPathD = `M${[...clipCoords, clipCoords[0]]
    .map(([x, y]) => `L${x},${y}`)
    .join("")
    .slice(1)}`;


export const categoryColors: {
    [p: string]: string
} = {
    'diatomic nonmetal': '#3d7ea6',
    'noble gas': '#bc6ff1',
    'alkali metal': '#f05454',
    'alkaline earth metal': '#ffa36c',
    metalloid: '#64958f',
    'polyatomic nonmetal': '#8d93ab',
    'post-transition metal': '#c0e218',
    'transition metal': '#fcf876',
    lanthanide: '#949cdf',
    actinide: '#16697a',
};

export const defaultColor = '#93abd3';