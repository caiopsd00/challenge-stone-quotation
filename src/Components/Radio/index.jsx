import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
                        <div className={
                            props.select === item.value ?
                                classes.radioButtonSelected
                            :
                                classes.radioButton
                        }>
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
        paddingBottom: 16,
        fontWeight: 600,
        fontSize: 18
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
    radioButtonSelected: {
        marginRight: 5,
        border: '2px solid #008B57',
        width: 18,
        height: 18,
        borderRadius: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioButton: {
        marginRight: 5,
        border: '2px solid #8C9CAD',
        width: 18,
        height: 18,
        borderRadius: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    check: {
        backgroundColor: '#008B57',
        width: 12,
        height: 12,
        borderRadius: 12
    },
    radioText: {
        fontFamily: 'Roboto',
        fontWeight: '590',
        fontSize: 16,
    }
});

export default Radio;