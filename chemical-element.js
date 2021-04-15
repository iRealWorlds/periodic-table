import { categoryColors, defaultColor } from "./constants.js";
class ElementData {
    constructor() {
        this.name = null;
        this.appearance = null;
        this.atomicMass = null;
        this.boil = null;
        this.category = null;
        this.color = null;
        this.density = null;
        this.discoveredBy = null;
        this.melt = null;
        this.molarHeat = null;
        this.namedBy = null;
        this.number = null;
        this.period = null;
        this.phase = null;
        this.source = null;
        this.spectralImage = null;
        this.summary = null;
        this.symbol = null;
        this.positionX = 1;
        this.positionY = 1;
        this.shells = [];
        this.electronConfiguration = null;
        this.electronConfigurationSemantic = null;
        this.electronAffinity = null;
        this.electronegativityPauling = null;
        this.ionizationEnergies = [];
        this.cpkHex = null;
    }
}
export class ChemicalElement extends ElementData {
    get displayColor() {
        if (this.category) {
            return categoryColors[this.category] ?? defaultColor;
        }
        return defaultColor;
    }
    static factory(data) {
        const element = new ChemicalElement();
        for (const [key, value] of Object.entries(data)) {
            const mapped = (this.propertyMap[key] ?? key);
            element[mapped] = value;
        }
        return element;
    }
}
ChemicalElement.propertyMap = {
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
};
//# sourceMappingURL=chemical-element.js.map