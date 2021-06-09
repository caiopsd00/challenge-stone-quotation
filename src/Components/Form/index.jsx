import React from 'react';

function Form(props) {
    return (
        <div>
            <div 
                onClick={() => props.setPageForm(false)}
                style={{paddingBottom: 30, textDecoration: 'underline', cursor: 'pointer'}}
            >
                Ir para resultado
            </div>
            Formulário
        </div >
    );
}

export default Form;
