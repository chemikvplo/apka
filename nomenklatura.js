// ============================================================================
// POLSKI SILNIK NOMENKLATURY CHEMICZNEJ (NIEORGANICZNEJ, KOMPLEKSOWEJ I ORGANICZNEJ)
// ============================================================================

const ROMAN = {
    "-4": "-IV", "-3": "-III", "-2": "-II", "-1": "-I",
    "0": "0", "1": "I", "2": "II", "3": "III", "4": "IV",
    "5": "V", "6": "VI", "7": "VII", "8": "VIII"
};

const GREEK_PREFIX = {
    1: "", 2: "di", 3: "tri", 4: "tetra", 5: "penta",
    6: "heksa", 7: "hepta", 8: "okta", 9: "nona", 10: "deka", 12: "dodeka"
};

// Pierwiastki o STAŁEJ wartościowości w związkach (nie piszemy dla nich cyfr rzymskich)
const FIXED_VALENCE_ELEMENTS = new Set([
    "Li", "Na", "K", "Rb", "Cs", "Fr",
    "Be", "Mg", "Ca", "Sr", "Ba", "Ra",
    "Al", "Ga", "In", "Sc", "Y", "La", "Ac",
    "Zn", "Cd", "Ag", "B", "F"
]);

// Stałe stopnie utlenienia tych pierwiastków (do obliczeń matematycznych)
const KNOWN_FIXED_OX = {
    "Li": 1, "Na": 1, "K": 1, "Rb": 1, "Cs": 1, "Fr": 1, "Ag": 1,
    "Be": 2, "Mg": 2, "Ca": 2, "Sr": 2, "Ba": 2, "Ra": 2, "Zn": 2, "Cd": 2,
    "Al": 3, "Ga": 3, "In": 3, "Sc": 3, "Y": 3, "La": 3, "B": 3
};

// Pełna baza pierwiastków (Mianownik, Dopełniacz, Rdzeń anionu kompleksowego, Rdzeń kwasu/oksoanionu)
const ELEMENTS = {
    "H":  { nom: "wodór", gen: "wodoru", comp: "hydrydo", oxo: "wodor" },
    "Li": { nom: "lit", gen: "litu", comp: "litow", oxo: "lit" },
    "Na": { nom: "sód", gen: "sodu", comp: "sodow", oxo: "sod" },
    "K":  { nom: "potas", gen: "potasu", comp: "potasow", oxo: "potas" },
    "Rb": { nom: "rubid", gen: "rubidu", comp: "rubidow", oxo: "rubid" },
    "Cs": { nom: "cez", gen: "cezu", comp: "cezow", oxo: "cez" },
    "Fr": { nom: "frans", gen: "fransu", comp: "fransow", oxo: "frans" },
    "Be": { nom: "beryl", gen: "berylu", comp: "berylan", oxo: "berylan" },
    "Mg": { nom: "magnez", gen: "magnezu", comp: "magnezjan", oxo: "magnezjan" },
    "Ca": { nom: "wapń", gen: "wapnia", comp: "wapnian", oxo: "wapnian" },
    "Sr": { nom: "stront", gen: "strontu", comp: "stroncjan", oxo: "stroncjan" },
    "Ba": { nom: "bar", gen: "baru", comp: "baran", oxo: "baran" },
    "Ra": { nom: "rad", gen: "radu", comp: "radan", oxo: "radan" },
    "B":  { nom: "bor", gen: "boru", comp: "boran", oxo: "boran", acid: "borowy" },
    "Al": { nom: "glin", gen: "glinu", comp: "glinian", oxo: "glinian", acid: "glinowy" },
    "Ga": { nom: "gal", gen: "galu", comp: "galan", oxo: "galan" },
    "In": { nom: "ind", gen: "indu", comp: "indzian", oxo: "indzian" },
    "Tl": { nom: "tal", gen: "talu", comp: "talan", oxo: "talan" },
    "C":  { nom: "węgiel", gen: "węgla", comp: "karbonyl", oxo: "węglan", acid: "węglowy" },
    "Si": { nom: "krzem", gen: "krzemu", comp: "krzemian", oxo: "krzemian", acid: "krzemowy" },
    "Ge": { nom: "german", gen: "germanu", comp: "germanian", oxo: "germanian", acid: "germanowy" },
    "Sn": { nom: "cyna", gen: "cyny", comp: "cynian", oxo: "cynian", acid: "cynowy" },
    "Pb": { nom: "ołów", gen: "ołowiu", comp: "ołowian", oxo: "ołowian", acid: "ołowiowy" },
    "N":  { nom: "azot", gen: "azotu", comp: "azotan", oxo: "azotan", acid: "azotowy" },
    "P":  { nom: "fosfor", gen: "fosforu", comp: "fosforan", oxo: "fosforan", acid: "fosforowy" },
    "As": { nom: "arsen", gen: "arsenu", comp: "arsenian", oxo: "arsenian", acid: "arsenowy" },
    "Sb": { nom: "antymon", gen: "antymonu", comp: "antymonian", oxo: "antymonian", acid: "antymonowy" },
    "Bi": { nom: "bizmut", gen: "bizmutu", comp: "bizmutan", oxo: "bizmutan", acid: "bizmutowy" },
    "O":  { nom: "tlen", gen: "tlenu", comp: "okso", oxo: "tlenek" },
    "S":  { nom: "siarka", gen: "siarki", comp: "siarczan", oxo: "siarczan", acid: "siarkowy" },
    "Se": { nom: "selen", gen: "selenu", comp: "selenian", oxo: "selenian", acid: "selenowy" },
    "Te": { nom: "tellur", gen: "telluru", comp: "telluran", oxo: "telluran", acid: "tellurowy" },
    "Po": { nom: "polon", gen: "polonu", comp: "polonian", oxo: "polonian" },
    "F":  { nom: "fluor", gen: "fluoru", comp: "fluorek", oxo: "fluoran", acid: "fluorowy" },
    "Cl": { nom: "chlor", gen: "chloru", comp: "chloran", oxo: "chloran", acid: "chlorowy" },
    "Br": { nom: "brom", gen: "bromu", comp: "broman", oxo: "broman", acid: "bromowy" },
    "I":  { nom: "jod", gen: "jodu", comp: "jodan", oxo: "jodan", acid: "jodowy" },
    "At": { nom: "astat", gen: "astatu", comp: "astatan", oxo: "astatan" },
    "Sc": { nom: "skand", gen: "skandu", comp: "skandan", oxo: "skandan" },
    "Y":  { nom: "itr", gen: "itru", comp: "itran", oxo: "itran" },
    "La": { nom: "lantan", gen: "lantanu", comp: "lantanian", oxo: "lantanian" },
    "Ac": { nom: "aktyn", gen: "aktynu", comp: "aktynian", oxo: "aktynian" },
    "Ti": { nom: "tytan", gen: "tytanu", comp: "tytanian", oxo: "tytanian", acid: "tytanowy" },
    "Zr": { nom: "cyrkon", gen: "cyrkonu", comp: "cyrkonian", oxo: "cyrkonian" },
    "Hf": { nom: "hafn", gen: "hafnu", comp: "hafnian", oxo: "hafnian" },
    "V":  { nom: "wanad", gen: "wanadu", comp: "wanadan", oxo: "wanadan", acid: "wanadowy" },
    "Nb": { nom: "niob", gen: "niobu", comp: "niobian", oxo: "niobian" },
    "Ta": { nom: "tantal", gen: "tantalu", comp: "tantalan", oxo: "tantalan" },
    "Cr": { nom: "chrom", gen: "chromu", comp: "chromian", oxo: "chromian", acid: "chromowy" },
    "Mo": { nom: "molibden", gen: "molibdenu", comp: "molibdenian", oxo: "molibdenian", acid: "molibdenowy" },
    "W":  { nom: "wolfram", gen: "wolframu", comp: "wolframian", oxo: "wolframian", acid: "wolframowy" },
    "Mn": { nom: "mangan", gen: "manganu", comp: "manganian", oxo: "manganian", acid: "manganowy" },
    "Tc": { nom: "technet", gen: "technetu", comp: "technecian", oxo: "technecian", acid: "technetowy" },
    "Re": { nom: "ren", gen: "renu", comp: "renian", oxo: "renian", acid: "renowy" },
    "Fe": { nom: "żelazo", gen: "żelaza", comp: "żelazian", oxo: "żelazian", acid: "żelazowy" },
    "Ru": { nom: "ruten", gen: "rutenu", comp: "rutenian", oxo: "rutenian" },
    "Os": { nom: "osm", gen: "osmu", comp: "osmian", oxo: "osmian" },
    "Co": { nom: "kobalt", gen: "kobaltu", comp: "kobaltan", oxo: "kobaltan" },
    "Rh": { nom: "rod", gen: "rodu", comp: "rodzian", oxo: "rodzian" },
    "Ir": { nom: "iryd", gen: "irydu", comp: "irydzian", oxo: "irydzian" },
    "Ni": { nom: "nikiel", gen: "niklu", comp: "niklan", oxo: "niklan" },
    "Pd": { nom: "pallad", gen: "palladu", comp: "palladan", oxo: "palladan" },
    "Pt": { nom: "platyna", gen: "platyny", comp: "platynian", oxo: "platynian", acid: "platynowy" },
    "Cu": { nom: "miedź", gen: "miedzi", comp: "miedzian", oxo: "miedzian" },
    "Ag": { nom: "srebro", gen: "srebra", comp: "srebrzan", oxo: "srebrzan" },
    "Au": { nom: "złoto", gen: "złota", comp: "złocian", oxo: "złocian", acid: "złotowy" },
    "Zn": { nom: "cynk", gen: "cynku", comp: "cynkan", oxo: "cynkan" },
    "Cd": { nom: "kadm", gen: "kadmu", comp: "kadmian", oxo: "kadmian" },
    "Hg": { nom: "rtęć", gen: "rtęci", comp: "rtęcian", oxo: "rtęcian" },
    "Ce": { nom: "cer", gen: "ceru", comp: "ceran", oxo: "ceran" },
    "Th": { nom: "tor", gen: "toru", comp: "toran", oxo: "toran" },
    "U":  { nom: "uran", gen: "uranu", comp: "uranian", oxo: "uranian" },
    "Xe": { nom: "ksenon", gen: "ksenonu", comp: "ksenonian", oxo: "ksenonian", acid: "ksenonowy" }
};

