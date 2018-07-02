import React from 'react';
import { Button, Input, RadioButton } from '../../../../smpl-components/index'
import defaultProps from '../../../../default'

export default class Software extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectProgram: ''
        };
        this.data = {};
        this.accountingProgram = [{
            name: 'e-conomic',
            img: 'http://www.dkc.dk/filarkiv/Billeder/POS_Software/Economic-Tekst.PNG',
            active: false
        }, {
            name: 'dinero',
            img: 'https://visibilis.dk/wp-content/uploads/2015/12/dinero-logo-300x113.jpg',
            active: false
        }, {

            name: 'billy',
            img: 'https://assets.pcmag.com/media/images/471204-billy-logo.jpg?width=810&height=456',
            active: false
        }];
    }

    render() {
        const { selectProgram } = this.state;
        const { btnPrimaryColor } = defaultProps.btnStyles;
        const { changeStep, saveProgram } = this.props;

        return (
            <div className="container">
                <div className="left-panel-block">
                    <div className="left-panel-container-header">
                        Hvilket regnskabsprogram bruger du Maximilian?
                    </div>
                    <div className="left-panel-container-text left-panel-container-content">
                        Sæt din inddrivelse på automatpilot ved at connecte dit regnskabsprogram. Det tager under 2 minutter at opsætte integreationen og kræver ingen teknisk kunnen.
                    </div>
                    <div className="container-accounting-program">
                        {this.accountingProgram.map((el, index) => {
                            return <div key={index}
                                className={el.name === selectProgram ? 'accounting-program active' : 'accounting-program'}
                                onClick={() => { this.props.saveProgram(el.name); this.setState({ selectProgram: el.name }) }}>
                                <img src={el.img} />
                                <RadioButton status={el.name === selectProgram ? 'progress' : ''} />
                            </div>
                        })}
                    </div>
                    <div className="left-panel-container-text left-panel-container-body">
                        Understotter vi endnu ikke dit regnskabsprogram? Skriv til os pa kontakt@likvido.dk og fa tilsendt info om vores REST.API og andre integrationsmuligheder.
                    </div>
                    <div className="container-button">
                        <Button onChange={() => selectProgram !== '' ? changeStep(true) : ''} title={'Næste →'} styles={{ backgroundColor: btnPrimaryColor }} />
                        {/* <Button onChange={() => changeStep(false)} title={'Forrige'} className={'button button-back'} /> */}
                    </div>
                </div>
            </div>
        )
    }
}
