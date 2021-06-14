import React, { useState, useEffect } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import { inputToReal } from '../../helpers';

function TextInput(props) {
    const classes = useStyles();
    const [formattedValue, setFormattedValue] = useState('0');

    const parseString = (value) => {
        const newValue = (value * 100);
        const ceilValue = Math.ceil(newValue);
        if (ceilValue - newValue > 0.5) {
            return Math.floor(newValue).toString()
        } else {
            return ceilValue.toString();
        }
    }

    const formatValue = (value) => {
        if (props.money) {
            setFormattedValue('$' + inputToReal(value));
        }
        if (props.percent) {
            setFormattedValue(inputToReal(value) + '%');
        }
    }

    useEffect(() => {
        formatValue(parseString(props.value));
    }, [props.value]);

    const removeZeros = (value) => {
        let finalValue = value;
        if (value === '') {
            finalValue = 0;
        } else {
            let cleanValue = value;
            if (value[0] === '0') {
                cleanValue = value.slice(-1);
            }
            finalValue = cleanValue;
        }
        props.setValue((parseFloat(finalValue) / 100));
    }

    const getNumbers = (newFormatted) => {
        let newWord = "";
        for(let newIterator = 0; newIterator <= newFormatted.length; newIterator++){
            const letter = parseInt(newFormatted[newIterator]);
            if((letter === 0 && newWord.length > 0) || letter > 0 || letter <= 9){
                newWord += letter;
            }
        }
        if(newWord !== ''){
            props.setValue((parseFloat(newWord) / 100));
        }else{
            props.setValue(0);
        }
    }

    const verifyPaste = (oldFormatted, newFormatted) => {
        let biggerWord = oldFormatted;
        let minorWord = newFormatted;
        if(oldFormatted.length < newFormatted.length){
            biggerWord = newFormatted;
            minorWord = oldFormatted;
        }
        let differentLetters = 0;
        let minorIterator = 0;
        for(let biggerIterator = 0; biggerIterator <= biggerWord.length; biggerIterator++){
            if(minorIterator === minorWord.length){
                if(biggerIterator + 1 === biggerWord.length || biggerIterator === biggerWord.length){
                    return true;
                }else{
                    getNumbers(newFormatted);
                    return false;
                }
            }
            if(biggerWord[biggerIterator] === minorWord[minorIterator]){
                minorIterator++;
            }else if(differentLetters < 1){
                differentLetters++;
            }else{
                getNumbers(newFormatted);
                return false;
            }
        }
    }

    const handleChange = (newValue) => {
        const oldValue = parseString(props.value);
        if(verifyPaste(formattedValue, newValue)){
            if (formattedValue.length > newValue.length) {
                removeZeros(oldValue.slice(0, -1));
            } else {
                let iteratorOld = (formattedValue.length - 1);
                for (let iterator = (newValue.length - 1); iterator >= 0; iterator--) {
                    if (newValue[iterator] !== formattedValue[iteratorOld]) {
                        if (newValue[iterator] !== ' ') {
                            if (Number.isInteger(parseInt(newValue[iterator]))) {
                                removeZeros(oldValue + newValue[iterator]);
                            }
                        }
                        break;
                    }
                    iteratorOld--;
                }
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
                    if (event.target.value.length <= 17) {
                        handleChange(event.target.value);
                    }
                }}
                onKeyPress={props.onKeyPress}
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
        color: '#2E3742',
        fontWeight: 600,
        '@media(max-height: 549px) and (max-width: 769px)': {
            fontSize: 9,
            paddingBottom: 8,
        },
        '@media(min-height: 550px), (min-width: 770px)': {
            fontSize: 18,
            paddingBottom: 16,
        },
    },
    input: {
        color: '#2E3742',
        fontFamily: 'Noto Sans JP',
        borderRadius: 4,
        boxShadow: '0px 8px 4px 0px #0D111B14',
        border: '1px solid #D7E0EB',
        '@media(max-height: 549px) and (max-width: 769px)': {
            fontSize: 8,
            height: 28,
            width: 84,
        },
        '@media(min-height: 550px), (min-width: 770px)': {
            fontSize: 16,
            height: 56,
            width: 168,
        },
    },
    cleanInput: {
        color: '#8C9CAD',
        fontFamily: 'Noto Sans JP',
        borderRadius: 4,
        boxShadow: '0px 8px 4px 0px #0D111B14',
        border: '1px solid #D7E0EB',
        '@media(max-height: 549px) and (max-width: 769px)': {
            fontSize: 8,
            height: 28,
            width: 84,
        },
        '@media(min-height: 550px), (min-width: 770px)': {
            fontSize: 16,
            height: 56,
            width: 168,
        },
    }
});

export default TextInput;