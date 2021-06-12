import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { floatToReal, stringToFloat } from '../../helpers'

const iof = {
    card: 6.38,
    money: 1.1
};

function Result(props) {
    const classes = useStyles();
    const {
        quotation,
        typeBuy,
        price,
        tax
    } = props.inputData;

    const [results, setResults] = useState({
        dolarWithOutTax: 0,
        dolarWithTax: 0,
        realWithOutTax: 0,
        realWithTax: 0
    })

    useEffect(() => {
        const finalTaxes = ((tax + 100) / 100) * ((iof[typeBuy] + 100) / 100);

        const dolarWithOutTax = floatToReal(price);
        const dolarWithTax = floatToReal(price * finalTaxes);
        const realWithOutTax = floatToReal(price * stringToFloat(quotation));
        const realWithTax = floatToReal(price * finalTaxes * stringToFloat(quotation));
        setResults({
            dolarWithOutTax,
            dolarWithTax,
            realWithOutTax,
            realWithTax
        })
    }, [quotation, typeBuy, price, tax])
    
    return (
        <div>
            <div
                onClick={() => props.setPageForm(true)}
                className={classes.navButton}
            >
                <div className={classes.fontButton}>
                    <ArrowBackIcon style={{ color: '#8C9CAD' }} />
                    Voltar
                </div>
            </div>
            <div className={classes.announcement}>
                O resultado do cálculo é
            </div>
            <div className={classes.result}>
                R$ {results.realWithTax}
            </div>
            <div className={classes.infos}>
                Total em dólar sem imposto:
                <span className={classes.value}> U$ {results.dolarWithOutTax}</span>
            </div>
            <div className={classes.infos}>
                Total em dólar com imposto:
                <span className={classes.value}> U$ {results.dolarWithTax}</span>
            </div>
            <div className={classes.infos}>
                Total em real sem imposto:
                <span className={classes.value}> R$ {results.realWithOutTax}</span>
            </div>
            <div className={classes.infos}>
                Compra no {typeBuy === "card" ? "cartão" : "dinheiro"} e taxa de
                <span className={classes.value}> {tax}%</span>
            </div>
            <div className={classes.infos}>
                Cotação do dólar:
                <span className={classes.value}> $ 1,00 = R$ {floatToReal(quotation)}</span>
            </div>
        </div >
    );
}

const useStyles = makeStyles({
    navButton: {
        border: '1px solid #D7E0EB',
        boxShadow: '0px 8px 4px rgba(13, 17, 27, 0.08)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 56,
        backgroundColor: '#FFFFFF',
        cursor: 'pointer'
    },
    fontButton: {
        width: '100%',
        fontSize: 16,
        color: '#2E3742',
        fontWeight: '600',
        fontFamily: 'Noto Sans JP',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    announcement: {
        paddingTop: 32,
        color: '#45505E',
        paddingBottom: 8,
        fontWeight: '600',
        fontFamily: 'Noto Sans JP',
        fontSize: 20
    },
    result: {
        paddingBottom: 32,
        fontWeight: '600',
        fontFamily: 'Noto Sans JP',
        fontSize: 64,
        color: '#00AB63'
    },
    infos: {
        fontFamily: 'Roboto',
        fontWeight: 600,
        color: '#6E7E90'
    },
    value: {
        fontWeight: 500,
    }
})

export default Result;