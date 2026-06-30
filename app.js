/**
 * RikMakersHub Laminar Flow CV Processing Engine
 * Core Logic Architecture Module — app.js (Part 1 of 5)
 * Element Database Index Registry: 1 to 25
 * Sole Architect: Rik (Class 8 Sovereign Matrix)
 */

const elementDatabase = {
    1: { name: "Hydrogen", mass: "1.008 u", config: "1s¹" },
    2: { name: "Helium", mass: "4.0026 u", config: "1s²" },
    3: { name: "Lithium", mass: "6.94 u", config: "[He] 2s¹" },
    4: { name: "Beryllium", mass: "9.0122 u", config: "[He] 2s²" },
    5: { name: "Boron", mass: "10.81 u", config: "[He] 2s² 2p¹" },
    6: { name: "Carbon", mass: "12.011 u", config: "[He] 2s² 2p²" },
    7: { name: "Nitrogen", mass: "14.007 u", config: "[He] 2s² 2p³" },
    8: { name: "Oxygen", mass: "15.999 u", config: "[He] 2s² 2p⁴" },
    9: { name: "Fluorine", mass: "18.998 u", config: "[He] 2s² 2p⁵" },
    10: { name: "Neon", mass: "20.180 u", config: "[He] 2s² 2p⁶" },
    11: { name: "Sodium", mass: "22.990 u", config: "[Ne] 3s¹" },
    12: { name: "Magnesium", mass: "24.305 u", config: "[Ne] 3s²" },
    13: { name: "Aluminium", mass: "26.982 u", config: "[Ne] 3s² 3p¹" },
    14: { name: "Silicon", mass: "28.085 u", config: "[Ne] 3s² 3p²" },
    15: { name: "Phosphorus", mass: "30.974 u", config: "[Ne] 3s² 3p³" },
    16: { name: "Sulfur", mass: "32.06 u", config: "[Ne] 3s² 3p⁴" },
    17: { name: "Chlorine", mass: "35.45 u", config: "[Ne] 3s² 3p⁵" },
    18: { name: "Argon", mass: "39.948 u", config: "[Ne] 3s² 3p⁶" },
    19: { name: "Potassium", mass: "39.098 u", config: "[Ar] 4s¹" },
    20: { name: "Calcium", mass: "40.078 u", config: "[Ar] 4s²" },
    21: { name: "Scandium", mass: "44.956 u", config: "[Ar] 3d¹ 4s²" },
    22: { name: "Titanium", mass: "47.867 u", config: "[Ar] 3d² 4s²" },
    23: { name: "Vanadium", mass: "50.942 u", config: "[Ar] 3d³ 4s²" },
    24: { name: "Chromium", mass: "51.996 u", config: "[Ar] 3d⁵ 4s¹" },
    25: { name: "Manganese", mass: "54.938 u", config: "[Ar] 3d⁵ 4s²" }
};
/**
 * Core Logic Architecture Module — app.js (Part 2 of 5)
 * Element Database Index Registry: 26 to 55
 */
