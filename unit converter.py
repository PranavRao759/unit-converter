def length(value, from_, to):
    length = {
        "mm": 0.001,
        "cm": 0.01,
        "m": 1,
        "km": 1000,
        "in": 0.0254,
        "ft": 0.3048,
        "yd": 0.9144,
        "mi": 1609.34,
        "nautical mile": 1852,   # nautical mile
        "mil": 0.0000254,
        'AU':1.496*(10**11),
        'lightyear':9.46080*(10**15),
        'parsec':3.0842280*(10**16),
        'micrometer':10**-6,
        'nanometer':10**-9,
        'angstrom':10**-10
    }
    if from_ not in length or to not in length:
        raise ValueError("Unsupported length unit")
    meters = value * length[from_]
    return meters / length[to]


def mass(value, from_, to):
    mass = {
        "mg": 0.000001,
        "g": 0.001,
        "kg": 1,
        "ton": 1000,
        "ounce": 0.0283495,
        "pound": 0.453592,
        "UK ton": 1016.05,  # UK ton
        "US ton": 907.185  # US ton
    }
    if from_ not in mass or to not in mass:
        raise ValueError("Unsupported mass unit")
    kg = value * mass[from_]
    return kg / mass[to]


def temperature(value, from_, to):
    from_, to = from_.lower(), to.lower()
    if from_ == "celcius" and to == "fahrenheit":
        if value< -273.15:
            raise ValueError("celcius can't be less than -273.15")
        else:
            return (value * 9/5) + 32
    elif from_ == "fahrenheit" and to == "celcius":
        if value< -457.87:
           raise ValueError("fahrenheit can't be less than -457.87")
        else:
            return (value - 32) * 5/9
    elif from_ == "celcius" and to == "kelvin":
        if value< -273.15:
            raise ValueError("celcius can't be less than -273.15")
        else:
            return value + 273.15
    elif from_ == "kelvin" and to == "celcius":
        if value<0:
            raise ValueError("kelvin can't be less than 0:")
        else:
            return value - 273.15
    elif from_ == "fahrenheit" and to == "kelvin":
        if value< -457.87:
           raise ValueError("fahrenheit can't be less than -457.87")
        else:
            return (value - 32) * 5/9 + 273.15
    elif from_ == "kelvin" and to == "fahrenheit":
        if value<0:
            raise ValueError("kelvin can't be less than 0")
        else:
            return (value - 273.15) * 9/5 + 32
    else:
        raise ValueError("Unsupported temperature unit")
    
def area(value, from_, to):
    area={
          'm**2': 1,
          'cm**2':0.0001,
          'ft**2':0.09290304,
          'in**2':0.00064516,
          'yd**2':0.83612736,
          'km**2':1000000,
          'acre':4046.8564224,
          'ares':100,
          'hectare':10000
    }
    if from_ not in area or to not in area:
        raise ValueError("Unsupported area unit")
    ar = value * area[from_]
    return ar / area[to]
def volume(value, from_, to):
    volume={
        'm**3':1,
        'cm**3':0.000001,
        'in**3':0.0000163871,
        'ft**3':0.0283168466,
        'yd**3':0.764554858,
        'km**3':1000000000,
        'ml':0.000001,
        'l':0.001,
        'US gallons':0.0037854188,
        'UK gallons':0.00454609
    }
    if from_ not in volume or to not in volume:
        raise ValueError("Unsupported volume unit")
    vol = value * volume[from_]
    return vol / volume[to]
def speed(value, from_, to):
    speed ={
        'm/s':1,
        'mph':0.0002777778,
        'km/s':1000,
        'km/h':0.2777778,
        'in/s':0.0254,
        'in/h':0.0000070556,
        'ft/s':0.3048,
        'ft/h':0.0000846667,
        'mi/s':1609.344,
        'mi/h':0.44704,
        'knot':0.5144444444
    }
    if from_ not in speed or to not in speed:
        raise ValueError("Unsupported speed unit")
    sp = value * speed[from_]
    return sp / speed[to]
def data(value, from_, to):
    data={
        'MB':1,
        'bit':0.000000125,
        'B':0.000001,
        'KB':0.001,
        'KiB':0.001024,
        'MiB':1.048576,
        'GB':1000,
        'Gib':1073.741824,
        'TB':1000000,
        'TiB':1099511.627776
    }
    if from_ not in data or to not in data:
        raise ValueError("Unsupported data unit")
    dat = value * data[from_]
    return dat / data[to]
def time(value, from_, to):
    time={
        'second':1,
        'milisecond':0.001,
        'minute':60,
        'hour':3600,
        'day':86400,
        'week':604800,
        'year':31536000
    }
    if from_ not in time or to not in time:
        raise ValueError("Unsupported time unit")
    ti = value * time[from_]
    return ti / time[to]

        





    
