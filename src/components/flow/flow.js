import React, {Component} from "react";
import { Stepper } from './stepper/stepper';
import  Aside  from './aside/aside';

class Flow extends Component {
	state = {
		stepNumber: 5,
		steps: ['Opret konto', 'Tilknyt regnskabssystem', 'Design kampagne', 'Vælg sager', 'Bekræft kampagne' ]
	};

	nextStep = () => {
		let stepNumber = this.state.stepNumber;
		if (stepNumber === 6) return;
		stepNumber+= 0.5;
		this.setState({stepNumber});
	}

	prevStep = () => {
		let stepNumber = this.state.stepNumber;
		if (stepNumber === 1) return;
		stepNumber-= 0.5;
		this.setState({stepNumber});
	}
	render() {
		return (
			<div className={'flow'}>
				<Stepper steps={this.state.steps} stepNumber={this.state.stepNumber}/>
				<div className={'main-part'}>
					<div className={'main-block'}>
						<h1>Test step-by-step</h1>
						<button onClick={this.prevStep}>Prev Step</button>
						<button onClick={this.nextStep}>Next Step</button>
					</div>
					<Aside stepNumber={this.state.stepNumber}/>
				</div>
			</div>
		);
	}
}


export default Flow;