// Pełna baza anionów (nazwa polska + ładunek elektryczny)
const ANIONS = {
    // Beztlenowe i pseudohalogenki
    "F":   { name: "fluorek", charge: -1 },
    "Cl":  { name: "chlorek", charge: -1 },
    "Br":  { name: "bromek", charge: -1 },
    "I":   { name: "jodek", charge: -1 },
    "CN":  { name: "cyjanek", charge: -1 },
    "SCN": { name: "tiocyjanian", charge: -1 },
    "NCS": { name: "izotiocyjanian", charge: -1 },
    "OCN": { name: "cyjanian", charge: -1 },
    "N3":  { name: "azydek", charge: -1 },
    "OH":  { name: "wodorotlenek", charge: -1 },
    "HS":  { name: "wodorosiarczek", charge: -1 },
    "HSe": { name: "wodoroselenek", charge: -1 },
    "H":   { name: "wodorek", charge: -1 },
    "S":   { name: "siarczek", charge: -2 },
    "Se":  { name: "selenek", charge: -2 },
    "Te":  { name: "tellurek", charge: -2 },
    "N":   { name: "azotek", charge: -3 },
    "P":   { name: "fosforek", charge: -3 },
    "As":  { name: "arsenek", charge: -3 },
    "Sb":  { name: "antymonek", charge: -3 },
    "C":   { name: "węglik", charge: -4 },
    "Si":  { name: "krzemek", charge: -4 },
    "B":   { name: "borek", charge: -3 },

    // Tlenowe - chlorowce
    "ClO":  { name: "chloran(I)", charge: -1 },
    "ClO2": { name: "chloran(III)", charge: -1 },
    "ClO3": { name: "chloran(V)", charge: -1 },
    "ClO4": { name: "chloran(VII)", charge: -1 },
    "BrO":  { name: "broman(I)", charge: -1 },
    "BrO2": { name: "broman(III)", charge: -1 },
    "BrO3": { name: "broman(V)", charge: -1 },
    "BrO4": { name: "broman(VII)", charge: -1 },
    "IO":   { name: "jodan(I)", charge: -1 },
    "IO2":  { name: "jodan(III)", charge: -1 },
    "IO3":  { name: "jodan(V)", charge: -1 },
    "IO4":  { name: "tetrooksojodan(VII)", charge: -1 },
    "IO6":  { name: "heksaoksojodan(VII)", charge: -5 },

    // Tlenowe - siarka, selen, tellur
    "SO4":   { name: "siarczan(VI)", charge: -2 },
    "SO3":   { name: "siarczan(IV)", charge: -2 },
    "S2O3":  { name: "tiosiarczan(VI)", charge: -2 },
    "S2O4":  { name: "ditionian(III)", charge: -2 },
    "S2O5":  { name: "disiarczan(IV)", charge: -2 },
    "S2O6":  { name: "ditionian(V)", charge: -2 },
    "S2O7":  { name: "disiarczan(VI)", charge: -2 },
    "S2O8":  { name: "peroksodisiarczan(VI)", charge: -2 },
    "S4O6":  { name: "tetrationian", charge: -2 },
    "HSO4":  { name: "wodorosiarczan(VI)", charge: -1 },
    "HSO3":  { name: "wodorosiarczan(IV)", charge: -1 },
    "SeO4":  { name: "selenian(VI)", charge: -2 },
    "SeO3":  { name: "selenian(IV)", charge: -2 },
    "HSeO4": { name: "wodoroselenian(VI)", charge: -1 },
    "TeO4":  { name: "telluran(VI)", charge: -2 },
    "TeO3":  { name: "telluran(IV)", charge: -2 },

    // Tlenowe - azot, fosfor, arsen, antymon, bizmut
    "NO3":    { name: "azotan(V)", charge: -1 },
    "NO2":    { name: "azotan(III)", charge: -1 },
    "PO4":    { name: "fosforan(V)", charge: -3 },
    "HPO4":   { name: "wodorofosforan(V)", charge: -2 },
    "H2PO4":  { name: "diwodorofosforan(V)", charge: -1 },
    "P2O7":   { name: "difosforan(V)", charge: -4 },
    "HP2O7":  { name: "wodorodifosforan(V)", charge: -3 },
    "H2P2O7": { name: "diwodorodifosforan(V)", charge: -2 },
    "PO3":    { name: "metafosforan(V)", charge: -1 },
    "HPO3":   { name: "fosforan(III)", charge: -2 },
    "H2PO3":  { name: "wodorofosforan(III)", charge: -1 },
    "H2PO2":  { name: "fosforan(I)", charge: -1 },
    "AsO4":   { name: "arsenian(V)", charge: -3 },
    "HAsO4":  { name: "wodoroarsenian(V)", charge: -2 },
    "H2AsO4": { name: "diwodoroarsenian(V)", charge: -1 },
    "AsO3":   { name: "arsenian(III)", charge: -3 },
    "AsO2":   { name: "metaarsenian(III)", charge: -1 },
    "SbO4":   { name: "antymonian(V)", charge: -3 },
    "SbO3":   { name: "antymonian(III)", charge: -3 },
    "BiO3":   { name: "bizmutan(V)", charge: -1 },

    // Tlenowe - węgiel, krzem, bor, kwasy organiczne
    "CO3":     { name: "węglan", charge: -2 },
    "HCO3":    { name: "wodorowęglan", charge: -1 },
    "C2O4":    { name: "szczawian", charge: -2 },
    "HC2O4":   { name: "wodoroszczawian", charge: -1 },
    "CH3COO":  { name: "octan", charge: -1 },
    "C2H3O2":  { name: "octan", charge: -1 },
    "HCOO":    { name: "mrówczan", charge: -1 },
    "CHO2":    { name: "mrówczan", charge: -1 },
    "C6H5COO": { name: "benzoesan", charge: -1 },
    "C3H5O3":  { name: "mleczan", charge: -1 },
    "C4H4O6":  { name: "winian", charge: -2 },
    "C6H5O7":  { name: "cytrynian", charge: -3 },
    "SiO3":    { name: "metakrzemian", charge: -2 },
    "SiO4":    { name: "ortokrzemian", charge: -4 },
    "Si2O5":   { name: "dikrzemian", charge: -2 },
    "BO3":     { name: "ortoboran", charge: -3 },
    "BO2":     { name: "metaboran", charge: -1 },
    "B4O7":    { name: "tetraboran", charge: -2 },

    // Tlenowe - metale przejściowe i amfoteryczne
    "CrO4":  { name: "chromian(VI)", charge: -2 },
    "Cr2O7": { name: "dichromian(VI)", charge: -2 },
    "CrO2":  { name: "chromian(III)", charge: -1 },
    "MnO4":  { name: "manganian(VII)", charge: -1, altCharge: { "-2": "manganian(VI)", "-3": "manganian(V)" } },
    "FeO4":  { name: "żelazian(VI)", charge: -2 },
    "FeO2":  { name: "żelazian(III)", charge: -1 },
    "AlO2":  { name: "glinian", charge: -1 },
    "AlO3":  { name: "ortoglinian", charge: -3 },
    "ZnO2":  { name: "cynkan", charge: -2 },
    "PbO2":  { name: "ołowian(II)", charge: -2 },
    "PbO3":  { name: "metabizmutan/ołowian(IV)", charge: -2, customName: "ołowian(IV)" },
    "PbO4":  { name: "ortoołowian(IV)", charge: -4 },
    "SnO2":  { name: "cynian(II)", charge: -2 },
    "SnO3":  { name: "cynian(IV)", charge: -2 },
    "MoO4":  { name: "molibdenian(VI)", charge: -2 },
    "WO4":   { name: "wolframian(VI)", charge: -2 },
    "VO3":   { name: "wanadan(V)", charge: -1 },
    "VO4":   { name: "ortowanadan(V)", charge: -3 },
    "V2O7":  { name: "diwanadan(V)", charge: -4 },
    "TiO3":  { name: "tytanian(IV)", charge: -2 },
    "ReO4":  { name: "renian(VII)", charge: -1 },
    "TcO4":  { name: "technecian(VII)", charge: -1 },
    "OsO4":  { name: "osmian(VI)", charge: -2 },
    "RuO4":  { name: "rutenian(VI)", charge: -2 }
};

