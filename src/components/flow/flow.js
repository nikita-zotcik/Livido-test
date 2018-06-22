import React, {Component} from "react";
import { Stepper } from './stepper/stepper';
import { Aside } from './aside/aside';

class Flow extends Component {
	state = {
		stepNumber: 5,
		steps: ['Opret konto', 'Tilknyt regnskabssystem', 'Design kampagne', 'Vælg sager', 'Bekræft kampagne' ]
	};
	render() {
		return (
			<div className={'flow'}>
				<Stepper steps={this.state.steps} stepNumber={this.state.stepNumber}/>
				<div className={'main-part'}>
					<div className={'main-block'}>
					</div>
					<Aside stepNumber={this.state.stepNumber}/>
				</div>
			</div>
		);
	}
}


export default Flow;