Object.assign(elementDatabase, {
    26: { name: "Iron", mass: "55.845 u", config: "[Ar] 3d⁶ 4s²" },
    27: { name: "Cobalt", mass: "58.933 u", config: "[Ar] 3d⁷ 4s²" },
    28: { name: "Nickel", mass: "58.693 u", config: "[Ar] 3d⁸ 4s²" },
    29: { name: "Copper", mass: "63.546 u", config: "[Ar] 3d¹⁰ 4s¹" },
    30: { name: "Zinc", mass: "65.38 u", config: "[Ar] 3d¹⁰ 4s²" },
    31: { name: "Gallium", mass: "69.723 u", config: "[Ar] 3d¹⁰ 4s² 4p¹" },
    32: { name: "Germanium", mass: "72.630 u", config: "[Ar] 3d¹⁰ 4s² 4p²" },
    33: { name: "Arsenic", mass: "74.922 u", config: "[Ar] 3d¹⁰ 4s² 4p³" },
    34: { name: "Selenium", mass: "78.971 u", config: "[Ar] 3d¹⁰ 4s² 4p⁴" },
    35: { name: "Bromine", mass: "79.904 u", config: "[Ar] 3d¹⁰ 4s² 4p⁵" },
    36: { name: "Krypton", mass: "83.798 u", config: "[Ar] 3d¹⁰ 4s² 4p⁶" },
    37: { name: "Rubidium", mass: "85.468 u", config: "[Kr] 5s¹" },
    38: { name: "Strontium", mass: "87.62 u", config: "[Kr] 5s²" },
    39: { name: "Yttrium", mass: "88.906 u", config: "[Kr] 4d¹ 5s²" },
    40: { name: "Zirconium", mass: "91.224 u", config: "[Kr] 4d² 5s²" },
    41: { name: "Niobium", mass: "92.906 u", config: "[Kr] 4d⁴ 5s¹" },
    42: { name: "Molybdenum", mass: "95.95 u", config: "[Kr] 4d⁵ 5s¹" },
    43: { name: "Technetium", mass: "(98) u", config: "[Kr] 4d⁵ 5s²" },
    44: { name: "Ruthenium", mass: "101.07 u", config: "[Kr] 4d⁷ 5s¹" },
    45: { name: "Rhodium", mass: "102.91 u", config: "[Kr] 4d⁸ 5s¹" },
    46: { name: "Palladium", mass: "106.42 u", config: "[Kr] 4d¹⁰" },
    47: { name: "Silver", mass: "107.87 u", config: "[Kr] 4d¹⁰ 5s¹" },
    48: { name: "Cadmium", mass: "112.41 u", config: "[Kr] 4d¹⁰ 5s²" },
    49: { name: "Indium", mass: "114.82 u", config: "[Kr] 4d¹⁰ 5s² 5p¹" },
    50: { name: "Tin", mass: "118.71 u", config: "[Kr] 4d¹⁰ 5s² 5p²" },
    51: { name: "Antimony", mass: "121.76 u", config: "[Kr] 4d¹⁰ 5s² 5p³" },
    52: { name: "Tellurium", mass: "127.60 u", config: "[Kr] 4d¹⁰ 5s² 5p⁴" },
    53: { name: "Iodine", mass: "126.90 u", config: "[Kr] 4d¹⁰ 5s² 5p⁵" },
    54: { name: "Xenon", mass: "131.29 u", config: "[Kr] 4d¹⁰ 5s² 5p⁶" },
    55: { name: "Caesium", mass: "132.91 u", config: "[Xe] 6s¹" }
});
/**
 * Core Logic Architecture Module — app.js (Part 3 of 5)
 * Element Database Index Registry: 56 to 85
 */
