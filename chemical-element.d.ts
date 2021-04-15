export declare class ChemicalElement {
    name: string | null;
    appearance: string | null;
    atomicMass: number | null;
    boil: number | null;
    category: string | null;
    color: string | null;
    density: number | null;
    discoveredBy: string | null;
    melt: number | null;
    molarHeat: number | null;
    namedBy: string | null;
    number: number | null;
    period: number | null;
    phase: 'Solid' | 'Liquid' | 'Gas' | null;
    source: string | null;
    spectralImage: string | null;
    summary: string | null;
    symbol: string | null;
    positionX: number | null;
    positionY: number | null;
    shells: number[];
    electronConfiguration: string | null;
    electronConfigurationSemantic: string | null;
    electronAffinity: number | null;
    electronegativityPauling: number | null;
    ionizationEnergies: number[];
    cpkHex: string | null;
    static propertyMap: {
        [p: string]: string;
    };
    static factory(data: object): ChemicalElement;
}
