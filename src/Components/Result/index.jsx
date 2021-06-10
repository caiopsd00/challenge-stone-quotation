import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Result(props) {
    const classes = useStyles();
    return (
        <div>
            <div
                onClick={() => props.setPageForm(true)}
                className={classes.navButton}
            >
                Ir para formulário
            </div>
            Resultado
        </div >
    );
}

const useStyles = makeStyles({
    navButton: { 
        paddingBottom: 30, 
        textDecoration: 'underline', 
        cursor: 'pointer' 
    }
});

export default Result;