// Baza ligandów do związków kompleksowych
const LIGANDS = {
    "NH3":     { name: "ammina", charge: 0 },
    "H2O":     { name: "akwa", charge: 0 },
    "CO":      { name: "karbonyl", charge: 0 },
    "NO":      { name: "nitrozyl", charge: 0 },
    "en":      { name: "etylenodiamina", charge: 0, complexPrefix: true },
    "py":      { name: "pirydyna", charge: 0 },
    "CN":      { name: "cyjano", charge: -1 },
    "OH":      { name: "hydrokso", charge: -1 },
    "F":       { name: "fluoro", charge: -1 },
    "Cl":      { name: "chloro", charge: -1 },
    "Br":      { name: "bromo", charge: -1 },
    "I":       { name: "jodo", charge: -1 },
    "SCN":     { name: "tiocyjaniano", charge: -1 },
    "NCS":     { name: "izotiocyjaniano", charge: -1 },
    "NO2":     { name: "nitro", charge: -1 },
    "ONO":     { name: "nitrito", charge: -1 },
    "N3":      { name: "azydo", charge: -1 },
    "H":       { name: "hydrydo", charge: -1 },
    "CH3COO":  { name: "acetato", charge: -1 },
    "O":       { name: "okso", charge: -2 },
    "O2":      { name: "perokso", charge: -2 },
    "S":       { name: "tio", charge: -2 },
    "SO4":     { name: "siarczano(VI)-", charge: -2 },
    "S2O3":    { name: "tiosiarczano(VI)-", charge: -2 },
    "CO3":     { name: "węglano", charge: -2 },
    "C2O4":    { name: "szczawiano", charge: -2 },
    "PO4":     { name: "fosforano(V)-", charge: -3 }
};

// Baza wyjątków, kwasów, tlenków mieszanych, nadtlenków, wodorków i dimerów
const SPECIAL_COMPOUNDS = {
    "H2O": "Woda (tlenek wodoru)",
    "D2O": "Ciężka woda (tlenek deuteru)",
    "T2O": "Superciężka woda (tlenek trytu)",
    "H2O2": "Nadtlenek wodoru",
    "NH3": "Amoniak (azotek triwodoru)",
    "N2H4": "Hydrazyna (diazan)",
    "NH2OH": "Hydroksyloamina",
    "HN3": "Kwas azotowodorowy (azydek wodoru)",
    "PH3": "Fosforowodór (fosfina)",
    "P2H4": "Difosfina",
    "AsH3": "Arsenowodór (arsyna)",
    "SbH3": "Antymonowodór (stybina)",
    "BiH3": "Bizmutowodór (bizmutyna)",
    "CH4": "Metan",
    "SiH4": "Silan (krzemowodór)",
    "GeH4": "German (germanowodór)",
    "SnH4": "Stannan (cynowodór)",
    "BH3": "Borowodór (boran)",
    "B2H6": "Diboran(6)",
    "HF": "Kwas fluorowodorowy (fluorek wodoru)",
    "HCl": "Kwas chlorowodorowy (kwas solny / chlorek wodoru)",
    "HBr": "Kwas bromowodorowy (bromek wodoru)",
    "HI": "Kwas jodowodorowy (jodek wodoru)",
    "H2S": "Kwas siarkowodorowy (siarczek wodoru)",
    "H2Se": "Kwas selenowodorowy (selenek wodoru)",
    "H2Te": "Kwas tellurowodorowy (tellurek wodoru)",
    "HCN": "Kwas cyjanowodorowy (cyjanek wodoru)",
    "HSCN": "Kwas tiocyjanowy (rodanowodorowy)",
    "HOCN": "Kwas cyjanowy",
    "H2SO4": "Kwas siarkowy(VI)",
    "H2SO3": "Kwas siarkowy(IV)",
    "H2S2O3": "Kwas tiosiarczany(VI) (kwas tiosiarkowy)",
    "H2S2O7": "Kwas disiarkowy(VI) (pirosiarkowy)",
    "H2S2O8": "Kwas peroksodisiarkowy(VI)",
    "H2S2O4": "Kwas ditionawy",
    "H2S2O6": "Kwas ditionowy",
    "HNO3": "Kwas azotowy(V)",
    "HNO2": "Kwas azotowy(III)",
    "H3PO4": "Kwas fosforowy(V) (ortofosforowy)",
    "H4P2O7": "Kwas difosforowy(V) (pirofosforowy)",
    "HPO3": "Kwas metafosforowy(V)",
    "H3PO3": "Kwas fosforowy(III) (fosfonowy)",
    "H3PO2": "Kwas fosforowy(I) (fosfinowy)",
    "H2CO3": "Kwas węglowy",
    "H4SiO4": "Kwas ortokrzemowy",
    "H2SiO3": "Kwas metakrzemowy",
    "H3BO3": "Kwas borowy (ortoborowy)",
    "HBO2": "Kwas metaborowy",
    "H2B4O7": "Kwas tetraborowy",
    "HClO": "Kwas chlorowy(I)",
    "HClO2": "Kwas chlorowy(III)",
    "HClO3": "Kwas chlorowy(V)",
    "HClO4": "Kwas chlorowy(VII)",
    "HBrO": "Kwas bromowy(I)",
    "HBrO2": "Kwas bromowy(III)",
    "HBrO3": "Kwas bromowy(V)",
    "HBrO4": "Kwas bromowy(VII)",
    "HIO": "Kwas jodowy(I)",
    "HIO3": "Kwas jodowy(V)",
    "HIO4": "Kwas tetrooksojodowy(VII) (metajodowy)",
    "H5IO6": "Kwas heksaoksojodowy(VII) (ortojodowy)",
    "H2CrO4": "Kwas chromowy(VI)",
    "H2Cr2O7": "Kwas dichromowy(VI)",
    "HMnO4": "Kwas manganowy(VII) (nadmanganowy)",
    "H2MnO4": "Kwas manganowy(VI)",
    "H3AsO4": "Kwas arsenowy(V)",
    "H3AsO3": "Kwas arsenowy(III)",
    "H2SeO4": "Kwas selenowy(VI)",
    "H2SeO3": "Kwas selenowy(IV)",
    "H2TeO4": "Kwas tellurowy(VI)",
    "H6TeO6": "Kwas ortotellurowy(VI)",
    "H2TeO3": "Kwas tellurowy(IV)",
    "H2MoO4": "Kwas molibdenowy(VI)",
    "H2WO4": "Kwas wolframowy(VI)",
    "HReO4": "Kwas renowy(VII)",
    "HTcO4": "Kwas technetowy(VII)",
    "H2C2O4": "Kwas szczawiowy (etanodiowy)",
    "HCOOH": "Kwas mrówkowy (metanowy)",
    "CH3COOH": "Kwas octowy (etanowy)",
    "Fe3O4": "Tlenek żelaza(II) diżelaza(III) (tlenek żelaza(II,III) / magnetyt)",
    "Pb3O4": "Tlenek diołowiu(II) ołowiu(IV) (tlenek ołowiu(II,IV) / minia ołowiana)",
    "Mn3O4": "Tlenek manganu(II) dimanganu(III) (tlenek manganu(II,III))",
    "Co3O4": "Tlenek kobaltu(II) dikobaltu(III) (tlenek kobaltu(II,III))",
    "U3O8": "Tlenek uranu(IV) diuranu(VI)",
    "Na2O2": "Nadtlenek sodu",
    "K2O2": "Nadtlenek potasu",
    "Li2O2": "Nadtlenek litu",
    "BaO2": "Nadtlenek baru",
    "SrO2": "Nadtlenek strontu",
    "CaO2": "Nadtlenek wapnia",
    "MgO2": "Nadtlenek magnezu",
    "ZnO2": "Nadtlenek cynku",
    "KO2": "Ponadtlenek potasu",
    "RbO2": "Ponadtlenek rubidu",
    "CsO2": "Ponadtlenek cezu",
    "NaO2": "Ponadtlenek sodu",
    "CrO5": "Diperoksotlenek chromu(VI) (nadtlenek chromu(VI))",
    "OF2": "Fluorek tlenu (difluorek tlenu)",
    "O2F2": "Difluorek ditlenu",
    "P4O10": "Tlenek fosforu(V) (dekaoksotetrafosfor)",
    "P2O5": "Tlenek fosforu(V)",
    "P4O6": "Tlenek fosforu(III) (heksaoksotetrafosfor)",
    "P2O3": "Tlenek fosforu(III)",
    "N2O5": "Tlenek azotu(V)",
    "N2O4": "Tlenek azotu(IV) (dimer: tetraoksydiazot)",
    "NO2": "Tlenek azotu(IV)",
    "N2O3": "Tlenek azotu(III)",
    "NO": "Tlenek azotu(II)",
    "N2O": "Tlenek azotu(I)",
    "SO2": "Tlenek siarki(IV)",
    "SO3": "Tlenek siarki(VI)",
    "CO": "Tlenek węgla(II) (czad)",
    "CO2": "Tlenek węgla(IV) (dwutlenek węgla)",
    "CS2": "Disiarczek węgla (siarczek węgla(IV))",
    "SiO2": "Tlenek krzemu(IV) (krzemionka)",
    "SiC": "Węglik krzemu (karborund)",
    "CaC2": "Węglik wapnia (acetylenek wapnia / karbid)",
    "Al4C3": "Węglik glinu (metanek glinu)",
    "FeS2": "Disiarczek żelaza(II) (piryt)",
    "Hg2Cl2": "Chlorek rtęci(I) (kalomel)",
    "Hg2(NO3)2": "Azotan(V) rtęci(I)",
    "Hg2SO4": "Siarczan(VI) rtęci(I)",
    "CaOCl2": "Chlorek chloran(I) wapnia (wapno bielące)",
    "LiAlH4": "Tetrahydrydoglinian litu",
    "NaBH4": "Tetrahydrydoboran sodu",
    "KSCN": "Tiocyjanian potasu (rodanek potasu)",
    "NaSCN": "Tiocyjanian sodu (rodanek sodu)",
    "NH4SCN": "Tiocyjanian amonu (rodanek amonu)",
    "Fe(SCN)3": "Tiocyjanian żelaza(III) (rodanek żelaza(III))",
    "Fe(SCN)2": "Tiocyjanian żelaza(II)"
};

