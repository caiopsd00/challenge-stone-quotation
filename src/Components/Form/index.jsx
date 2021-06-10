import React, { useState } from 'react';
import TextInput from '../TextInput'
import { makeStyles } from '@material-ui/core/styles';

function Form(props) {
    const classes = useStyles();
    const [dolar, setDolar] = useState('0')
    const [tax, setTax] = useState('0')
    return (
        <div>
            <div className={classes.label}>
                <TextInput 
                    label="Dólar" 
                    value={dolar} 
                    setValue={setDolar} 
                    money 
                />
                <TextInput 
                    label="Taxa do Estado" 
                    value={tax} 
                    setValue={setTax} 
                    percent
                />
            </div>
            <div
                onClick={() => props.setPageForm(false)}
                className={classes.navButton}
            >
                Ir para resultado
            </div>
        </div >
    );
}

const useStyles = makeStyles({
    navButton: { 
        paddingTop: 10, 
        textDecoration: 'underline', 
        cursor: 'pointer' 
    },
    label: { 
        display: 'flex', 
        flexDirection: 'row' 
    }
});

export default Form;
