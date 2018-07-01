import React from 'react'
import { Button, Input, Checkbox,Modal } from '../../../../smpl-components/index'
import defaultProps from '../../../../default'
import Validation from '../../../validation'

export default class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            password: ''
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
                data[index].value = value;
                'VÆLG PASSWORD (min 8 karakterer)' === name &&
                this.setState({password: value});
                stop = false;
                this.setState(data);
                return
            }
        })
        if (stop) {
            'VÆLG PASSWORD (min 8 karakterer)' === name &&
                this.setState({password: value});
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
        const { changeStep } = this.props;
        const { password } = this.state;
        const { content } = this.props.data;
        const { btnPrimaryColor } = defaultProps.btnStyles;
        console.log('sdfsdf', this.state.data);
        return (
            <div className="left-panel-block">
            {/* <Modal/> */}
                <div className="left-panel-container-header">
                    {content.container_header}
                </div>
                <div className="left-panel-container-text left-panel-container-content">
                    {content.header_content}
                </div>

                <div className="container-inp">
                    <Input title={'FORNAVN'} placeholder={'Skriv dit fornavn'} errorMes={'navnet er forkert'} error={(el) => { return Validation.validationName(el) }} onChange={(name, value) => { this.selectData(name, value) }} />
                    <Input title={'EFTERNAVN'} placeholder={'Skriv dit efternavn'} errorMes={'navnet er forkert'} error={(el) => { return Validation.validationName(el) }} onChange={(name, value) => { this.selectData(name, value) }} />
                </div>
                <div className="container-inp">
                    <Input title={'Arbejdsmail'} placeholder={'E-mail (arbejdsmail) '} type={'email'} errorMes={'e-mail er forkert'} error={(el) => { return Validation.validationEmail(el) }} onChange={(name, value) => { this.selectData(name, value) }} />
                    <Input title={'Mobilnummer på kontaktperson'} placeholder={'Mobilnummer (arbejde)'} errorMes={'nummeret er forkert'} error={(el) => { return Validation.validationName(el) }} onChange={(name, value) => { this.selectData(name, value) }} />
                </div>
                <div className="container-inp">
                    <Input title={'VÆLG PASSWORD (min 8 karakterer)'} placeholder={'Skriv et password '}  type={'password'} errorMes={'adgangskode er forkert'} error={(el) => { return Validation.validationPass(el) }} onChange={(name, value) => { this.selectData(name, value) }} />
                    <Input title={'GENTAG PASSWORD'} type={'password'} placeholder={'Gentag password'} errorMes={'adgangskode er forkert'} dublPass={password} error={(el,el2) => { return Validation.validationDublPass(el, el2) }} onChange={(name, value) => { this.selectData(name, value) }} />
                </div>

                <div className="container-checkbox">
                    <Checkbox title={'Jeg accepterer Likvido Inkasso ApS '} url={'handelsbetingelser'} />
                </div>
                <div className="container-button">
                    <Button onChange={changeStep} title={'Næste →'} styles={{ backgroundColor: btnPrimaryColor }} />
                    <Button onChange={() => changeStep(false)} title={'Forrige'} className={'button button-back'} />
                </div>
            </div>
        )
    }
}
