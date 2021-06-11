import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import Radio from '../../components/Radio';
import { makeStyles } from '@material-ui/core/styles';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

function Form(props) {
    const classes = useStyles();
    const [dolar, setDolar] = useState('0');
    const [tax, setTax] = useState('0');
    const [typeBuy, setTypeBuy] = useState('money');

    const listOfTypesBuy = [
        { value: 'money', label: 'Dinheiro' },
        { value: 'card', label: 'Cartão' }
    ];

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
            <div style={{ paddingTop: 15 }}>
                <Radio
                    label="Tipo de compra"
                    list={listOfTypesBuy}
                    select={typeBuy}
                    setSelect={setTypeBuy}
                />
            </div>
            <div
                onClick={() => props.setPageForm(false)}
                className={classes.navButton}
            >
                <div className={classes.fontButton}>
                    <SyncAltIcon />
                    Converter
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.quotationTitle}>
                    Cotação:    
                </div> 
                R$ {props.results.quotation}
            </div>
        </div >
    );
}

const useStyles = makeStyles({
    navButton: {
        border: '1px solid #008B57',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 27,
        width: 149,
        height: 56,
        boxShadow: '0px 8px 4px rgba(13, 17, 27, 0.08)',
        backgroundColor: '#00AB63',
        cursor: 'pointer'
    },
    label: {
        display: 'flex',
        flexDirection: 'row'
    },
    fontButton: {
        width: '100%',
        fontSize: 16,
        fontFamily: 'Noto Sans JP',
        color: '#FFF',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    info: {
        paddingTop: 20,
        fontSize: 14,
        fontFamily: 'Noto Sans JP',
        display: 'flex',
        flexDirection: 'row'
    },
    quotationTitle: {
        fontWeight: '600', 
        paddingRight: 4
    }
});

export default Form;