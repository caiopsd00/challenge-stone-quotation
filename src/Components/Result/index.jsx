import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Result(props) {
    const classes = useStyles();
    return (
        <div>
        <div
            onClick={() => props.setPageForm(true)}
            className={classes.navButton}
        >
            <div className={classes.fontButton}>
                <ArrowBackIcon style={{color: '#8C9CAD'}} />
                Voltar
            </div>
        </div>
            <div className={classes.announcement}>
                O resultado do cálculo é
            </div>
            <div className={classes.result}>
                R$ 240,56
            </div>
            <div className={classes.taxes}>
                Compra no dinheiro e taxa de
                <span className={classes.value}> 5.3%</span>
            </div>
            <div className={classes.taxes}>
                Cotação do dólar: 
                <span className={classes.value}> $ 1,00 = R$ 5,20</span>
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
    taxes: {
        fontFamily: 'Roboto',
        fontWeight: 600,
        color: '#6E7E90'
    },
    value: {
        fontWeight: 500,
    }
});

export default Result;
