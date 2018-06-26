import React from 'react';
import Software from './software';
import Integration from './integration'
import data from './confirmMockup.json'

export default class Design extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 'software step'
        };
        this.steps = ['software step', 'details step', 'account step', 'greeting step'];
        this.changeStatus = this.props.changeStatus;
        this.changeStep = this.changeStep.bind(this);
    }

    renderStep() {
        const { activeStep } = this.state;
        switch (activeStep) {
            case 'software step':
                return <Software changeStep={this.changeStep} data={data.data_software}/>
            case 'details step':
                return <Integration changeStep={this.changeStep} data={data.data_integration}/>
            case 'account step':
            // return <Account changeStep={this.changeStep} />
            case 'greeting step':
            // return <Greeting changeStep={this.changeStep} />
        }
    }

    changeStep() {
        const { activeStep } = this.state;

        this.steps.filter((el, key) => {
            if (activeStep === el) {
                this.changeStatus('Tilknyt regnskabssystem', 'progress');
                this.setState({ activeStep: this.steps[key + 1] });
            }
        })
    }
    render() {
        return (
            <div>
                {this.renderStep()}
            </div>
        )
    }
}
