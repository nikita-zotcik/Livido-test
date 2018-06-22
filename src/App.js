import React, {Component} from 'react';
import Flow from './components/flow/flow';

class App extends Component {
	render() {
		return (
			<div>
				<header>
					Likvido
				</header>
				<div className={'wrapper'}>
					<main>
						<Flow/>
					</main>

				</div>
			</div>
		);
	}
}

export default App;