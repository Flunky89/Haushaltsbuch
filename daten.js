// Hilfs-Funktionen für Monats-Schlüssel pro Jahr
function getMonthKeysForYear(yearStr) {
    const shortYear = yearStr.slice(-2);
    return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map(m => `${m}${shortYear}`);
}

const monthNames = ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

// Exakte Plankosten-Basis
const excelPlans = [
    { nr: 0, group: "Sonstiges", name: "Sonstiges", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 10, group: "Wohnen", name: "Wartung Heizung (jhrl. Dez)", plan: 40.00, saveRate: 40.00, activeMonths: Array(12).fill(true) },
    { nr: 11, group: "Wohnen", name: "Grundsteuer (Feb/Mai/Aug/Nov)", plan: 30.00, saveRate: 30.00, activeMonths: Array(12).fill(true) },
    { nr: 12, group: "Wohnen", name: "Straßenreinigung (Feb/Mai/Aug/Nov)", plan: 3.00, saveRate: 3.00, activeMonths: Array(12).fill(true) },
    { nr: 13, group: "Wohnen", name: "Strom", plan: 110.00, saveRate: 23.00, activeMonths: Array(12).fill(true) },
    { nr: 14, group: "Wohnen", name: "Heizkosten (Gas)", plan: 29.00, saveRate: 15.00, activeMonths: Array(12).fill(true) },
    { nr: 15, group: "Wohnen", name: "Wasser", plan: 60.00, saveRate: 5.00, activeMonths: Array(12).fill(true) },
    { nr: 16, group: "Wohnen", name: "Internet & Telefon & Smartwatch", plan: 73.90, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 17, group: "Wohnen", name: "GEZ (Jan/Apr/Jul/Okt)", plan: 18.36, saveRate: 18.36, activeMonths: Array(12).fill(true) },
    { nr: 18, group: "Wohnen", name: "Müllentsorgung (jhrl. Jul)", plan: 30.00, saveRate: 30.00, activeMonths: Array(12).fill(true) },
    { nr: 19, group: "Wohnen", name: "Schornsteinfeger", plan: 7.00, saveRate: 7.00, activeMonths: Array(12).fill(true) },
    { nr: 20, group: "Auto", name: "Autoservice Blitz", plan: 80.00, saveRate: 80.00, activeMonths: Array(12).fill(true) },
    { nr: 21, group: "Auto", name: "Tanken Blitz", plan: 110.00, saveRate: 110.00, activeMonths: Array(12).fill(true) },
    { nr: 22, group: "Auto", name: "KFZ-Steuer Blitz (jhrl. Aug)", plan: 0.00, saveRate: 23.00, activeMonths: Array(12).fill(true) },
    { nr: 23, group: "Auto", name: "KFZ-Vers. Blitz (jhrl. Jan)", plan: 40.00, saveRate: 40.00, activeMonths: Array(12).fill(true) },
    { nr: 24, group: "Auto", name: "Wertverlust Blitz", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 25, group: "Auto", name: "Autoservice Zoe", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 26, group: "Auto", name: "Tanken Zoe", plan: 0.00, saveRate: 75.00, activeMonths: Array(12).fill(true) },
    { nr: 27, group: "Auto", name: "KFZ-Steuer Zoe (jhrl. März)", plan: 5.00, saveRate: 5.00, activeMonths: Array(12).fill(true) },
    { nr: 28, group: "Auto", name: "KFZ-Vers. Zoe (jhrl. Jan)", plan: 0.00, saveRate: 32.50, activeMonths: Array(12).fill(true) },
    { nr: 29, group: "Auto", name: "Wertverlust Zoe", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 30, group: "Versicherungen", name: "ADAC (jhrl. Aug)", plan: 7.00, saveRate: 7.00, activeMonths: Array(12).fill(true) },
    { nr: 31, group: "Versicherungen", name: "BU Volkswohlbund", plan: 78.33, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 32, group: "Versicherungen", name: "Hausratvers. (jhrl. Okt)", plan: 20.00, saveRate: 20.00, activeMonths: Array(12).fill(true) },
    { nr: 33, group: "Versicherungen", name: "Priv.haftpflicht (jhrl. Juni)", plan: 8.00, saveRate: 8.00, activeMonths: Array(12).fill(true) },
    { nr: 34, group: "Versicherungen", name: "Wohngebäudeversicherung", plan: 36.00, saveRate: 36.00, activeMonths: Array(12).fill(true) },
    { nr: 35, group: "Versicherungen", name: "Interlloyd Unfallvers.", plan: 34.70, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 36, group: "Versicherungen", name: "Rechtsschutz (jhrl. Feb)", plan: 35.00, saveRate: 35.00, activeMonths: Array(12).fill(true) },
    { nr: 37, group: "Versicherungen", name: "Zahnzusatz ERGO", plan: 30.40, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 38, group: "Versicherungen", name: "Versicherungen", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 39, group: "Versicherungen", name: "AirHelp (jhrl. Nov)", plan: 4.00, saveRate: 4.00, activeMonths: Array(12).fill(true) },
    { nr: 40, group: "Altersvorsorge & Finanzen", name: "Altersvorsorge & Finanzen", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 41, group: "Altersvorsorge & Finanzen", name: "Riesterrente", plan: 160.42, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 42, group: "Altersvorsorge & Finanzen", name: "Hausrat Invest (Möbel & Geräte)", plan: 200.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 43, group: "Altersvorsorge & Finanzen", name: "Steuersoftware (jhrl. Dez)", plan: 3.00, saveRate: 3.00, activeMonths: Array(12).fill(true) },
    { nr: 44, group: "Altersvorsorge & Finanzen", name: "Sparen Dani und Stefan", plan: 100.00, saveRate: 100.00, activeMonths: Array(12).fill(true) },
    { nr: 45, group: "Altersvorsorge & Finanzen", name: "Altersvorsorge & Finanzen", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 46, group: "Altersvorsorge & Finanzen", name: "Zinsen DSL Hausfinanzierung", plan: 962.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 47, group: "Altersvorsorge & Finanzen", name: "Zinsen Hanseatic Hausfinanzierung", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 48, group: "Altersvorsorge & Finanzen", name: "Postbank Kredit Solaranlage", plan: 217.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 49, group: "Altersvorsorge & Finanzen", name: "Altersvorsorge & Finanzen", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 50, group: "Hund", name: "Hund", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 51, group: "Hund", name: "Hundesteuer (Feb/Mai/Aug/Nov)", plan: 12.00, saveRate: 12.00, activeMonths: Array(12).fill(true) },
    { nr: 52, group: "Hund", name: "Hunde Nahrung", plan: 120.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 53, group: "Hund", name: "Hunde Tierarzt", plan: 60.00, saveRate: 60.00, activeMonths: Array(12).fill(true) },
    { nr: 54, group: "Hund", name: "Hunde Equipment", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 55, group: "Hund", name: "Hunde Betreuung", plan: 50.00, saveRate: 50.00, activeMonths: Array(12).fill(true) },
    { nr: 56, group: "Hund", name: "Hunde Krankenversicherung", plan: 95.45, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 57, group: "Hund", name: "Hundehaftpflicht (jhrl. Apr)", plan: 0.00, saveRate: 6.00, activeMonths: Array(12).fill(true) },
    { nr: 58, group: "Hund", name: "Hund Position 58", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 59, group: "Hund", name: "Hund Position 59", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 60, group: "Bildung & Lifestyle", name: "Disney+", plan: 10.00, saveRate: 10.00, activeMonths: Array(12).fill(true) },
    { nr: 61, group: "Bildung & Lifestyle", name: "Essen", plan: 500.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 62, group: "Bildung & Lifestyle", name: "Drogerie & Apotheke", plan: 60.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 63, group: "Bildung & Lifestyle", name: "Silvester", plan: 7.00, saveRate: 7.00, activeMonths: Array(12).fill(true) },
    { nr: 64, group: "Bildung & Lifestyle", name: "Weihnachtsbaum und Essen", plan: 13.00, saveRate: 13.00, activeMonths: Array(12).fill(true) },
    { nr: 65, group: "Bildung & Lifestyle", name: "Office Lizenz", plan: 0.00, saveRate: 6.00, activeMonths: Array(12).fill(true) },
    { nr: 66, group: "Bildung & Lifestyle", name: "Netflix", plan: 19.98, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 67, group: "Bildung & Lifestyle", name: "Rücklage Urlaub", plan: 70.00, saveRate: 70.00, activeMonths: Array(12).fill(true) },
    { nr: 68, group: "Bildung & Lifestyle", name: "Haveltherme", plan: 50.00, saveRate: 50.00, activeMonths: Array(12).fill(true) },
    { nr: 69, group: "Bildung & Lifestyle", name: "Haushaltshilfe", plan: 90.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 70, group: "Kinder", name: "Schulmaterialien & Ausflüge", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 71, group: "Kinder", name: "Schulessen", plan: 50.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 72, group: "Kinder", name: "Schulhort", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 73, group: "Kinder", name: "Kindergarten", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 74, group: "Kinder", name: "Karls Jahreskarte (jhrl. Sep)", plan: 7.00, saveRate: 7.00, activeMonths: Array(12).fill(true) },
    { nr: 75, group: "Kinder", name: "Allianz PZV Emmi (Feb/Mai/Aug/Nov)", plan: 29.00, saveRate: 29.00, activeMonths: Array(12).fill(true) },
    { nr: 76, group: "Kinder", name: "Allianz PZV Theo (Feb/Mai/Aug/Nov)", plan: 0.00, saveRate: 19.00, activeMonths: Array(12).fill(true) },
    { nr: 77, group: "Kinder", name: "Sparen Depot Flossbach Emmi", plan: 120.00, saveRate: 120.00, activeMonths: Array(12).fill(true) },
    { nr: 78, group: "Kinder", name: "Sparen Depot Flossbach Theo", plan: 0.00, saveRate: 120.00, activeMonths: Array(12).fill(true) },
    { nr: 79, group: "Kinder", name: "Sparen Canada Life Emmi", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 80, group: "Pers. Freigeld", name: "Kindergeburtstage", plan: 50.00, saveRate: 50.00, activeMonths: Array(12).fill(true) },
    { nr: 81, group: "Pers. Freigeld", name: "Geschenke", plan: 75.00, saveRate: 75.00, activeMonths: Array(12).fill(true) },
    { nr: 82, group: "Pers. Freigeld", name: "Spende ASB (Jan & Jul)", plan: 3.00, saveRate: 3.00, activeMonths: Array(12).fill(true) },
    { nr: 83, group: "Pers. Freigeld", name: "Konzerte & Veranstaltungen", plan: 40.00, saveRate: 40.00, activeMonths: Array(12).fill(true) },
    { nr: 84, group: "Pers. Freigeld", name: "Dani Freigeld", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 85, group: "Pers. Freigeld", name: "Sparen Revival", plan: 40.00, saveRate: 40.00, activeMonths: Array(12).fill(true) },
    { nr: 86, group: "Pers. Freigeld", name: "Sport TSC (jhrl. Aug)", plan: 12.00, saveRate: 12.00, activeMonths: Array(12).fill(true) },
    { nr: 87, group: "Pers. Freigeld", name: "Schwimmen Wasserfreunde", plan: 47.00, saveRate: 3.00, activeMonths: Array(12).fill(true) },
    { nr: 88, group: "Pers. Freigeld", name: "Kleidung", plan: 50.00, saveRate: 50.00, activeMonths: Array(12).fill(true) },
    { nr: 89, group: "Pers. Freigeld", name: "Haare & Barbier", plan: 20.00, saveRate: 20.00, activeMonths: Array(12).fill(true) },
    { nr: 90, group: "xxxx", name: "Zugtickets Büro", plan: 59.85, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 91, group: "xxxx", name: "Bend Yoga- und Stretching", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) },
    { nr: 92, group: "xxxx", name: "Beachhandball", plan: 0.00, saveRate: 50.00, activeMonths: Array(12).fill(true) },
    { nr: 93, group: "xxxx", name: "Girokarten Entgelt (jhrl. Jan)", plan: 2.00, saveRate: 2.00, activeMonths: Array(12).fill(true) },
    { nr: 99, group: "xxxx", name: "Reisekosten beruflich", plan: 0.00, saveRate: 0.00, activeMonths: Array(12).fill(true) }
];

