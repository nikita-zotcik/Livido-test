import React, {Component} from "react";
import { firstStep, secondStep } from './configs'
import PropTypes from 'prop-types';
const FirstType = (props) => {
	FirstType.propTypes = {
		data: PropTypes.object
	};

	return (<aside>
		<div className={'ava'}></div>
		<h1>{props.data.header}</h1>
		<p>{props.data.text}</p>
		<button>
			{props.data.button}
		</button>
		<div className={'information'}>
			<div className={'info-block'}>
				<div className={'img'}/>
				<p>+45 71 74 93 62</p>
			</div>
			<div className={'info-block'}>
				<div className={'img'} />
				<p>kontakt@likvido.dk</p>
			</div>
		</div>
	</aside>)
};
const SecondType = (props) => {
	SecondType.propTypes = {
		data: PropTypes.object
	};

	return (<aside>
		<div className={'aside-block'}>
			<div className={'img'}></div>
			<h1>100%gratis</h1>
			<p>Opstart: 0,00 DKK 
				Samlet pris for kampagnen: 0,00 DKK
			</p>
		</div>
		<div className={'aside-block'}>
			<div className={'img'}></div>
			<h1>gratis</h1>
			<p>Opstart: 0,00 DKK 
				Samlet pris for kampagnen: 0,00 DKK
			</p>
		</div>
		<div className={'aside-block'}>
			<div className={'img'}></div>
			<h1>gratis</h1>
			<p>Opstart: 0,00 DKK 
				Samlet pris for kampagnen: 0,00 DKK
			</p>
		</div>
		
	</aside>)
};
export const Aside = (props) => {
	Aside.propTypes = {
		stepNumber: PropTypes.number
	};

	let data = firstStep;
	let Component = FirstType;
	switch(props.stepNumber) {
		case 2:
			data = secondStep;
			break;
		case 5:
			Component = SecondType;
			data = secondStep;
			break;
	}


	return (
		<Component data={data}/>
	);

};


