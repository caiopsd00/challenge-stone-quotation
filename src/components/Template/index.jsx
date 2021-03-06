import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { smallScreen, largeScreen } from '../../commonStyles'

const formatMonth = (date) => {
    const numericMonth = date.getUTCMonth();
    switch(numericMonth){
        case 0:
            return "Janeiro";
        case 1:
            return "Fevereiro";
        case 2:
            return "Março";
        case 3:
            return "Abril";
        case 4:
            return "Maio";
        case 5:
            return "Junho";
        case 6:
            return "Julho";
        case 7:
            return "Agosto";
        case 8:
            return "Setembro";
        case 9:
            return "Outubro";
        case 10:
            return "Novembro";
        case 11:
            return "Dezembro";
        default:
            return "";
    }
}
function Template(props) {
    const classes = useStyles();
    const [now, setNow] = useState(null);

    useEffect(() => {
        const d = new Date();
        const hour = d.getUTCHours() < 9 ? "0" + d.getUTCHours() : d.getUTCHours();
        const minute = d.getUTCMinutes() < 9 ? "0" + d.getUTCMinutes() : d.getUTCMinutes();
        const formattedDate = d.getUTCDate() + " de " + formatMonth(d) + " | " + hour + 
            ":" + minute + " UTC" 
        setNow(formattedDate);
    }, [props.children])

    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <img 
                        src="../imgs/logo.jpeg" 
                        className={classes.logo} 
                        alt="Logotipo da marca" 
                    />
                    <div style={{ marginLeft: 48 }}>
                        <div className={classes.date}>
                            {now}
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
        </div>
    );
}

const useStyles = makeStyles({
    background: {
        height: '100%',
        justifyItems: 'flex-end',
        backgroundImage: `url(/imgs/dolarBackground.jpeg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        backgroundSize: 'contain',
    },
    container: {
        paddingTop: 20,
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        height: '70%'
    },
    header: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    date: {
        fontFamily: 'roboto',
        color: '#45505E',
        fontWeight: 600,
        [smallScreen]: {
            fontSize: 10,
        },
        [largeScreen]: {
            fontSize: 18,
        },
    },
    logo: { 
        backgroundColor: '#FFF',
        [smallScreen]: {
            width: 90.59
        },
        [largeScreen]: {
            width: 163
        },
    },
    dataFont: {
        fontFamily: 'roboto',
        color: '#8C9CAD',
        [smallScreen]: {
            fontSize: 9.12,
        },
        [largeScreen]: {
            fontSize: 16.41,
        },
    },
    contentData: {
        [smallScreen]: {
            marginTop: 20,
        },
        [largeScreen]: {
            marginTop: 50,
        },
        width: '100%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
});

export default Template;