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
    let newValue = (parseFloat(value) * 100)
    const floorValue = Math.floor(newValue)
    if (newValue - floorValue > 0) {
        newValue = Math.ceil(newValue);
    }
    newValue = newValue.toString();
    return inputToReal(newValue);
}

export function toFloat(value) {
    return parseFloat(value.replace(',', '.'))
}