let appData = {};

function createInitialYearData(yearStr) {
    let yearObj = {};
    const keys = getMonthKeysForYear(yearStr);
    keys.forEach(mKey => {
        yearObj[mKey] = {
            income: (mKey.startsWith("01")) ? 4305.75 : ((mKey.startsWith("02") || mKey.startsWith("03")) ? 4295.19 : 4310.94),
            plans: JSON.parse(JSON.stringify(excelPlans)),
            expenses: []
        };
    });
    return yearObj;
}

function ensureYearExists(yearStr) {
    if (!appData[yearStr]) {
        appData[yearStr] = createInitialYearData(yearStr);
    }
}

function saveData() {
    try {
        localStorage.setItem("haushaltsbuch_2026_data", JSON.stringify(appData));
    } catch (e) {
        console.error("Fehler beim Speichern im LocalStorage:", e);
    }
}

// INTELLIGENTES PARSEN VON ALT- UND NEUDATEN
function loadDataFromStorage() {
    const localSaved = localStorage.getItem("haushaltsbuch_2026_data");
    if (localSaved) {
        try {
            const parsed = JSON.parse(localSaved);
            // Überprüfe, ob alte flache Struktur vorliegt (z.B. "0126")
            if (parsed["0126"] || parsed["0726"]) {
                appData = { "2026": parsed };
            } else {
                appData = parsed;
            }
        } catch(e) {
            appData = {};
        }
    } else {
        appData = {};
    }
    ensureYearExists("2026");
}

