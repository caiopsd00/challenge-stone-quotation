import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { smallScreen, largeScreen } from '../../commonStyles'

function Radio(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.label}>
                {props.label}
            </div>
            <div className={classes.content}>
                {props.list.map(item => (
                    <div
                        key={item.value}
                        className={classes.radio} onClick={() => props.setSelect(item.value)}
                    >
                        <div 
                            className={classes.radioButton}
                            style={props.select === item.value ? {border: '2px solid #008B57'} : {}}
                        >
                            {props.select === item.value ? (
                                <div className={classes.check} />
                            ) : (
                                false
                            )}
                        </div>
                        <div className={classes.radioText}>{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        padding: '16px 16px 0px 0px'
    },
    label: {
        fontFamily: 'Roboto',
        color: '#2E3742',
        fontWeight: 600,
        [smallScreen]: {
            paddingBottom: 8,
            fontSize: 9,
        },
        [largeScreen]: {
            paddingBottom: 16,
            fontSize: 18,
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
    },
    radio: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20
    },
    radioButton: {
        border: '2px solid #8C9CAD',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [smallScreen]: {
            marginRight: 2,
            width: 9,
            height: 9,
            borderRadius: 9,
        },
        [largeScreen]: {
            marginRight: 5,
            width: 18,
            height: 18,
            borderRadius: 18,
        },
    },
    check: {
        backgroundColor: '#008B57',
        [smallScreen]: {
            width: 6,
            height: 6,
            borderRadius: 6,
        },
        [largeScreen]: {
            width: 12,
            height: 12,
            borderRadius: 12,
        },
    },
    radioText: {
        color: '#2E3742',
        fontFamily: 'Roboto',
        fontWeight: '500',
        [smallScreen]: {
            fontSize: 8,
        },
        [largeScreen]: {
            fontSize: 16,
        },
    }
});

export default Radio;