import React from 'react';
import Details from './details';
import Payment from './payment';
import Account from './account';
import Greeting from './greeting';
import data from './comparingMockup.json';

export default class Design extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 'payment step'
        };
        this.steps = ['payment step', 'details step', 'account step', 'greeting step'];
        this.changeStep = this.changeStep.bind(this);
        this.changePart = this.props.changePart;
        this.changeStatus = this.props.changeStatus;
    }

    renderStep() {
        const {value} = this.state;
        console.log('value',value)
        const { activeStep } = this.state;
        switch (activeStep) {
            case 'payment step':
                return <Payment changeStep={this.changeStep} data={data.data_payment} />
            case 'details step':
                return <Details changeStep={this.changeStep} data={data.data_details} value={value}/>;
            case 'account step':
                return <Account changeStep={this.changeStep} data={data.data_account}/>;
            case 'greeting step':
                return <Greeting changeStep={this.changePart} data={data.data_greeting}/>;
        }
    }

    changeStep(back,value) {
        const backStep = back || false;
        const { activeStep } = this.state;

        this.steps.filter((el, key) => {
            if (activeStep === el) {
                this.changeStatus('Opret konto','progress');
                this.setState({ activeStep: this.steps[backStep ? key + 1 : key-1] });
            }
        })
        this.setState({value:value});
    }
    render() {
        return (this.renderStep())
    }
}
