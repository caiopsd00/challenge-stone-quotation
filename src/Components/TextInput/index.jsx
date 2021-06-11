import React, { useState, useEffect } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';

function TextInput(props) {
    const classes = useStyles();
    const [formattedValue, setFormattedValue] = useState('0');
    
    const parseString = (value) => {
        const newValue = (value * 100);
        const ceilValue = Math.ceil(newValue);
        if(ceilValue - newValue > 0.5){
            return Math.floor(newValue).toString()
        } else {
            return ceilValue.toString();
        }
    }

    const formatValue = (value) => {
        switch (value.length) {
            case 1:
                if (props.money) {
                    setFormattedValue('$0,0' + value);
                }
                if (props.percent) {
                    setFormattedValue('0,0' + value + '%');
                }
                break;
            case 2:
                if (props.money) {
                    setFormattedValue('$0,' + value);
                }
                if (props.percent) {
                    setFormattedValue('0,' + value + '%');
                }
                break;
            default:
                const number = value.substring(0, (value.length - 2));
                const decimal = value.substring((value.length - 2), (value.length));
                if (props.money) {
                    setFormattedValue('$' + number + ',' + decimal);
                }
                if (props.percent) {
                    setFormattedValue(number + ',' + decimal + '%');
                }
                break;
        }
    }

    useEffect(() => {
        if (props.money) {
            formatValue(parseString(props.value));
        }
        if (props.percent) {
            formatValue(parseString(props.value));
        }
    }, [props.money, props.value, props.percent]);

    const removeZeros = (value) => {
        let finalValue = value;
        if (value === '') {
            finalValue = 0;
            if (props.money) {
                setFormattedValue('$0,00');
            }
            if (props.percent) {
                setFormattedValue('0,00%');
            }
        } else {
            let cleanValue = value;
            if (value[0] === '0') {
                cleanValue = value.slice(-1);
            }
            finalValue = cleanValue;
        }
        props.setValue((parseFloat(finalValue) / 100));
    }

    const handleChange = (newValue) => {
        const oldValue = parseString(props.value);
        if (formattedValue.length > newValue.length) {
            removeZeros(oldValue.slice(0, -1));
        } else {
            let iteratorOld = (formattedValue.length - 1);
            for (let iterator = (newValue.length - 1); iterator >= 0; iterator--) {
                if (newValue[iterator] !== formattedValue[iteratorOld]) {
                    if (newValue[iterator] !== ' ') {
                        removeZeros(oldValue + newValue[iterator]);
                    }
                    break;
                }
                iteratorOld--;
            }
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.label}>
                {props.label}
            </div>
            <OutlinedInput
                className={props.value === 0 ? classes.cleanInput : classes.input}
                value={formattedValue}
                onChange={event => {
                    if(event.target.value.length <= 17){
                        handleChange(event.target.value);
                    }
                }}
            />
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        padding: '16px 16px 0px 0px'
    },
    label: {
        fontFamily: 'Roboto',
        paddingBottom: 16,
        fontWeight: 600,
        fontSize: 18
    },
    input: {
        color: 'black',
        fontFamily: 'Noto Sans JP',
        fontSize: 16,
        borderRadius: 4,
        boxShadow: '0px 8px 4px 0px #0D111B14',
        border: '1px solid #D7E0EB',
        height: 56,
        width: 168
    },
    cleanInput: {
        color: 'grey',
        fontFamily: 'Noto Sans JP',
        fontSize: 16,
        borderRadius: 4,
        boxShadow: '0px 8px 4px 0px #0D111B14',
        border: '1px solid #D7E0EB',
        height: 56,
        width: 168
    }
});

export default TextInput;