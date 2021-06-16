import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import Radio from '../../components/Radio';
import { makeStyles } from '@material-ui/core/styles';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import { floatToReal } from '../../helpers';
import { smallScreen, largeScreen } from '../../commonStyles'

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
        if (price !== 0 && tax !== 0) {
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
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                <div className={classes.inputs}>
                    <TextInput
                        label="Dólar"
                        value={price}
                        setValue={setPrice}
                        money
                        onKeyPress={e => {
                            if (e.key === 'Enter') {
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
                            if (e.key === 'Enter') {
                                convertPrice()
                            }
                        }}
                    />
                </div>
                <div style={{ paddingBottom: 27 }}>
                    <div>
                        <Radio
                            label="Tipo de compra"
                            list={listOfTypesBuy}
                            select={typeBuy}
                            setSelect={setTypeBuy}
                        />
                    </div>
                </div>
            </div>
            <div className={classes.footerContainer}>
                <div
                    onClick={() => convertPrice()}
                    className={classes.navButton}
                    style={(price === 0 || tax === 0) ? {backgroundColor: '#8C9CAD'} : {}}
                >
                    <div className={classes.fontButton}>
                        <SyncAltIcon className={classes.sizeIcon} />
                        Converter
                    </div>
                </div>
                <div className={classes.directionRow}>
                    <div className={classes.infos}>
                        Cotação do dólar:
                    </div>
                    <div className={classes.value}>
                        R$ {floatToReal(props.inputData.quotation)} (atualiza a cada 30 segundos)
                    </div>
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        '@media(max-height: 400px) and (min-width: 1000px)': {
            display: 'flex', 
            flexDirection: 'row'
        },
    },
    inputContainer: {
        '@media(max-height: 549px)': {
            display: 'flex', 
            flexDirection: 'row'
        },
    },
    footerContainer: {
        '@media(max-height: 400px) and (min-width: 1200px), (max-height: 500px) and (min-width: 200px)': {
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
    },
    navButton: {
        border: '1px solid #008B57',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 149,
        height: 56,
        boxShadow: '0px 8px 4px rgba(13, 17, 27, 0.08)',
        backgroundColor: '#00AB63',
        cursor: 'pointer',
        [smallScreen]: {
            fontSize: 8,
            height: 28,
            width: 84,
        },
        [largeScreen]: {
            fontSize: 16,
            height: 56,
            width: 168,
        },
    },
    inputs: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 15
    },
    fontButton: {
        width: '100%',
        fontFamily: 'Noto Sans JP',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        [smallScreen]: {
            fontSize: 8,
        },
        [largeScreen]: {
            fontSize: 16,
        },
    },
    sizeIcon: {
        [smallScreen]: {
            fontSize: 'small',
        }
    },
    directionRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '@media(max-height: 500px), (max-width: 930px)': {
            width: '60%',
        },
        '@media(max-height: 500px)': {
            marginLeft: 16
        },
        '@media(min-height: 400px)': {
            marginTop: 10
        },
    },
    infos: {
        paddingRight: 5,
        fontFamily: 'Roboto',
        fontWeight: 600,
        color: '#6E7E90',
        [smallScreen]: {
            fontSize: 10,
        },
    },
    value: {
        fontWeight: 500,
        fontFamily: 'Roboto',
        color: '#6E7E90',
        [smallScreen]: {
            fontSize: 10,
        },
    }
});

export default Form;