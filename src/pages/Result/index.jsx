import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { floatToReal, stringToFloat } from '../../helpers'
import { smallScreen } from '../../commonStyles'


// const smallScreen = '@media(max-width: 869px), (max-height: 629px)'; 
const mediumResults = '@media(min-width: 770px and max-width: 999px), (min-height: 550px)'; 
const largeResults = '@media(min-width: 1000px)'; 
const largeWithWidthResults = largeResults + 'and (max-width: 1199px)';
const extraLargeResults = '@media(min-width: 1200px)';

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
                    <ArrowBackIcon className={classes.iconBack} />
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
        backgroundColor: '#FFFFFF',
        cursor: 'pointer',
        [smallScreen]: {
            fontSize: 8,
            width: 60,
            height: 28,
        },
        [mediumResults]: {
            fontSize: 12,
            width: 90,
            height: 42,
        },
        [largeResults]: {
            fontSize: 16,
            width: 120,
            height: 56,
        },
    },
    fontButton: {
        width: '100%',
        color: '#2E3742',
        fontWeight: '600',
        fontFamily: 'Noto Sans JP',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        [smallScreen]: {
            fontSize: 8
        },
        [mediumResults]: {
            fontSize: 12
        },
        [largeResults]: {
            fontSize: 16
        },
    },
    iconBack: {
        color: '#8C9CAD',
        [smallScreen]: {
            fontSize: 8
        },
        [mediumResults]: {
            fontSize: 12
        },
        [largeResults]: {
            fontSize: 16
        },
    },
    announcement: {
        color: '#45505E',
        fontWeight: '600',
        fontFamily: 'Noto Sans JP',
        [smallScreen]: {
            paddingTop: 8,
            paddingBottom: 2,
            fontSize: 10,
        },
        [mediumResults]: {
            paddingTop: 16,
            paddingBottom: 4,
            fontSize: 10,
        },
        [largeWithWidthResults]: {
            paddingTop: 24,
            paddingBottom: 6,
            fontSize: 15,
        },
        [extraLargeResults]: {
            paddingTop: 32,
            paddingBottom: 8,
            fontSize: 20,
        },
    },
    result: {
        flexWrap: 'wrap',
        fontWeight: '600',
        fontFamily: 'Noto Sans JP',
        color: '#00AB63',
        [smallScreen]: {
            fontSize: 16,
            paddingBottom: 8,
        },
        [mediumResults]: {
            fontSize: 28,
            paddingBottom: 16,
        },
        [largeWithWidthResults]: {
            fontSize: 48,
            paddingBottom: 26,
        },
        [extraLargeResults]: {
            fontSize: 64,
            paddingBottom: 32,
        },
    },
    directionRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '@media(max-width: 869px)': {
            fontSize: 10
        },
        '@media(min-width: 870px)': {
            fontSize: 14
        },
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