// ============================================================================
// 1. NORMALIZACJA WZORU (POPRAWA INDEKSÓW I WIELKOŚCI LITER)
// ============================================================================
function normalizeFormulaInput(raw) {
    let s = raw.trim().replace(/\s+/g, '');
    const subMap = {'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9'};
    s = s.replace(/[₀-₉]/g, m => subMap[m]);
    s = s.replace(/[·•*]/g, '.');

    // Jeśli użytkownik wpisał wszystko małymi literami (np. "cuso4" lub "[ag(nh3)2]oh"), naprawiamy wielkość liter
    if (s === s.toLowerCase()) {
        const tokens = [
            "nh4", "nh3", "h2o", "ch3coo", "hcoo", "c2o4", "s2o3", "s2o7", "s2o8", "cr2o7",
            "mno4", "cro4", "hpo4", "h2po4", "hco3", "hso4", "hso3", "clo4", "clo3", "clo2", "clo",
            "bro4", "bro3", "bro2", "bro", "io4", "io3", "io", "so4", "so3", "no3", "no2", "po4",
            "co3", "sio3", "sio4", "bo3", "b4o7", "alo2", "zno2", "scn", "ocn", "oh", "cn", "hs",
            "ag", "al", "as", "au", "ba", "be", "bi", "br", "ca", "cd", "ce", "cl", "co", "cr", "cs",
            "cu", "fe", "fr", "ga", "ge", "hf", "hg", "in", "ir", "kr", "la", "li", "mg", "mn", "mo",
            "na", "nb", "ni", "os", "pb", "pd", "po", "pt", "ra", "rb", "re", "rh", "ru", "sb", "sc",
            "se", "si", "sn", "sr", "ta", "tc", "te", "th", "ti", "tl", "xe", "zn", "zr",
            "b", "c", "f", "h", "i", "k", "n", "o", "p", "s", "u", "v", "w", "y"
        ];
        let regex = new RegExp(tokens.join("|"), "gi");
        s = s.replace(regex, match => {
            let low = match.toLowerCase();
            const upperGroups = {
                "nh4":"NH4","nh3":"NH3","h2o":"H2O","ch3coo":"CH3COO","hcoo":"HCOO","c2o4":"C2O4",
                "s2o3":"S2O3","s2o7":"S2O7","s2o8":"S2O8","cr2o7":"Cr2O7","mno4":"MnO4","cro4":"CrO4",
                "hpo4":"HPO4","h2po4":"H2PO4","hco3":"HCO3","hso4":"HSO4","hso3":"HSO3",
                "clo4":"ClO4","clo3":"ClO3","clo2":"ClO2","clo":"ClO",
                "bro4":"BrO4","bro3":"BrO3","bro2":"BrO2","bro":"BrO",
                "io4":"IO4","io3":"IO3","io":"IO",
                "so4":"SO4","so3":"SO3","no3":"NO3","no2":"NO2","po4":"PO4","co3":"CO3",
                "sio3":"SiO3","sio4":"SiO4","bo3":"BO3","b4o7":"B4O7","alo2":"AlO2","zno2":"ZnO2",
                "scn":"SCN","ocn":"OCN","oh":"OH","cn":"CN","hs":"HS"
            };
            if (upperGroups[low]) return upperGroups[low];
            return low.charAt(0).toUpperCase() + low.slice(1);
        });
    }
    return s;
}

// Formatuje kation wraz z rzymskim stopniem utlenienia (jeśli jest zmiennowartościowy)
function formatCationGenitive(symbol, oxState) {
    if (symbol === "NH4") return "amonu";
    if (symbol === "PH4") return "fosfonu";
    if (symbol === "H3O") return "oksoniu";
    if (symbol === "UO2") return "uranylu(VI)";
    const el = ELEMENTS[symbol];
    if (!el) return symbol;
    if (FIXED_VALENCE_ELEMENTS.has(symbol)) {
        return el.gen;
    }
    const rom = ROMAN[String(Math.round(oxState))];
    return rom ? `${el.gen}(${rom})` : el.gen;
}

