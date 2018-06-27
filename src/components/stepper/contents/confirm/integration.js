import React from 'react'
import { Button, Input } from '../../../../smpl-components/index'
import defaultProps from '../../../../default'

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
                    <div className="left-panel-container-header-content">
                        Du skal have en Dineo Pro account for at kunne opsætte integrationen.
                        Se nedenstående video guide, ring til vores hotline på 71 74 93 62 eller få os til at opsætte
                        integrationen
                    </div>
                    <div className="left-panel-container-body">
                        <div>
                            <Input inputs={['Din dinero API nøgle']} />
                            <Input inputs={['Dit Dinero firma ID']} />
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
                        <Button title={'Opsæt nteraton →'} styles={{ backgroundColor: btnPrimaryColor }} />
                        <Button onChange={() => changeStep(false)} title={'Afbryd'} className={'button button-back'} />
                    </div>
                </div>
            </div>
        )
    }
}
