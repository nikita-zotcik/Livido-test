import React from 'react';
import { Button, Input } from '../../../../smpl-components/index';
import defaultProps from '../../../../default';
import Validation from '../../../validation';
import axios from 'axios';

export default class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            loader:false
        }
        this.data = {};
        this.selectData = this.selectData.bind(this);
        this.checkData = this.checkData.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getData();
    }

    selectData(name, value) {
        let { data } = this.state;

        data[name] = value;
        this.setState(data);
    }

    checkData() {
        const { data } = this.state;
        let succses = true;

        if (data.length < 4) {
            return false;
        }
        for (var el in data) {
            if (data[el].length === 0)
                succses = false
        }
        return succses;
    }

    async getData() {
        this.setState({loader:true });
        try {
            const res = await axios.get('http://localhost:3001/company', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    value: this.props.value
                },
            });
            console.log(res)
            this.setState({ data: res.data[0],loader:false })
        } catch (e) {
            console.log('Err: ', e)
        }
    }


    render() {
        const { btnPrimaryColor } = defaultProps.btnStyles;
        const { changeStep } = this.props;
        const { content } = this.props.data;
        const { data = {},loader } = this.state;
        console.log('sdfsdf', this.state.data);

        return (
            <div className="left-panel-block">
                {loader && <div className={'loader-container'}><div className='loader'> Loading...</div></div>}
                <div className="left-panel-container-header">
                    {content.container_header}
                </div>
                <div className="left-panel-container-text left-panel-container-content">
                    {content.header_content}
                </div>
                <div className="container-inp">
                    <Input title={'FORNAVN'} name="name" defaultValue={data.name} errorMes={'navnet er forkert'} onChange={(name, value) => { this.selectData(name, value) }} />
                    <Input title={'CVR NUMMER'} name="companyRegistrationId" defaultValue={data.companyRegistrationId} errorMes={'navnet er forkert'} onChange={(name, value) => { this.selectData(name, value) }} />
                </div>
                <div className="container-inp">
                    <Input title={'ADRESSE'} name="address" defaultValue={data.address} type={'email'} errorMes={'e-mail er forkert'} error={(el) => { return true }} onChange={(name, value) => { this.selectData(name, value) }} />
                </div>
                <div className="container-inp">
                    <Input title={'POSTNUMMER'} name="zipcode" defaultValue={data.zipcode} type={''} errorMes={'adgangskode er forkert'} error={(el) => { return true }} onChange={(name, value) => { this.selectData(name, value) }} />
                    <Input title={'BY'} type={''} name="city" defaultValue={data.city} errorMes={'adgangskode er forkert'} error={(el) => { return true }} onChange={(name, value) => { this.selectData(name, value) }} />
                </div>
                <div className="container-button">
                    <Button onChange={() => this.checkData() ? changeStep(true) : ''} title={'Næste →'} styles={{ backgroundColor: btnPrimaryColor }} />
                    <Button onChange={() => changeStep(false)} title={'Forrige'} className={'button button-back'} />
                </div>
            </div>
        )
    }
}
