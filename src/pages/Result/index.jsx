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
        <>
            <div
                onClick={() => props.setPageForm(true)}
                className={classes.navButton}
            >
                <div className={classes.fontButton}>
                    <ArrowBackIcon style={{ color: '#8C9CAD' }} />
                    Voltar
                </div>
            </div>
            <div>
                <div className={classes.announcement}>
                    O resultado do cálculo é
                </div>
                <div className={classes.result}>
                    R$ {results.realWithTax}
                </div>
            </div>
            <div className={classes.directionRow}>
                <div className={classes.infos}>
                    Total em dólar com imposto:
                </div>
                <div className={classes.value}>
                    U$ {results.dolarWithTax}
                </div>
            </div>
            <div className={classes.directionRow}>
                <div className={classes.infos}>
                    Total em dólar sem imposto:
                </div>
                <div className={classes.value}>
                    U$ {results.dolarWithOutTax}
                </div>
            </div>
            <div className={classes.directionRow}>
                <div className={classes.infos}>
                    Total em real sem imposto:
                </div>
                <div className={classes.value}>
                    R$ {results.realWithOutTax}
                </div>
            </div>
            <div className={classes.directionRow}>
                <div className={classes.infos}>
                    Compra no {typeBuy === "card" ? "cartão" : "dinheiro"} e taxa de
                </div>
                <div className={classes.value}>
                    {tax}%
                </div>
            </div>
            <div className={classes.directionRow}>
                <div className={classes.infos}>
                    Cotação do dólar:
                </div>
                <div className={classes.value}>
                    $ 1,00 = R$ {floatToReal(quotation)}
                </div>
            </div>
        </>
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
        flexWrap: 'wrap',
        fontWeight: '600',
        fontFamily: 'Noto Sans JP',
        color: '#00AB63',
        '@media(max-width: 599px)': {
            fontSize: 30,
            paddingBottom: 10,
        },
        '@media(min-width: 600px) and (max-width: 1199px)': {
            fontSize: 48,
            paddingBottom: 20,
        },
        '@media(min-width: 1200px)': {
            fontSize: 64,
            paddingBottom: 32,
        },
    },
    directionRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    infos: {
        paddingRight: 5,
        fontFamily: 'Roboto',
        fontWeight: 600,
        color: '#6E7E90'
    },
    value: {
        fontWeight: 500,
        fontFamily: 'Roboto',
        color: '#6E7E90'
    }
})

export default Result;