import React from 'react';
import { Button, Input } from '../../../../smpl-components/index';
import defaultProps from '../../../../default';
import Validation from '../../../validation';


export default class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.data = {};
        this.selectData = this.selectData.bind(this);
        this.checkData = this.checkData.bind(this);
    }

    selectData(name, value) {
        let { data } = this.state;
        let stop = true;
        data.forEach((el, index) => {
            if (el.name === name) {
                console.log('333333333')
                data[index].value = value;
                stop = false;
                this.setState(data);
                return
            }
        })
        if (stop) {
            data.push({ name: name, value: value })
            this.setState(data);
        }
    }

    checkData() {
        const { data } = this.state;
        let succses = true;

        if (data.length < 4) {
            return false;
        }
        data.forEach((el) => {
            if (el.value.length === 0)
                succses = false
        })
        return succses;
    }

    render() {
        const { btnPrimaryColor } = defaultProps.btnStyles;
        const { changeStep } = this.props;
        const { content } = this.props.data;
        console.log('sdfsdf', this.state.data);

        return (
            <div className="left-panel-block">
                <div className="left-panel-container-header">
                    {content.container_header}
                </div>
                <div className="left-panel-container-text left-panel-container-content">
                    {content.header_content}
                </div>
                <div className="container-inp">
                    <Input title={'FORNAVN'} errorMes={'navnet er forkert'} error={(el) => { return Validation.validationName(el) }} onChange={(name, value) => { this.selectData(name, value) }} />
                    <Input title={'CVR NUMMER'} errorMes={'navnet er forkert'} error={(el) => { return Validation.validationName(el) }} onChange={(name, value) => { this.selectData(name, value) }} />
                </div>
                <div className="container-inp">
                    <Input title={'ADRESSE'} type={'email'} errorMes={'e-mail er forkert'} error={(el) => { return true}} onChange={(name, value) => { this.selectData(name, value) }} />
                </div>
                <div className="container-inp">
                    <Input title={'POSTNUMMER'} type={''} errorMes={'adgangskode er forkert'} error={(el) => { return true}} onChange={(name, value) => { this.selectData(name, value) }} />
                    <Input title={'BY'} type={''} errorMes={'adgangskode er forkert'} error={(el) => { return true}} onChange={(name, value) => { this.selectData(name, value) }} />
                </div>
                <div className="container-button">
                    <Button onChange={() => this.checkData() ? changeStep(true) : ''} title={'Næste →'} styles={{ backgroundColor: btnPrimaryColor }} />
                    <Button onChange={() => changeStep(false)} title={'Forrige'} className={'button button-back'} />
                </div>
            </div>
        )
    }
}
