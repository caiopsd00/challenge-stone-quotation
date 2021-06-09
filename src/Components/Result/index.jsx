import React from 'react';

function Result(props) {
    return (
        <div>
            <div 
                onClick={() => props.setPageForm(true)}
                style={{paddingBottom: 30, textDecoration: 'underline', cursor: 'pointer'}}
            >
                Ir para formulário
            </div>
            Resultado
        </div >
    );
}

export default Result;
