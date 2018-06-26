import React from 'react'
import {Button,Input} from '../../../../smpl-components/index'
import defaultProps from '../../../../default'

export default class Details extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.data = {};
    }

    render() {
        const {btnPrimaryColor} = defaultProps.btnStyles;
        const { changeStep } = this.props;
        const { content } = this.props.data;

        return (
                <div className="container">
                    <div className="left-panel-container-header">
                        {content.container_header}
                    </div>
                    <div className="left-panel-container-header-content">
                    {content.header_content}
                    </div>
                    <Input inputs={['FIRMANAVN','CVR NUMMER']}/>
                    <Input inputs={['ADRESSE']}/>
                    <Input inputs={['POSTNUMMER','BY']}/>
                    <div className="container-button">
                        <Button onChange={changeStep} title={'Næste →'} styles={{backgroundColor: btnPrimaryColor}}/>
                        <span type="button" className="Forrige" value="Forrige" onClick={() => changeStep(false)}>Forrige</span>
                    </div>
                </div>
        )
    }
}
