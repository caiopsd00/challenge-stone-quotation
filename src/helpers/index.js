export function inputToReal(value){
    switch (value.length) {
        case 1:
            return ('0,0' + value);
        case 2:
            return ('0,' + value);
        default:
            const number = value.substring(0, (value.length - 2));
            const decimal = value.substring((value.length - 2), (value.length));
            return (number + ',' + decimal);
    }
}

export function floatToReal(value) {
    let newValue = roundReal(value).toString();
    return inputToReal(newValue);
}

export function roundReal(value) {
    let newValue = (parseFloat(value) * 100)
    const floorValue = Math.floor(newValue)
    if(newValue - floorValue < 0.0001 && newValue - floorValue > 0){
        newValue = floorValue;
    }else if(newValue - floorValue < 1){
        newValue = Math.ceil(newValue);
    }
    return newValue;
}

export function stringToFloat(value) {
    return parseFloat(value.replace(',', '.'))
}