// ============================================================================
// 2. PARSER ZWIĄZKÓW KOMPLEKSOWYCH (KOORDYNACYJNYCH) - np. [Ag(NH3)2]OH, K4[Fe(CN)6]
// ============================================================================
function parseCoordinationComplex(formula) {
    const match = formula.match(/^([^\[\]]*)\[([^\[\]]+)\](\d*)(.*)$/);
    if (!match) return null;

    const beforePart = match[1];
    const insideBracket = match[2];
    const complexMult = match[3] ? parseInt(match[3], 10) : 1;
    const afterPart = match[4];

    // Wyciągnij atom centralny (pierwszy pierwiastek wewnątrz nawiasu kwadratowego)
    const centralMatch = insideBracket.match(/^([A-Z][a-z]?)(.*)$/);
    if (!centralMatch) return null;
    const centralSymbol = centralMatch[1];
    const ligandsStr = centralMatch[2];
    if (!ELEMENTS[centralSymbol]) return null;

    // Tokenizacja ligandów wewnątrz [...]
    let ligandsList = [];
    let totalLigandCharge = 0;
    let rem = ligandsStr;

    while (rem.length > 0) {
        let mParen = rem.match(/^\(([A-Za-z0-9]+)\)(\d*)/);
        if (mParen) {
            let ligSym = mParen[1];
            let count = mParen[2] ? parseInt(mParen[2], 10) : 1;
            let ligObj = LIGANDS[ligSym];
            if (!ligObj) return null;
            ligandsList.push({ sym: ligSym, name: ligObj.name, count: count, complexPrefix: ligObj.complexPrefix });
            totalLigandCharge += count * ligObj.charge;
            rem = rem.slice(mParen[0].length);
            continue;
        }
        // Bez nawiasów (np. Cl2, CN, OH, CO, H4)
        let matchedLig = null;
        const ligKeys = Object.keys(LIGANDS).sort((a, b) => b.length - a.length);
        for (let key of ligKeys) {
            let regex = new RegExp(`^(${key})(\\d*)`);
            let mPlain = rem.match(regex);
            if (mPlain) {
                matchedLig = key;
                let count = mPlain[2] ? parseInt(mPlain[2], 10) : 1;
                let ligObj = LIGANDS[key];
                ligandsList.push({ sym: key, name: ligObj.name, count: count, complexPrefix: ligObj.complexPrefix });
                totalLigandCharge += count * ligObj.charge;
                rem = rem.slice(mPlain[0].length);
                break;
            }
        }
        if (!matchedLig) return null;
    }

    // Zbuduj człon ligandowy (posortowany alfabetycznie po nazwie ligandu)
    ligandsList.sort((a, b) => a.name.localeCompare(b.name, 'pl'));
    const complexMultPrefixes = { 1: "", 2: "bis", 3: "tris", 4: "tetrakis", 5: "pentakis", 6: "heksakis" };
    let ligandsText = ligandsList.map(l => {
        if (l.complexPrefix && l.count > 1) {
            return `${complexMultPrefixes[l.count] || GREEK_PREFIX[l.count]}(${l.name})`;
        }
        let pref = GREEK_PREFIX[l.count] || "";
        return pref + l.name;
    }).join("");

    // PRZYPADEK A: Kompleks jest ANIONEM (przed nawiasem kwadratowym stoi kation, np. K4[Fe(CN)6], Na2[Zn(OH)4], H2[PtCl6])
    if (beforePart.length > 0 && afterPart.length === 0) {
        let catSym = "";
        let catCount = 1;
        let mNH4 = beforePart.match(/^\(NH4\)(\d+)$/) || (beforePart === "NH4" ? ["NH4", "1"] : null);
        if (mNH4) {
            catSym = "NH4";
            catCount = parseInt(mNH4[1], 10);
        } else {
            let mCat = beforePart.match(/^([A-Z][a-z]?)(\d*)$/);
            if (!mCat) return null;
            catSym = mCat[1];
            catCount = mCat[2] ? parseInt(mCat[2], 10) : 1;
        }

        let catOx = catSym === "NH4" ? 1 : (catSym === "H" ? 1 : (KNOWN_FIXED_OX[catSym] || 1));
        let totalPosCharge = catCount * catOx;
        let complexCharge = -(totalPosCharge / complexMult);
        let centralOx = Math.round(complexCharge - totalLigandCharge);

        let centralAnionRoot = ELEMENTS[centralSymbol].comp;
        let oxStr = FIXED_VALENCE_ELEMENTS.has(centralSymbol) ? "" : `(${ROMAN[String(centralOx)] || centralOx})`;
        let catGen = formatCationGenitive(catSym, catOx);

        let fullComplexName = `${ligandsText}${centralAnionRoot}${oxStr} ${catGen}`;
        if (catSym === "H") {
            let acidRoot = ELEMENTS[centralSymbol].acid || (centralAnionRoot + "owy");
            fullComplexName += ` (kwas ${ligandsText}${acidRoot}${oxStr})`;
        }
        return capitalizeFirst(fullComplexName);
    }

    // PRZYPADEK B: Kompleks jest KATIONEM (po nawiasie kwadratowym stoi anion, np. [Ag(NH3)2]OH, [Cu(NH3)4]SO4, [Cr(H2O)4Cl2]Cl)
    if (afterPart.length > 0 && beforePart.length === 0) {
        let anSym = "";
        let anCount = 1;
        let mParenAn = afterPart.match(/^\(([A-Za-z0-9]+)\)(\d+)$/);
        if (mParenAn) {
            anSym = mParenAn[1];
            anCount = parseInt(mParenAn[2], 10);
        } else {
            // Sprawdź znane aniony od najdłuższego
            const anKeys = Object.keys(ANIONS).sort((a, b) => b.length - a.length);
            for (let k of anKeys) {
                let r = new RegExp(`^(${k})(\\d*)$`);
                let m = afterPart.match(r);
                if (m) {
                    anSym = m[1];
                    anCount = m[2] ? parseInt(m[2], 10) : 1;
                    break;
                }
            }
        }
        if (!anSym || !ANIONS[anSym]) return null;

        let anObj = ANIONS[anSym];
        let totalNegCharge = anCount * anObj.charge; // np. -1 lub -2
        let complexCharge = Math.abs(totalNegCharge) / complexMult;
        let centralOx = Math.round(complexCharge - totalLigandCharge);

        let centralGen = ELEMENTS[centralSymbol].gen;
        // W kationach kompleksowych (np. diamminasrebra(I), heksaakwaglinu(III)) w polskiej nomenklaturze podaje się stopień utlenienia:
        let oxStr = `(${ROMAN[String(centralOx)] || centralOx})`;

        return capitalizeFirst(`${anObj.name} ${ligandsText}${centralGen}${oxStr}`);
    }

    // PRZYPADEK C: Kompleks OBOJĘTNY (np. [Pt(NH3)2Cl2], [Ni(CO)4], [Fe(CO)5])
    if (beforePart.length === 0 && afterPart.length === 0) {
        let centralOx = Math.round(0 - totalLigandCharge);
        let oxStr = `(${ROMAN[String(centralOx)] || centralOx})`;
        // Specjalny przypadek dla karbonylków obojętnych
        if (ligandsList.length === 1 && ligandsList[0].sym === "CO") {
            let pref = GREEK_PREFIX[ligandsList[0].count] || "";
            return capitalizeFirst(`${pref}karbonylek ${ELEMENTS[centralSymbol].gen}${oxStr}`);
        }
        return capitalizeFirst(`${ligandsText}${ELEMENTS[centralSymbol].nom}${oxStr}`);
    }

    return null;
}

