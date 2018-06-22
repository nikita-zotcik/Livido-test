import React, {Component} from "react";
import { firstStep, secondStep, FifthStep } from './configs'
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
				<p className={'information-text'}>+45 71 74 93 62</p>
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
	console.log('props',props);

	const result = props.data.map((item) => {
		return (
		<div key={item.header} className={'aside-block'}>
			<div className={'img'}></div>
			<h1>{item.header}</h1>
			<p>{item.text}</p>
		</div>);
	});

	return (<aside>{result}</aside>);
};
const Aside = (props) => {
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
			data = FifthStep;
			break;
	}


	return (
		<Component data={data}/>
	);

};
export default Aside;


