import React, {Component} from "react";
import PropTypes from 'prop-types';

export const Aside = (props) => {
	Aside.propTypes = {
		stepNumber: PropTypes.number
	};
	let header = 'Vil du tale med os før du opretter dig på Likvido?';

	let text = 'Er du i tvivl om hvad Likvido koster, hvad dine kunder modtager og hvordan vi kan hjælpe din virksomhed? Så tøv\n' +
		'\t\t\t\tikke med at kontakte os. Vi er på telefonen alle hverdage 9-21 og weekenden 10-18.\n' +
		'\t\t\t\tDu kan også booke et gratis 30 minutters online møde med vores CMO Maximilian Frimmer.';
	let button = 'Book et online møde';

	if (props.stepNumber === 2) {
		header = 'Skal vi guide dig igennem integrationen?';
		text = 'Du kan booke et online-session hvor vores tekniske support hjælper dig gennem opsætningen.';
		button = 'Få hjælp til integrationen';
	}

	return (
		<aside>
			<div className={'ava'}></div>
			<h1>{header}</h1>
			<p>{text}</p>
			<button>
				{button}
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

		</aside>
	);

};