// ============================================================================
// 3. PARSER ZWIĄZKÓW NIEORGANICZNYCH (SOLE, KWASY, TLENKI, WODOROTLENKI, HYDRATY)
// ============================================================================
function parseInorganicFormulaLocal(rawInput) {
    let formula = normalizeFormulaInput(rawInput);

    // 0. Obsługa hydratów (np. CuSO4.5H2O)
    if (formula.includes('.')) {
        let parts = formula.split('.');
        if (parts.length === 2) {
            let mHyd = parts[1].match(/^(\d*)H2O$/i);
            if (mHyd) {
                let n = mHyd[1] ? parseInt(mHyd[1], 10) : 1;
                let baseName = parseInorganicFormulaLocal(parts[0]);
                if (baseName) {
                    let hPref = GREEK_PREFIX[n] || `${n}-`;
                    if (n === 1) hPref = "mono";
                    return `${baseName} — woda (1/${n}) (${hPref}hydrat)`;
                }
            }
        }
    }

    // 1. Sprawdzenie tablicy związków specjalnych / kwasów / tlenków mieszanych
    if (SPECIAL_COMPOUNDS[formula]) {
        return SPECIAL_COMPOUNDS[formula];
    }

    // 2. Sprawdzenie związków kompleksowych z nawiasami kwadratowymi [...]
    if (formula.includes('[') && formula.includes(']')) {
        let compName = parseCoordinationComplex(formula);
        if (compName) return compName;
    }

    // 3. Sole kwasów organicznych zapisane od strony reszty kwasowej (np. CH3COONa, (CH3COO)2Pb, (HCOO)2Ca)
    const orgAcidPrefixes = [
        { key: "CH3COO", name: "octan", alt: "etanoanian", charge: -1 },
        { key: "HCOO", name: "mrówczan", alt: "metanoanian", charge: -1 },
        { key: "C6H5COO", name: "benzoesan", alt: "", charge: -1 },
        { key: "C6H5O", name: "fenolan", alt: "", charge: -1 },
        { key: "CH3O", name: "metanolan", alt: "", charge: -1 },
        { key: "C2H5O", name: "etanolan", alt: "", charge: -1 }
    ];
    for (let oa of orgAcidPrefixes) {
        let r1 = new RegExp(`^\\(${oa.key}\\)(\\d+)([A-Z][a-z]?)(\\d*)$`);
        let m1 = formula.match(r1);
        if (m1) {
            let anCount = parseInt(m1[1], 10);
            let catSym = m1[2];
            let catCount = m1[3] ? parseInt(m1[3], 10) : 1;
            let ox = (anCount * Math.abs(oa.charge)) / catCount;
            let catGen = formatCationGenitive(catSym, ox);
            return capitalizeFirst(`${oa.name} ${catGen}` + (oa.alt ? ` (${oa.alt} ${catGen})` : ""));
        }
        let r2 = new RegExp(`^${oa.key}([A-Z][a-z]?|NH4)$`);
        let m2 = formula.match(r2);
        if (m2) {
            let catSym = m2[1];
            let catGen = formatCationGenitive(catSym, 1);
            return capitalizeFirst(`${oa.name} ${catGen}` + (oa.alt ? ` (${oa.alt} ${catGen})` : ""));
        }
    }

    // 4. Hydroksosole (np. (CuOH)2CO3, Cu2(OH)2CO3, Mg(OH)Cl, Al(OH)Cl2, Al(OH)2Cl)
    let mBasic1 = formula.match(/^\(([A-Z][a-z]?)(\(OH\)\d*|OH)\)(\d+)([A-Za-z0-9]+)$/);
    if (mBasic1) {
        let catSym = mBasic1[1];
        let ohPart = mBasic1[2];
        let groupMult = parseInt(mBasic1[3], 10);
        let anSym = mBasic1[4];
        let ohInGroup = ohPart === "OH" ? 1 : parseInt(ohPart.replace(/\D/g, ''), 10);
        if (ANIONS[anSym] && ELEMENTS[catSym]) {
            let totalOH = ohInGroup * groupMult;
            let ox = (totalOH * 1 + Math.abs(ANIONS[anSym].charge)) / groupMult;
            let ohPref = GREEK_PREFIX[totalOH] || "";
            return capitalizeFirst(`${ANIONS[anSym].name} ${ohPref}hydrokso${ formatCationGenitive(catSym, ox) }`);
        }
    }
    let mBasic2 = formula.match(/^([A-Z][a-z]?)(\d*)\(OH\)(\d*)([A-Za-z0-9\(\)]+)$/);
    if (mBasic2 && mBasic2[4]) {
        let catSym = mBasic2[1];
        let catCount = mBasic2[2] ? parseInt(mBasic2[2], 10) : 1;
        let ohCount = mBasic2[3] ? parseInt(mBasic2[3], 10) : 1;
        let anPart = mBasic2[4];
        let anSym = anPart;
        let anCount = 1;
        let mAn = anPart.match(/^([A-Za-z]+)(\d+)$/);
        if (mAn && ANIONS[mAn[1]]) {
            anSym = mAn[1];
            anCount = parseInt(mAn[2], 10);
        }
        if (ANIONS[anSym] && ELEMENTS[catSym]) {
            let ox = (ohCount * 1 + anCount * Math.abs(ANIONS[anSym].charge)) / catCount;
            let ohPref = GREEK_PREFIX[ohCount] || "";
            let anPref = (anCount > 1 && ["chlorek", "bromek", "jodek", "fluorek", "azotan(V)"].includes(ANIONS[anSym].name)) ? GREEK_PREFIX[anCount] : "";
            return capitalizeFirst(`${anPref}${ANIONS[anSym].name} ${ohPref}hydrokso${ formatCationGenitive(catSym, ox) }`);
        }
    }

    // 5. Wodorotlenki: MOH lub M(OH)n
    let mHydrox = formula.match(/^([A-Z][a-z]?)(\(OH\)(\d+)|OH)$/);
    if (mHydrox && ELEMENTS[mHydrox[1]]) {
        let catSym = mHydrox[1];
        let ox = mHydrox[3] ? parseInt(mHydrox[3], 10) : 1;
        return capitalizeFirst(`wodorotlenek ${formatCationGenitive(catSym, ox)}`);
    }
    if (formula === "NH4OH") return "Woda amoniakalna (wodorotlenek amonu)";

    // 6. Kwasy tlenowe o ogólnym wzorze HxEyOz (algorytmiczne wyliczanie stopnia utlenienia)
    let mAcid = formula.match(/^H(\d*)([A-Z][a-z]?)(\d*)O(\d+)$/);
    if (mAcid && ELEMENTS[mAcid[2]]) {
        let x = mAcid[1] ? parseInt(mAcid[1], 10) : 1;
        let elSym = mAcid[2];
        let y = mAcid[3] ? parseInt(mAcid[3], 10) : 1;
        let z = parseInt(mAcid[4], 10);
        let ox = (2 * z - x) / y;
        let el = ELEMENTS[elSym];
        if (el.acid && Number.isInteger(ox)) {
            let polyPref = y > 1 ? GREEK_PREFIX[y] : "";
            let oxStr = FIXED_VALENCE_ELEMENTS.has(elSym) ? "" : `(${ROMAN[String(ox)] || ox})`;
            return capitalizeFirst(`kwas ${polyPref}${el.acid}${oxStr}`);
        }
    }

    // 7. Tlenki binarne MxOy
    let mOxide = formula.match(/^([A-Z][a-z]?)(\d*)O(\d*)$/);
    if (mOxide && ELEMENTS[mOxide[1]] && mOxide[1] !== "H") {
        let elSym = mOxide[1];
        let x = mOxide[2] ? parseInt(mOxide[2], 10) : 1;
        let y = mOxide[3] ? parseInt(mOxide[3], 10) : 1;
        let ox = (2 * y) / x;
        if (Number.isInteger(ox) && ox >= 1 && ox <= 8) {
            return capitalizeFirst(`tlenek ${formatCationGenitive(elSym, ox)}`);
        }
    }

    // 8. Sole podwójne (np. KAl(SO4)2, KCr(SO4)2, CaMg(CO3)2, KNaCO3)
    let mDouble = formula.match(/^([A-Z][a-z]?|\(NH4\)\d*|NH4)([A-Z][a-z]?)(\(([A-Za-z0-9]+)\)(\d+)|([A-Za-z0-9]+))$/);
    if (mDouble) {
        let c1Raw = mDouble[1];
        let c2Sym = mDouble[2];
        let anSym = mDouble[4] || mDouble[6];
        let anCount = mDouble[5] ? parseInt(mDouble[5], 10) : 1;
        let c1Sym = c1Raw.includes("NH4") ? "NH4" : c1Raw;
        let c1Count = c1Raw.includes("NH4") ? (parseInt(c1Raw.replace(/\D/g, ''), 10) || 1) : 1;

        if ( (ELEMENTS[c1Sym] || c1Sym === "NH4") && ELEMENTS[c2Sym] && ANIONS[anSym] ) {
            let c1Ox = c1Sym === "NH4" ? 1 : (KNOWN_FIXED_OX[c1Sym] || 1);
            let totalNeg = anCount * Math.abs(ANIONS[anSym].charge);
            let c2Ox = totalNeg - (c1Count * c1Ox);
            if (c2Ox >= 1 && c2Ox <= 6) {
                return capitalizeFirst(`${ANIONS[anSym].name} ${formatCationGenitive(c2Sym, c2Ox)} ${formatCationGenitive(c1Sym, c1Ox)}`);
            }
        }
    }

    // 9. Ogólne Sole i Związki Dwu- lub Wieloskładnikowe: Kation_x Anion_y
    let catSym = "";
    let catCount = 1;
    let remainder = "";

    let mNH4Cat = formula.match(/^\(NH4\)(\d+)(.+)$/);
    if (mNH4Cat) {
        catSym = "NH4";
        catCount = parseInt(mNH4Cat[1], 10);
        remainder = mNH4Cat[2];
    } else if (formula.startsWith("NH4")) {
        catSym = "NH4";
        catCount = 1;
        remainder = formula.slice(3);
    } else if (formula.startsWith("UO2")) {
        catSym = "UO2";
        catCount = 1;
        remainder = formula.slice(3);
    } else {
        let mElemCat = formula.match(/^([A-Z][a-z]?)(\d*)(.+)$/);
        if (mElemCat && ELEMENTS[mElemCat[1]]) {
            catSym = mElemCat[1];
            catCount = mElemCat[2] ? parseInt(mElemCat[2], 10) : 1;
            remainder = mElemCat[3];
        }
    }

    if (catSym && remainder) {
        let anSym = "";
        let anCount = 1;

        // A) Anion w nawiasie okrągłym, np. (SO4)3, (NO3)2, (HPO4)3
        let mParenAn = remainder.match(/^\(([A-Za-z0-9]+)\)(\d+)$/);
        if (mParenAn) {
            anSym = mParenAn[1];
            anCount = parseInt(mParenAn[2], 10);
        } else {
            // B) Anion bez nawiasu - najpierw szukamy dokładnego dopasowania wieloatomowego (np. SO4, Cr2O7, MnO4, HCO3)
            if (ANIONS[remainder]) {
                anSym = remainder;
                anCount = 1;
            } else {
                // C) Anion jednoatomowy lub pseudohalogenkowy ze współczynnikiem (np. Cl3 w FeCl3, S3 w Al2S3, N2 w Mg3N2)
                let mBinAn = remainder.match(/^([A-Z][a-z]?|CN|SCN|N3)(\d+)$/);
                if (mBinAn && ANIONS[mBinAn[1]]) {
                    anSym = mBinAn[1];
                    anCount = parseInt(mBinAn[2], 10);
                }
            }
        }

        // Jeśli rozpoznaliśmy anion w bazie ANIONS:
        if (anSym && ANIONS[anSym]) {
            let anObj = ANIONS[anSym];
            let anName = anObj.customName || anObj.name;
            let anCharge = anObj.charge;

            // Obsługa anionów o zmiennym ładunku zależnym od kationu (np. KMnO4 vs K2MnO4)
            if (anObj.altCharge && (KNOWN_FIXED_OX[catSym] || catSym === "NH4")) {
                let knownCatOx = catSym === "NH4" ? 1 : KNOWN_FIXED_OX[catSym];
                let calcAnCharge = -(catCount * knownCatOx) / anCount;
                if (anObj.altCharge[String(calcAnCharge)]) {
                    anName = anObj.altCharge[String(calcAnCharge)];
                    anCharge = calcAnCharge;
                }
            }

            let catOx = (anCount * Math.abs(anCharge)) / catCount;
            if (Number.isInteger(catOx) && catOx >= 1 && catOx <= 8) {
                return capitalizeFirst(`${anName} ${formatCationGenitive(catSym, catOx)}`);
            }
        }

        // D) Uniwersalny solwer dla dowolnych oksoanionów typu Mx(EaOb)y (np. K2FeO4, NaBiO3, BaTiO3, Na3VO4)
        let mCustomOxo = (anSym || remainder).match(/^([A-Z][a-z]?)(\d*)O(\d+)$/);
        if (mCustomOxo && ELEMENTS[mCustomOxo[1]]) {
            let centralE = mCustomOxo[1];
            let a = mCustomOxo[2] ? parseInt(mCustomOxo[2], 10) : 1;
            let b = parseInt(mCustomOxo[3], 10);
            let y = mParenAn ? anCount : 1;

            let knownCatOx = catSym === "NH4" ? 1 : (KNOWN_FIXED_OX[catSym] || 2);
            let oxE = (2 * b * y - catCount * knownCatOx) / (a * y);
            if (Number.isInteger(oxE) && oxE >= 1 && oxE <= 8) {
                let polyPref = a > 1 ? GREEK_PREFIX[a] : "";
                let oxoRoot = ELEMENTS[centralE].oxo || (ELEMENTS[centralE].comp);
                let oxStr = FIXED_VALENCE_ELEMENTS.has(centralE) ? "" : `(${ROMAN[String(oxE)] || oxE})`;
                return capitalizeFirst(`${polyPref}${oxoRoot}${oxStr} ${formatCationGenitive(catSym, knownCatOx)}`);
            }
        }
    }

    return null;
}

