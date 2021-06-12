import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import Radio from '../../components/Radio';
import { makeStyles } from '@material-ui/core/styles';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import { floatToReal } from '../../helpers';

function Form(props) {
    const classes = useStyles();
    const [price, setPrice] = useState(0);
    const [tax, setTax] = useState(0);
    const [typeBuy, setTypeBuy] = useState('money');

    const listOfTypesBuy = [
        { value: 'money', label: 'Dinheiro' },
        { value: 'card', label: 'Cartão' }
    ];

    const convertPrice = () => {
        if(price !== 0 && tax !== 0){
            props.setInputData(inputData => ({
                ...inputData,
                typeBuy,
                price,
                tax
            }))
            props.setPageForm(false)
        }
    }

    return (
        <div>
            <div className={classes.label}>
                <TextInput
                    label="Dólar"
                    value={price}
                    setValue={setPrice}
                    money
                    onKeyPress={e => {
                        if(e.key === 'Enter'){
                            convertPrice()
                        }
                    }}
                />
                <TextInput
                    label="Taxa do Estado"
                    value={tax}
                    setValue={setTax}
                    percent
                    onKeyPress={e => {
                        if(e.key === 'Enter'){
                            convertPrice()
                        }
                    }}
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
                onClick={() => convertPrice()}
                className={
                    (price !== 0 && tax !== 0) ? 
                        classes.navButton
                    :
                        classes.navButtonDisabled
                }
            >
                <div className={classes.fontButton}>
                    <SyncAltIcon />
                    Converter
                </div>
            </div>
            <div className={classes.infos}>
                Cotação do dólar:
                <span className={classes.value}> R$ {floatToReal(props.inputData.quotation)} (atualiza a cada 30 segundos)</span>
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
    navButtonDisabled: {
        border: '1px solid #008B57',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 27,
        width: 149,
        height: 56,
        boxShadow: '0px 8px 4px rgba(13, 17, 27, 0.08)',
        backgroundColor: '#8C9CAD',
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
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    infos: {
        paddingTop: 20, 
        fontFamily: 'Roboto',
        fontWeight: 600,
        color: '#6E7E90'
    },
    value: {
        fontWeight: 500,
    }
});

export default Form;