Object.assign(elementDatabase, {
    56: { name: "Barium", mass: "137.33 u", config: "[Xe] 6s²" },
    57: { name: "Lanthanum", mass: "138.91 u", config: "[Xe] 5d¹ 6s²" },
    58: { name: "Cerium", mass: "140.12 u", config: "[Xe] 4f¹ 5d¹ 6s²" },
    59: { name: "Praseodymium", mass: "140.91 u", config: "[Xe] 4f³ 6s²" },
    60: { name: "Neodymium", mass: "144.24 u", config: "[Xe] 4f⁴ 6s²" },
    61: { name: "Promethium", mass: "(145) u", config: "[Xe] 4f⁵ 6s²" },
    62: { name: "Samarium", mass: "150.36 u", config: "[Xe] 4f⁶ 6s²" },
    63: { name: "Europium", mass: "151.96 u", config: "[Xe] 4f⁷ 6s²" },
    64: { name: "Gadolinium", mass: "157.25 u", config: "[Xe] 4f⁷ 5d¹ 6s²" },
    65: { name: "Terbium", mass: "158.93 u", config: "[Xe] 4f⁹ 6s²" },
    66: { name: "Dysprosium", mass: "162.50 u", config: "[Xe] 4f¹⁰ 6s²" },
    67: { name: "Holmium", mass: "164.93 u", config: "[Xe] 4f¹¹ 6s²" },
    68: { name: "Erbium", mass: "167.26 u", config: "[Xe] 4f¹² 6s²" },
    69: { name: "Thulium", mass: "168.93 u", config: "[Xe] 4f¹³ 6s²" },
    70: { name: "Ytterbium", mass: "173.05 u", config: "[Xe] 4f¹⁴ 6s²" },
    71: { name: "Lutetium", mass: "174.97 u", config: "[Xe] 4f¹⁴ 5d¹ 6s²" },
    72: { name: "Hafnium", mass: "178.49 u", config: "[Xe] 4f¹⁴ 5d² 6s²" },
    73: { name: "Tantalum", mass: "180.95 u", config: "[Xe] 4f¹⁴ 5d³ 6s²" },
    74: { name: "Tungsten", mass: "183.84 u", config: "[Xe] 4f¹⁴ 5d⁴ 6s²" },
    75: { name: "Rhenium", mass: "186.21 u", config: "[Xe] 4f¹⁴ 5d⁵ 6s²" },
    76: { name: "Osmium", mass: "190.23 u", config: "[Xe] 4f¹⁴ 5d⁶ 6s²" },
    77: { name: "Iridium", mass: "192.22 u", config: "[Xe] 4f¹⁴ 5d⁷ 6s²" },
    78: { name: "Platinum", mass: "195.08 u", config: "[Xe] 4f¹⁴ 5d⁹ 6s¹" },
    79: { name: "Gold", mass: "196.97 u", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹" },
    80: { name: "Mercury", mass: "200.59 u", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²" },
    81: { name: "Thallium", mass: "204.38 u", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹" },
    82: { name: "Lead", mass: "207.2 u", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²" },
    83: { name: "Bismuth", mass: "208.98 u", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³" },
    84: { name: "Polonium", mass: "(209) u", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴" },
    85: { name: "Astatine", mass: "(210) u", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵" }
});
/**
 * Core Logic Architecture Module — app.js (Part 4 of 5)
 * Element Database Index Registry: 86 to 118
 */
Object.assign(elementDatabase, {
    86: { name: "Radon", mass: "(222) u", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶" },
    87: { name: "Francium", mass: "(223) u", config: "[Rn] 7s¹" },
    88: { name: "Radium", mass: "(226) u", config: "[Rn] 7s²" },
    89: { name: "Actinium", mass: "(227) u", config: "[Rn] 6d¹ 7s²" },
    90: { name: "Thorium", mass: "232.04 u", config: "[Rn] 6d² 7s²" },
    91: { name: "Protactinium", mass: "231.04 u", config: "[Rn] 5f² 6d¹ 7s²" },
    92: { name: "Uranium", mass: "238.03 u", config: "[Rn] 5f³ 6d¹ 7s²" },
    93: { name: "Neptunium", mass: "(237) u", config: "[Rn] 5f⁴ 6d¹ 7s²" },
    94: { name: "Plutonium", mass: "(244) u", config: "[Rn] 5f⁶ 7s²" },
    95: { name: "Americium", mass: "(243) u", config: "[Rn] 5f⁷ 7s²" },
    96: { name: "Curium", mass: "(247) u", config: "[Rn] 5f⁷ 6d¹ 7s²" },
    97: { name: "Berkium", mass: "(247) u", config: "[Rn] 5f⁹ 7s²" },
    98: { name: "Californium", mass: "(251) u", config: "[Rn] 5f¹⁰ 7s²" },
    99: { name: "Einsteinium", mass: "(252) u", config: "[Rn] 5f¹¹ 7s²" },
    100: { name: "Fermium", mass: "(257) u", config: "[Rn] 5f¹² 7s²" },
    101: { name: "Mendelevium", mass: "(258) u", config: "[Rn] 5f¹³ 7s²" },
    102: { name: "Nobelium", mass: "(259) u", config: "[Rn] 5f¹⁴ 7s²" },
    103: { name: "Lawrencium", mass: "(266) u", config: "[Rn] 5f¹⁴ 6d¹ 7s²" },
    104: { name: "Rutherfordium", mass: "(267) u", config: "[Rn] 5f¹⁴ 6d² 7s²" },
    105: { name: "Dubnium", mass: "(268) u", config: "[Rn] 5f¹⁴ 6d³ 7s²" },
    106: { name: "Seaborgium", mass: "(269) u", config: "[Rn] 5f¹⁴ 6d⁴ 7s²" },
    107: { name: "Bohrium", mass: "(270) u", config: "[Rn] 5f¹⁴ 6d⁵ 7s²" },
    108: { name: "Hassium", mass: "(269) u", config: "[Rn] 5f¹⁴ 6d⁶ 7s²" },
    109: { name: "Meitnerium", mass: "(278) u", config: "[Rn] 5f¹⁴ 6d⁷ 7s²" },
    110: { name: "Darmstadtium", mass: "(281) u", config: "[Rn] 5f¹⁴ 6d⁸ 7s²" },
    111: { name: "Roentgenium", mass: "(282) u", config: "[Rn] 5f¹⁴ 6d⁹ 7s²" },
    112: { name: "Copernicium", mass: "(285) u", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²" },
    113: { name: "Nihonium", mass: "(286) u", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹" },
    114: { name: "Flerovium", mass: "(289) u", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²" },
    115: { name: "Moscovium", mass: "(290) u", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³" },
    116: { name: "Livermorium", mass: "(293) u", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴" },
    117: { name: "Tennessine", mass: "(294) u", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵" },
    118: { name: "Oganesson", mass: "(294) u", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶" }
});
/**
 * Core Logic Architecture Module — app.js (Part 5 of 5)
 * Alloy Datasets, Active CV Engine Handlers & Viewport Event Triggers
 */
const alloyDatabase = {
    'steel_glass': { name: "Stainless Steel Glass", type: "Alloy (Metallic Solution)", formula: "Fe (74%) + Cr (18%) + Ni (8%) + C (0.1%)", elements:, boxSize: "190px" },
    'brass_valve': { name: "Brass Hardware Valve", type: "Alloy (Metallic Solution)", formula: "Cu (65%) + Zn (35%)", elements:, boxSize: "160px" },
    'bronze_coin': { name: "Ancient Bronze Coin", type: "Alloy (Metallic Solution)", formula: "Cu (88%) + Sn (50%) [Trace Matrix]", elements:, boxSize: "120px" }
};

// MODULE 1 HANDLING CONTROLLER: COMPUTER VISION REAL-TIME OVERLAY VIEWPORT
function simulateCVScan(targetKey) {
    const dataRecord = alloyDatabase[targetKey];
    if (!dataRecord) return;

    const bbox = document.getElementById('cv-bounding-box');
    if (bbox) {
        bbox.style.opacity = "1";
        bbox.style.width = dataRecord.boxSize;
        bbox.style.height = dataRecord.boxSize;
        bbox.style.borderColor = "var(--accent)";
    }

    // Flash highlights over all matrix component cells within the inline periodic grid
    document.querySelectorAll('.element-node').forEach(node => node.classList.remove('active-highlight'));
    
    setTimeout(() => {
        const readout = document.getElementById('cv-telemetry-readout');
        if (readout) readout.style.display = "block";
        
        document.getElementById('tel-object-name').innerText = `Detected Matrix: ${dataRecord.name}`;
        document.getElementById('tel-class-type').innerText = dataRecord.type;
        document.getElementById('tel-formula-map').innerText = dataRecord.formula;

        dataRecord.elements.forEach(atomicNo => {
            const targetNode = document.querySelector(`.element-node[data-atomic='${atomicNo}']`);
            if (targetNode) targetNode.classList.add('active-highlight');
        });
    }, 800);
}

// MODULE 2 HANDLING CONTROLLER: INTERACTIVE IN-WEB PERIODIC matrix CELL HANDSHAKE
function focusElementNode(atomicNumber) {
    const item = elementDatabase[atomicNumber];
    if (!item) return;

    document.querySelectorAll('.element-node').forEach(node => node.classList.remove('active-highlight'));
    const targetNode = document.querySelector(`.element-node[data-atomic='${atomicNumber}']`);
    if (targetNode) targetNode.classList.add('active-highlight');

    const inspector = document.getElementById('inspector-readout-panel');
    if (inspector) inspector.style.display = "block";
    
    document.getElementById('ins-element-name').innerText = `Element Selected: ${item.name}`;
    document.getElementById('ins-atomic-no').innerText = atomicNumber;
    document.getElementById('ins-atomic-mass').innerText = item.mass;
    document.getElementById('ins-config').innerText = item.config;

    const passportLink = document.getElementById('ins-passport-link');
    if (passportLink) passportLink.href = `https://rsc.org{atomicNumber}`;
}