// ============================================================================
// 4. ROZBUDOWANY TŁUMACZ IUPAC DLA CHEMII ORGANICZNEJ (ANG -> POL)
// ============================================================================
function translateOrganicIupacToPolish(engName) {
    let name = engName.trim();

    // Tłumaczenie estrów w szyku angielskim: "[alkyl] [alkanoate]" -> "[alkano]an [alkilu]"
    let esterMatch = name.match(/^([a-z0-9,-]+yl)\s+([a-z0-9,-]+oate|acetate|formate|benzoate|oxalate|lactate)$/i);
    if (esterMatch) {
        let alkyl = translateOrganicRadicalGenitive(esterMatch[1].toLowerCase());
        let acidPart = translateOrganicAnionNominative(esterMatch[2].toLowerCase());
        return capitalizeFirst(`${acidPart} ${alkyl}`);
    }

    // Tłumaczenie soli organicznych: "sodium acetate" -> "octan sodu"
    let orgSaltMatch = name.match(/^(sodium|potassium|calcium|magnesium|ammonium|silver|lithium|barium)\s+([a-z0-9,-]+oate|acetate|formate|benzoate|oxalate|phenoxide|ethoxide|methoxide)$/i);
    if (orgSaltMatch) {
        const catMap = {
            "sodium":"sodu","potassium":"potasu","calcium":"wapnia","magnesium":"magnezu",
            "ammonium":"amonu","silver":"srebra","lithium":"litu","barium":"baru"
        };
        let catPl = catMap[orgSaltMatch[1].toLowerCase()] || orgSaltMatch[1];
        let anPl = translateOrganicAnionNominative(orgSaltMatch[2].toLowerCase());
        return capitalizeFirst(`${anPl} ${catPl}`);
    }

    let n = name.toLowerCase();

    // Kwasy karboksylowe i sulfonowe
    let isAcid = false;
    if (n.includes(" acid")) {
        isAcid = true;
        n = n.replace(" acid", "");
    }

    // Zamiana rdzeni i przedrostków funkcyjnych
    const replacements = [
        [/carboxylic/g, "karboksylowy"],
        [/dioic/g, "diowy"],
        [/oic/g, "owy"],
        [/sulfonic/g, "sulfonowy"],
        [/benzoic/g, "benzoesowy"],
        [/acetic/g, "octowy (etanowy)"],
        [/formic/g, "mrówkowy (metanowy)"],
        [/oxalic/g, "szczawiowy (etanodiowy)"],
        [/citric/g, "cytrynowy"],
        [/lactic/g, "mlekowy"],
        [/salicylic/g, "salicylowy"],
        [/picric/g, "pikrynowy (2,4,6-trinitrofenol)"],
        [/cyclo/g, "cyklo"],
        [/spiro/g, "spiro"],
        [/bicyclo/g, "bicyklo"],
        [/benzene/g, "benzen"],
        [/naphthalene/g, "naftalen"],
        [/anthracene/g, "antracen"],
        [/phenol/g, "fenol"],
        [/aniline/g, "anilina"],
        [/toluene/g, "toluen (metylobenzen)"],
        [/xylene/g, "ksylen"],
        [/styrene/g, "styren"],
        [/pyridine/g, "pirydyna"],
        [/pyrrole/g, "pirol"],
        [/furan/g, "furan"],
        [/thiophene/g, "tiofen"],
        [/imidazole/g, "imidazol"],
        [/pyrimidine/g, "pirymidyna"],
        [/purine/g, "puryna"],
        [/quinoline/g, "chinolina"],
        [/phenyl/g, "fenylo"],
        [/benzyl/g, "benzylo"],
        [/hydroxy/g, "hydroksy"],
        [/oxo/g, "okso"],
        [/amino/g, "amino"],
        [/nitro/g, "nitro"],
        [/cyano/g, "cyjano"],
        [/formyl/g, "formylo"],
        [/carboxy/g, "karboksy"],
        [/methoxy/g, "metoksy"],
        [/ethoxy/g, "etoksy"],
        [/propoxy/g, "propoksy"],
        [/butoxy/g, "butoksy"],
        [/phenoxy/g, "fenoksy"],
        [/fluoro/g, "fluoro"],
        [/chloro/g, "chloro"],
        [/bromo/g, "bromo"],
        [/iodo/g, "jodo"],
        [/undec/g, "undek"],
        [/dodec/g, "dodek"],
        [/tridec/g, "tridek"],
        [/tetradec/g, "tetradek"],
        [/pentadec/g, "pentadek"],
        [/hexadec/g, "heksadek"],
        [/heptadec/g, "heptadek"],
        [/octadec/g, "oktadek"],
        [/nonadec/g, "nonadek"],
        [/icos/g, "ikoz"],
        [/dec/g, "dek"],
        [/oct/g, "okt"],
        [/hept/g, "hept"],
        [/hex/g, "heks"],
        [/pent/g, "pent"],
        [/but/g, "but"],
        [/prop/g, "prop"],
        [/eth/g, "et"],
        [/meth/g, "met"],
        [/hexa/g, "heksa"],
        [/penta/g, "penta"],
        [/tetra/g, "tetra"],
        [/carbaldehyde/g, "karboaldehyd"],
        [/aldehyde/g, "aldehyd"],
        [/carboxamide/g, "karboksyamid"],
        [/amide/g, "amid"],
        [/carbonitrile/g, "karbonitryl"],
        [/nitrile/g, "nitryl"],
        [/amine/g, "amina"],
        [/thiol/g, "tiol"],
        [/diol/g, "diol"],
        [/triol/g, "triol"],
        [/dione/g, "dion"],
        [/trione/g, "trion"],
        [/dial/g, "dial"],
        [/diene/g, "dien"],
        [/triene/g, "trien"],
        [/diyne/g, "diyn"],
        [/ane$/g, "an"],
        [/ene$/g, "en"],
        [/yne$/g, "yn"],
        [/ol$/g, "ol"],
        [/al$/g, "al"],
        [/one$/g, "on"],
        [/ane-/g, "ano-"],
        [/ene-/g, "eno-"],
        [/yne-/g, "yno-"],
        [/an-(\d)/g, "ano-$1"],
        [/yl/g, "ylo"]
    ];

    for (let [regex, rep] of replacements) {
        n = n.replace(regex, rep);
    }

    // Czyszczenie zrostków np. "metyloan" -> "metan" tylko jeśli na końcu, lub "ylo-" przed spółgłoską
    n = n.replace(/ylo([a-ząćęłńóśźż])/g, "ylo$1");
    n = n.replace(/yloo/g, "ylo");

    if (isAcid) {
        n = "kwas " + n;
    }

    return capitalizeFirst(n);
}

