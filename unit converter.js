function length(value, from_, to) {
    const length = {
        "mm": 0.001,
        "cm": 0.01,
        "m": 1,
        "km": 1000,
        "in": 0.0254,
        "ft": 0.3048,
        "yd": 0.9144,
        "mi": 1609.34,
        "nautical mile": 1852,
        "mil": 0.0000254,
        "AU": 1.496 * (10 ** 11),
        "lightyear": 9.46080 * (10 ** 15),
        "parsec": 3.0842280 * (10 ** 16),
        "micrometer": 10 ** -6,
        "nanometer": 10 ** -9,
        "angstrom": 10 ** -10
    };

    if (!(from_ in length) || !(to in length)) {
        throw new Error("Unsupported length unit");
    }

    let meters = value * length[from_];
    return meters / length[to];
}

function mass(value, from_, to) {
    const mass = {
        "mg": 0.000001,
        "g": 0.001,
        "kg": 1,
        "ton": 1000,
        "ounce": 0.0283495,
        "pound": 0.453592,
        "UK ton": 1016.05,
        "US ton": 907.185
    };

    if (!(from_ in mass) || !(to in mass)) {
        throw new Error("Unsupported mass unit");
    }

    let kg = value * mass[from_];
    return kg / mass[to];
}

function temperature(value, from_, to) {
    from_ = from_.toLowerCase();
    to = to.toLowerCase();

    if (from_ === "celcius" && to === "fahrenheit") {
        if (value < -273.15) throw new Error("celcius can't be less than -273.15");
        return (value * 9/5) + 32;
    }

    else if (from_ === "fahrenheit" && to === "celcius") {
        if (value < -457.87) throw new Error("fahrenheit can't be less than -457.87");
        return (value - 32) * 5/9;
    }

    else if (from_ === "celcius" && to === "kelvin") {
        if (value < -273.15) throw new Error("celcius can't be less than -273.15");
        return value + 273.15;
    }

    else if (from_ === "kelvin" && to === "celcius") {
        if (value < 0) throw new Error("kelvin can't be less than 0");
        return value - 273.15;
    }

    else if (from_ === "fahrenheit" && to === "kelvin") {
        if (value < -457.87) throw new Error("fahrenheit can't be less than -457.87");
        return (value - 32) * 5/9 + 273.15;
    }

    else if (from_ === "kelvin" && to === "fahrenheit") {
        if (value < 0) throw new Error("kelvin can't be less than 0");
        return (value - 273.15) * 9/5 + 32;
    }

    else {
        throw new Error("Unsupported temperature unit");
    }
}

function area(value, from_, to) {
    const area = {
        "m**2": 1,
        "cm**2": 0.0001,
        "ft**2": 0.09290304,
        "in**2": 0.00064516,
        "yd**2": 0.83612736,
        "km**2": 1000000,
        "acre": 4046.8564224,
        "ares": 100,
        "hectare": 10000
    };

    if (!(from_ in area) || !(to in area)) {
        throw new Error("Unsupported area unit");
    }

    let ar = value * area[from_];
    return ar / area[to];
}

function volume(value, from_, to) {
    const volume = {
        "m**3": 1,
        "cm**3": 0.000001,
        "in**3": 0.0000163871,
        "ft**3": 0.0283168466,
        "yd**3": 0.764554858,
        "km**3": 1000000000,
        "ml": 0.000001,
        "l": 0.001,
        "US gallons": 0.0037854188,
        "UK gallons": 0.00454609
    };

    if (!(from_ in volume) || !(to in volume)) {
        throw new Error("Unsupported volume unit");
    }

    let vol = value * volume[from_];
    return vol / volume[to];
}

function speed(value, from_, to) {
    const speed = {
        "m/s": 1,
        "mph": 0.0002777778,
        "km/s": 1000,
        "km/h": 0.2777778,
        "in/s": 0.0254,
        "in/h": 0.0000070556,
        "ft/s": 0.3048,
        "ft/h": 0.0000846667,
        "mi/s": 1609.344,
        "mi/h": 0.44704,
        "knot": 0.5144444444
    };

    if (!(from_ in speed) || !(to in speed)) {
        throw new Error("Unsupported speed unit");
    }

    let sp = value * speed[from_];
    return sp / speed[to];
}

function data(value, from_, to) {
    const data = {
        "MB": 1,
        "bit": 0.000000125,
        "B": 0.000001,
        "KB": 0.001,
        "KiB": 0.001024,
        "MiB": 1.048576,
        "GB": 1000,
        "Gib": 1073.741824,
        "TB": 1000000,
        "TiB": 1099511.627776
    };

    if (!(from_ in data) || !(to in data)) {
        throw new Error("Unsupported data unit");
    }

    let dat = value * data[from_];
    return dat / data[to];
}

function time(value, from_, to) {
    const timeUnits = {
        "second": 1,
        "milisecond": 0.001,
        "minute": 60,
        "hour": 3600,
        "day": 86400,
        "week": 604800,
        "year": 31536000
    };

    if (!(from_ in timeUnits) || !(to in timeUnits)) {
        throw new Error("Unsupported time unit");
    }

    let t = value * timeUnits[from_];
    return t / timeUnits[to];
}
