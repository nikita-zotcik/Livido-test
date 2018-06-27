import React from 'react'
import { Button } from '../../../../smpl-components/index'
import defaultProps from '../../../../default'

export default class Greeting extends React.Component {
    render() {
        const { changeStep } = this.props;
        const { content } = this.props.data;
        const { btnPrimaryColor } = defaultProps.btnStyles;

        return (
            <div className="left-panel-block greeting">
                <div className="left-panel-container-header">
                    {content.container_header}
                </div>
                <div className="left-panel-container-text left-panel-container-content">
                    {content.header_content}
                </div>
                <img className="Fill-1" src={content.img} />
                <Button onChange={changeStep} title={'Næste →'} styles={{ backgroundColor: btnPrimaryColor }} />
            </div>
        )
    }
}
