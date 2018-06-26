import React from 'react';

const Input = ({ inputs = [], onChange = () => { }, styles = {} }) => {
    console.log(inputs)
    return (
        <div className="container-inp">
            {inputs.map((el, index) => {
                return <div className="input-block" key={index}>
                    <div className="input title">
                        {el}
                    </div>
                    <div>
                        <input className="input-value" onChange={onChange} />
                    </div>
                </div>
            })}
        </div>
    )
};


export default Input;