function translateOrganicRadicalGenitive(rad) {
    let r = rad
        .replace(/methyl/g, "metylu")
        .replace(/ethyl/g, "etylu")
        .replace(/propyl/g, "propylu")
        .replace(/butyl/g, "butylu")
        .replace(/pentyl/g, "pentylu")
        .replace(/hexyl/g, "heksylu")
        .replace(/phenyl/g, "fenylu")
        .replace(/benzyl/g, "benzylu")
        .replace(/yl$/g, "ylu");
    return r;
}

function translateOrganicAnionNominative(an) {
    if (an === "acetate") return "octan (etanoanian)";
    if (an === "formate") return "mrówczan (metanoanian)";
    if (an === "benzoate") return "benzoesan";
    if (an === "oxalate") return "szczawian";
    if (an === "lactate") return "mleczan";
    if (an === "phenoxide") return "fenolan";
    if (an === "methoxide") return "metanolan";
    if (an === "ethoxide") return "etanolan";
    return translateOrganicIupacToPolish(an.replace(/oate$/g, "oanian")).toLowerCase();
}

// ============================================================================
// 5. ZINTEGROWANA CHMURA (WIKIDATA PL + PUBCHEM + NEURAL TRANSLATE FALLBACK)
// ============================================================================

async function resolveCompoundInCloud(query, isSmiles = false) {
    try {
        // KROK 1: Zapytanie do PubChem o CID oraz nazwy IUPAC i Title
        const endpoint = isSmiles
            ? `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${encodeURIComponent(query)}/property/IUPACName,Title,MolecularFormula/JSON`
            : `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(query)}/property/IUPACName,Title,MolecularFormula/JSON`;

        let res = await fetch(endpoint);
        if (!res.ok && !isSmiles) {
            res = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/fastformula/${encodeURIComponent(query)}/property/IUPACName,Title,MolecularFormula/JSON`);
        }
        if (!res.ok) return null;

        const data = await res.json();
        const props = data.PropertyTable.Properties[0];
        const iupacEng = props.IUPACName || "";
        const titleEng = props.Title || "";
        const formula = props.MolecularFormula || "";

        // Jeśli to związek nieorganiczny i PubChem zwrócił jego wzór, spróbujmy najpierw naszego lokalnego silnika!
        if (!isSmiles && formula) {
            let localFromPubchem = parseInorganicFormulaLocal(formula);
            if (localFromPubchem) return localFromPubchem;
        }

        // KROK 2: Sprawdzenie polskiej nazwy w bazie WIKIDATA / WIKIPEDIA PL po tytule angielskim
        if (titleEng) {
            let wikiPl = await fetchPolishFromWikipedia(titleEng);
            if (wikiPl && !looksEnglish(wikiPl)) {
                // Jeśli to związek organiczny, dołączmy również systematyczną nazwę IUPAC po polsku
                if (isSmiles && iupacEng && iupacEng.toLowerCase() !== titleEng.toLowerCase()) {
                    let iupacPl = translateOrganicIupacToPolish(iupacEng);
                    if (!looksEnglish(iupacPl) && iupacPl.toLowerCase() !== wikiPl.toLowerCase()) {
                        return `${iupacPl} (${wikiPl.toLowerCase()})`;
                    }
                }
                return wikiPl;
            }
        }

        // KROK 3: Tłumaczenie systematyczne IUPAC naszym silnikiem regułowym
        let rawToTranslate = iupacEng || titleEng;
        let translated = translateOrganicIupacToPolish(rawToTranslate);

        // KROK 4: Jeśli nazwa nadal zawiera nietypowe angielskie człony, użyj darmowego API tłumacza neuronalnego
        if (looksEnglish(translated)) {
            let neuralPl = await translateViaNeuralAPI(rawToTranslate);
            if (neuralPl) return capitalizeFirst(neuralPl);
        }

        return translated;
    } catch (e) {
        return null;
    }
}

function looksEnglish(str) {
    const engMarkers = /\b(acid|oxide|chloride|sulfate|nitrate|carbonate|hydroxide|potassium|sodium|calcium|iron|copper|silver|zinc|ammonium|methyl|ethyl|propyl|butyl|phenyl|benzene|ether|ketone|aldehyde|alcohol|anhydride)\b/i;
    return engMarkers.test(str);
}

async function fetchPolishFromWikipedia(engTitle) {
    try {
        const url = `https://en.wikipedia.org/w/api.php?action=query&redirects=1&prop=langlinks&lllang=pl&titles=${encodeURIComponent(engTitle)}&format=json&origin=*`;
        const res = await fetch(url);
        const data = await res.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pageId !== "-1" && pages[pageId].langlinks) {
            let pl = pages[pageId].langlinks[0]['*'];
            return pl.replace(/\s\(.*\)/, '');
        }
    } catch (e) {}
    return null;
}

async function translateViaNeuralAPI(text) {
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pl&dt=t&q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data[0] && data[0][0] && data[0][0][0]) {
            return data[0][0][0];
        }
    } catch (e) {}
    return null;
}

function capitalizeFirst(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}