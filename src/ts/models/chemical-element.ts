import {categoryColors, defaultColor} from "../constants";
import {ElementData} from "./element-data";

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
