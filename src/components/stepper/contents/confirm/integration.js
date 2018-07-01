import React from 'react'
import { Button, Input } from '../../../../smpl-components/index'
import defaultProps from '../../../../default'
import Validation from '../../../validation'

export default class Integration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.data = [{ name: 'step 1', value: 'test test 1' }, { name: 'step 2', value: 'test test 2' }, {
            name: 'step 3',
            value: 'test test 3'
        }];
    }

    render() {
        const { btnPrimaryColor } = defaultProps.btnStyles;
        const { changeStep } = this.props;

        return (
            <div className="container">
                <div className="left-panel-block">
                    <div className="left-panel-container-header">
                        Opsæt Dinero integrationen
                    </div>
                    <div className="left-panel-container-header-content left-panel-container-text left-panel-container-content">
                        Du skal have en Dineo Pro account for at kunne opsætte integrationen. <br/>
                        Se nedenstående video guide, ring til vores hotline <a href='#'className="panel-bl-content">på 71 74 93 62 eller få os til at opsætte
                        integrationen </a>
                    </div>
                    <div className="left-panel-container-body">
                        <div>
                            <div className="container-inp">
                                <Input title={'Din dinero API nøgle'} placeholder={'Skriv din API nøgle '} errorMes={'API er forkert'} error={(el) => { return Validation.validationEmail(el) }} onChange={(name, value) => { this.selectData(name, value) }} />
                            </div>
                            <div className="container-inp">
                                <Input title={'Dit Dinero firma ID'} placeholder={'Skriv dit firma ID'}  errorMes={'ID er forkert'} error={(el) => { return Validation.validationEmail(el) }} onChange={(name, value) => { this.selectData(name, value) }} />
                            </div>
                        </div>
                        <div className="left-panel-container-body-content">
                            <span className="left-panel-container-body-content-title">Sådan gør du:</span>
                            <div>
                                {this.data.map((el, index) => {
                                    return <span key={index}>{el.name}: {el.value}</span>
                                })}
                            </div>
                            <span className="left-panel-container-body-content-footer"> Du kan også se vores video guide, <u>klik her</u> </span>
                        </div>
                    </div>
                    <div className="container-button">
                        <Button title={'Opsæt integration  →'} styles={{ backgroundColor: btnPrimaryColor }} />
                        <Button onChange={() => changeStep(false)} title={'Afbryd'} className={'button button-back'} />
                    </div>
                </div>
            </div>
        )
    }
}
