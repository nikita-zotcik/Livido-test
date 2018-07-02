import React from 'react';
import Software from './software';
import Integration from './integration'
import data from './confirmMockup.json'

export default class Design extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 'software step',
            program: ''
        };
        this.steps = ['software step', 'details step', 'account step', 'greeting step'];
        this.changeStatus = this.props.changeStatus;
        this.changeStep = this.changeStep.bind(this);
        this.saveProgram =this.saveProgram.bind(this);
    }

    renderStep() {
        const { activeStep,program } = this.state;
        console.log('prorgram',program)
        switch (activeStep) {
            case 'software step':
                return <Software changeStep={this.changeStep} data={data.data_software} saveProgram={this.saveProgram}/>
            case 'details step':
                return <Integration changeStep={this.changeStep} data={data.data_integration} program={program}/>
            case 'account step':
            // return <Account changeStep={this.changeStep} />
            case 'greeting step':
            // return <Greeting changeStep={this.changeStep} />
        }
    }

    changeStep(backStep) {
        const { activeStep } = this.state;

        this.steps.filter((el, key) => {
            if (activeStep === el) {
                this.changeStatus('Tilknyt regnskabssystem', 'progress');
                this.setState({ activeStep: this.steps[backStep ? key + 1 : key - 1] });
            }
        })
    }

    saveProgram(name) {
        console.log('name',name)
        this.setState({ program: name })
    }
    render() {
        return (this.renderStep())
    }
}
