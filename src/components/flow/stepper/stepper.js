import React, {Component} from "react";
import PropTypes from 'prop-types';

export const Stepper = (props) => {
	Stepper.propTypes = {
		steps: PropTypes.array,
		stepNumber: PropTypes.number
	};

	const steps = props.steps.map((item, index) => {
		let currentStep = null;
		if (props.stepNumber === index+1) currentStep = 'inProgress';
		if (props.stepNumber > index+1) currentStep = 'checkmark';
		return (
			<div key={index} className={'step'}>
				<div className={'status-field'}>
					<div className={'status'}>
						<div className={currentStep}></div>
					</div>
				</div>
				<div className={'name'}>
					<p>{item}</p>
				</div>

			</div>
		);
	});
	return (<div className={'stepper'}>
		{steps}
	</div>);
};


