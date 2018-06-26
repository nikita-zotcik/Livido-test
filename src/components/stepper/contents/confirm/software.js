import React from 'react';
import {Button, Input} from '../../../../smpl-components/index'
import defaultProps from '../../../../default'

export default class Software extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            selectProgram: ''
        };
        this.data = {};
        this.accountingProgram = [{
            name: 'e-conomic',
            active: false
        }, {
            name: 'dinero',
            active: false
        }, {
            name: 'bily',
            active: false
        }, {
            name: 'unicota',
            active: false
        }, {
            name: 'Microsoft Dynamics',
            active: false
        }, {
            name: 'Andet',
            active: false
        }];
    }

    render() {
        const { selectProgram } = this.state;
        const {btnPrimaryColor} = defaultProps.btnStyles;
        const { changeStep } = this.props;
        console.log('yep', selectProgram)
        return (
            <div className="left-panel-container">
                <div className="container">
                    <div className="left-panel-container-header">
                        Hvilket regnskabsprogram bruger du Maximilian?
                    </div>
                    <div className="left-panel-container-header-content">
                        Sæt din inddrivelse på automatpilot ved at connecte dit regnskabsprogram. Det tager under 2 minutter at opsætte integreationen og kræver ingen teknisk kunnen.
                    </div>
                    <div className="container-accounting-program">
                        {this.accountingProgram.map((el, index) => {
                            return <div key={index} className={el.name === selectProgram ? 'accounting-program active' : 'accounting-program'} onClick={() => this.setState({ selectProgram: el.name })}>
                                <img className="logo-accounting-program" />
                                <img src="/img/checkbox.png" />
                            </div>
                        })}
                    </div>
                    <div className="container-button">
                    <Button onChange={changeStep} title={'Næste →'} styles={{backgroundColor: btnPrimaryColor}}/>
                        <span type="button" className="Forrige" value="Forrige" onClick={() => changeStep(false)}>Forrige</span>
                    </div>

                </div>
            </div>
        )
    }
}
