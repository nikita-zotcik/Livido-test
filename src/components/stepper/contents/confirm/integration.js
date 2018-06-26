import React from 'react'
import {Button} from '../../../../smpl-components/index'
import defaultProps from '../../../../default'

export default class Integration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.data = [{name: 'step 1', value: 'test test 1'}, {name: 'step 2', value: 'test test 2'}, {
            name: 'step 3',
            value: 'test test 3'
        }];
    }

    render() {
        const {btnPrimaryColor} = defaultProps.btnStyles;
        const { changeStep } = this.props;

        return (
            <div className="left-panel-container">
                <div className="container">
                    <div className="left-panel-container-header">
                        Opsæt Dinero integrationen
                    </div>
                    <div className="left-panel-container-header-content">
                        Du skal have en Dineo Pro account for at kunne opsætte integrationen.
                        Se nedenstående video guide, ring til vores hotline på 71 74 93 62 eller få os til at opsætte
                        integrationen
                    </div>
                    <div>
                        <div>
                            <div className="container-inp">
                                <div className="Firmanavn">
                                    Fornavn
                                </div>
                                <div>
                                    <input className="BG"/>
                                </div>
                            </div>
                            <div className="container-inp">
                                <div className="Firmanavn">
                                    Fornavn
                                </div>
                                <div>
                                    <input className="BG"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>Sådan gør du:</span>
                            {this.data.map((el, index) => {
                                return <span key={index}>{el.name}: {el.value}</span>
                            })}
                        </div>
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
