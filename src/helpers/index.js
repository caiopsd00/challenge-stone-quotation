export function toReal(value){
    let newValue = (parseFloat(value) * 100)
    const floorValue = Math.floor(newValue)
    if(newValue - floorValue > 0){
        newValue = Math.ceil(newValue);
    }
    newValue = newValue.toString();
    const number = newValue.substring(0, (newValue.length - 2));
    const decimal = newValue.substring((newValue.length - 2), (newValue.length));
    return number + ',' + decimal
}

export function toFloat(value){
    return parseFloat(value.replace(',', '.'))
}