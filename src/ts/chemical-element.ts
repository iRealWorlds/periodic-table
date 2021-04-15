import {categoryColors, defaultColor} from "./constants.js";

class ElementData {
    name: string|null = null;
    appearance: string|null = null;
    atomicMass: number|null = null;
    boil: number|null = null;
    category: string|null = null;
    color: string|null = null;
    density: number|null = null;
    discoveredBy: string|null = null;
    melt: number|null = null;
    molarHeat: number|null = null;
    namedBy: string|null = null;
    number: number|null = null;
    period: number|null = null;
    phase: 'Solid'|'Liquid'|'Gas'|null = null;
    source: string|null = null;
    spectralImage: string|null = null;
    summary: string|null = null;
    symbol: string|null = null;
    positionX = 1;
    positionY = 1;
    shells: number[] = [];
    electronConfiguration: string|null = null;
    electronConfigurationSemantic: string|null = null;
    electronAffinity: number|null = null;
    electronegativityPauling: number|null = null;
    ionizationEnergies: number[] = [];
    cpkHex: string|null = null;
}

export class ChemicalElement extends ElementData {

    get displayColor(): string {
        if (this.category) {
            return categoryColors[this.category] ?? defaultColor;
        }
        return defaultColor;
    }

    static propertyMap: { [p: string]: string} = {
        atomic_mass: 'atomicMass',
        discovered_by: 'discoveredBy',
        molar_heat: 'molarHeat',
        named_by: 'namedBy',
        spectral_img: 'spectralImage',
        electron_configuration: 'electronConfiguration',
        electron_configuration_semantic: 'electronConfigurationSemantic',
        electron_affinity: 'electronAffinity',
        electronegativity_pauling: 'electronegativityPauling',
        ionization_energies: 'ionizationEnergies',
        'cpk-hex': 'cpkHex',
        xpos: 'positionX',
        ypos: 'positionY'
    }

    static factory(data: object): ChemicalElement
    {
        const element = new ChemicalElement();

        for (const [key, value] of Object.entries(data)) {
            type elementKey = keyof ElementData;
            const mapped: elementKey = (this.propertyMap[key] ?? key) as elementKey;
            element[mapped] = value as never;
        }

        return element;
    }
}