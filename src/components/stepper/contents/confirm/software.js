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
            img: 'https://assets.pcmag.com/media/images/471204-billy-logo.jpg?width=810&height=456',
            active: false
        }, {
            name: 'dinero',
            img: 'https://visibilis.dk/wp-content/uploads/2015/12/dinero-logo-300x113.jpg',
            active: false
        }, {
            name: 'bily',
            img: 'http://www.dkc.dk/filarkiv/Billeder/POS_Software/Economic-Tekst.PNG',
            active: false
        }, {
            name: 'unicota',
            img: 'https://iex.dk/wp-content/uploads/2016/08/uniconta_logo_transparent.png',
            active: false
        }, {
            name: 'Microsoft Dynamics',
            img: 'https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2011/10/Microsoft-Dynamics-Logo.png',
            active: false
        }];
    }

    render() {
        const { selectProgram } = this.state;
        const { btnPrimaryColor } = defaultProps.btnStyles;
        const { changeStep } = this.props;

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
                            return <div key={index} className={el.name === selectProgram ? 'accounting-program active' : 'accounting-program'} onClick={() => this.setState({ selectProgram: el.name })}>
                                <img src={el.img} />
                                <RadioButton status={el.name === selectProgram ? 'progress' : ''} />
                            </div>
                        })}
                        <div className={'Andet' === selectProgram ? 'accounting-program active' : 'accounting-program'} onClick={() => this.setState({ selectProgram: 'Andet' })}>
                            <span> Andet <br /> Hør mere om vores REST.API</span>
                            <RadioButton status={'Andet' === selectProgram ? 'progress' : ''} />
                        </div>
                    </div>
                    <div className="container-button">
                        <Button onChange={changeStep} title={'Næste →'} styles={{ backgroundColor: btnPrimaryColor }} />
                        {/* <Button onChange={() => changeStep(false)} title={'Forrige'} className={'button button-back'} /> */}
                    </div>
                </div>
            </div>
        )
    }
}
