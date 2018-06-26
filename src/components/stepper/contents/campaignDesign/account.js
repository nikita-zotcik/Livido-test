import React from 'react'
import { Button, Input } from '../../../../smpl-components/index'
import defaultProps from '../../../../default'

console.log('Buttons', Button)
export default class Account extends React.Component {

    render() {
        const { changeStep } = this.props;
        const { content } = this.props.data;
        const { btnPrimaryColor } = defaultProps.btnStyles;

        return (
            <div className="container">
                <div className="left-panel-container-header">
                    {content.container_header}
                </div>
                <div className="left-panel-container-header-content">
                    {content.header_content}
                </div>
                <Input inputs={['FORNAVN', 'EFTERNAVN']} />
                <Input inputs={['Arbejdsmail', 'Mobilnummer på kontaktperson']} />
                <Input inputs={['VÆLG PASSWORD (min 8 karakterer)', 'GENTAG PASSWORD']} />

                <div className="container-checkbox">
                    <input type="checkbox" className="checkbox" />
                    <span type="button" className="container-checkbox-value">Jeg accepterer Likvido Inkasso ApS <u>handelsbetingelser</u> </span>
                </div>
                <div className="container-button">
                    <Button onChange={changeStep} title={'Næste →'} styles={{ backgroundColor: btnPrimaryColor }} />
                    <span type="button" className="Forrige" value="Forrige" onClick={() => changeStep(false)}>Forrige</span>
                </div>
            </div>
        )
    }
}