loadDataFromStorage();

// RÜCKLAGENÜBERSICHT
if (!appData.reservesList || appData.reservesList.length === 0) {
    appData.reservesList = [
        { id: 1, nr: 18, name: "Rücklage Abfallentsorgung Dallgow", periodMonths: 12, actualBill: 352.56, startBalance: 27.44 },
        { id: 2, nr: 30, name: "Rücklage ADAC", periodMonths: 12, actualBill: 79.00, startBalance: 77.00 },
        { id: 3, nr: 39, name: "Rücklage AirHelp", periodMonths: 12, actualBill: 39.99, startBalance: 60.01 },
        { id: 4, nr: 75, name: "Rücklage Allianz PZV Emmi", periodMonths: 3, actualBill: 86.13, startBalance: 58.87 },
        { id: 5, nr: 76, name: "Rücklage Allianz PZV Theo", periodMonths: 3, actualBill: 56.58, startBalance: 29.26 },
        { id: 6, nr: 82, name: "Rücklage ASB", periodMonths: 6, actualBill: 18.00, startBalance: 30.00 },
        { id: 7, nr: 20, name: "Rücklage Autoservice Blitz", periodMonths: 12, actualBill: 800.00, startBalance: -844.62 },
        { id: 8, nr: 0, name: "Rücklage Baukindergeld", periodMonths: 12, actualBill: 0.00, startBalance: 0.00 },
        { id: 9, nr: 92, name: "Rücklage Beachhandball", periodMonths: 7, actualBill: 446.00, startBalance: -124.74 },
        { id: 10, nr: 60, name: "Rücklage DisneyPlus", periodMonths: 12, actualBill: 100.00, startBalance: 48.11 },
        { id: 11, nr: 0, name: "Rücklage Duschtür", periodMonths: 12, actualBill: 0.00, startBalance: 0.00 },
        { id: 12, nr: 79, name: "Rücklage Emmi Canada", periodMonths: 12, actualBill: 0.00, startBalance: 0.00 },
        { id: 13, nr: 14, name: "Rücklage Gas", periodMonths: 12, actualBill: 0.00, startBalance: -764.84 },
        { id: 14, nr: 34, name: "Rücklage Gebäudeversicherung", periodMonths: 12, actualBill: 430.00, startBalance: 265.27 },
        { id: 15, nr: 81, name: "Rücklage Geschenke", periodMonths: 1, actualBill: 50.00, startBalance: -33.64 },
        { id: 16, nr: 17, name: "Rücklage GEZ", periodMonths: 3, actualBill: 55.08, startBalance: 0.00 },
        { id: 17, nr: 93, name: "Rücklage Girokartenentgelt", periodMonths: 12, actualBill: 23.76, startBalance: -9.76 },
        { id: 18, nr: 11, name: "Rücklage Grundsteuer", periodMonths: 3, actualBill: 78.44, startBalance: 71.53 },
        { id: 19, nr: 89, name: "Rücklage Haare & Barbier", periodMonths: 1, actualBill: 20.00, startBalance: 120.00 },
        { id: 20, nr: 32, name: "Rücklage Hausrat", periodMonths: 12, actualBill: 165.11, startBalance: 180.00 },
        { id: 21, nr: 42, name: "Rücklage Hausrat Invest", periodMonths: 12, actualBill: 0.00, startBalance: -677.89 },
        { id: 22, nr: 68, name: "Rücklage Haveltherme", periodMonths: 12, actualBill: 600.00, startBalance: -200.67 },
        { id: 23, nr: 55, name: "Rücklage Hundebetreuung", periodMonths: 12, actualBill: 600.00, startBalance: 360.22 },
        { id: 24, nr: 57, name: "Rücklage Hundehaftpflicht", periodMonths: 12, actualBill: 67.45, startBalance: 11.88 },
        { id: 25, nr: 51, name: "Rücklage Hundesteuer", periodMonths: 3, actualBill: 35.00, startBalance: 25.00 },
        { id: 26, nr: 74, name: "Rücklage Karls Jahreskarte", periodMonths: 12, actualBill: 80.00, startBalance: 34.40 },
        { id: 27, nr: 22, name: "Rücklage KFZ Steuer Blitz", periodMonths: 12, actualBill: 268.00, startBalance: 240.31 },
        { id: 28, nr: 27, name: "Rücklage KFZ Steuer Zoe", periodMonths: 12, actualBill: 56.00, startBalance: -31.00 },
        { id: 29, nr: 23, name: "Rücklage KFZ Versicherung", periodMonths: 12, actualBill: 470.00, startBalance: 152.71 },
        { id: 30, nr: 28, name: "Rücklage KFZ Versicherung Zoe", periodMonths: 12, actualBill: 390.00, startBalance: 181.78 },
        { id: 31, nr: 80, name: "Rücklage Kindergeburtstage", periodMonths: 12, actualBill: 600.00, startBalance: -52.00 },
        { id: 32, nr: 88, name: "Rücklage Kleidung", periodMonths: 1, actualBill: 50.00, startBalance: 92.98 },
        { id: 33, nr: 83, name: "Rücklage Konzerte & Veranstaltungen", periodMonths: 12, actualBill: 480.00, startBalance: -632.58 },
        { id: 34, nr: 65, name: "Rücklage Office Lizenz", periodMonths: 12, actualBill: 69.00, startBalance: 12.00 },
        { id: 35, nr: 33, name: "Rücklage Privathaftpflicht", periodMonths: 12, actualBill: 81.00, startBalance: 8.82 },
        { id: 36, nr: 36, name: "Rücklage Rechtschutz", periodMonths: 12, actualBill: 400.00, startBalance: 295.00 },
        { id: 37, nr: 85, name: "Rücklage Revival", periodMonths: 12, actualBill: 460.00, startBalance: 340.03 },
        { id: 38, nr: 19, name: "Rücklage Schornsteinfeger", periodMonths: 24, actualBill: 160.00, startBalance: 48.85 },
        { id: 39, nr: 63, name: "Rücklage Silvester", periodMonths: 12, actualBill: 75.00, startBalance: 20.50 },
        { id: 40, nr: 44, name: "Rücklage Sparen Dani und Stefan", periodMonths: 12, actualBill: 0.00, startBalance: 5000.00 },
        { id: 41, nr: 77, name: "Rücklage Sparen Emmi", periodMonths: 12, actualBill: 0.00, startBalance: 4600.00 },
        { id: 42, nr: 43, name: "Rücklage Steuersoftware", periodMonths: 12, actualBill: 36.00, startBalance: 21.02 },
        { id: 43, nr: 12, name: "Rücklage Straßenreinigung", periodMonths: 3, actualBill: 6.15, startBalance: 8.88 },
        { id: 44, nr: 13, name: "Rücklage Strom", periodMonths: 12, actualBill: 0.00, startBalance: -128.15 },
        { id: 45, nr: 21, name: "Rücklage Tanken Blitz", periodMonths: 1, actualBill: 0.00, startBalance: -58.04 },
        { id: 46, nr: 26, name: "Rücklage Tanken Zoe", periodMonths: 1, actualBill: 75.00, startBalance: -1.53 },
        { id: 47, nr: 53, name: "Rücklage Tierarzt", periodMonths: 12, actualBill: 0.00, startBalance: -71.04 },
        { id: 48, nr: 86, name: "Rücklage TSC", periodMonths: 12, actualBill: 138.00, startBalance: 115.50 },
        { id: 49, nr: 67, name: "Rücklage Urlaub", periodMonths: 12, actualBill: 600.00, startBalance: -252.43 },
        { id: 50, nr: 10, name: "Rücklage Wartung Heizung", periodMonths: 12, actualBill: 450.00, startBalance: 323.65 },
        { id: 51, nr: 15, name: "Rücklage Wasser", periodMonths: 12, actualBill: 60.00, startBalance: 129.96 },
        { id: 52, nr: 64, name: "Rücklage Weihnachtsbaum", periodMonths: 12, actualBill: 150.00, startBalance: 97.42 },
        { id: 53, nr: 87, name: "Rücklage Wettkampflizenz", periodMonths: 12, actualBill: 32.00, startBalance: -11.00 },
        { id: 54, nr: 0, name: "Rücklage Notgroschen Tagesgeld", periodMonths: 12, actualBill: 0.00, startBalance: 5000.00 }
    ];
}

saveData();