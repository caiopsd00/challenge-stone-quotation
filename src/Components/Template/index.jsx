import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Template(props) {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <img src="../imgs/logo.jpeg" style={{ height: 81, width: 163, backgroundColor: "#FFF" }} alt="Logotipo da marca" />
                    <div style={{ marginLeft: 20 }}>
                        <div className={classes.date}>
                            14 de  janeiro | 21:00 UTC
                      </div>
                        <div className={classes.dataFont}>
                            Dados de câmbio disponibilizados pela Morningstar.
                      </div>
                    </div>
                </div>
                <div className={classes.contentData}>
                    {props.children}
                </div>
            </div>
        </div >
    );
}

const useStyles = makeStyles({
    background: {
        height: '100%',
        justifyItems: 'flex-end',
        backgroundImage: `url(/imgs/dolarBackground.jpeg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'contain',
    },
    container: {
        paddingTop: 20,
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        height: '70%'
    },
    header: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    date: {
        fontFamily: 'roboto',
        fontSize: 18,
        color: '#45505E',
        fontWeight: 600
    },
    dataFont: {
        fontFamily: 'roboto',
        fontSize: 16.41,
        color: '#8C9CAD'
    },
    contentData: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
});

export default Template;
