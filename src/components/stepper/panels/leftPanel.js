import React from 'react'
import Design from '../contents/campaignDesign/index'
import Confirm from '../contents/confirm/index'

export default class LeftPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePart: 'Tilknyt regnskabssystem'
        };
        this.changePart = this.changePart.bind(this);
        this.changeStatus = this.props.changeStatus;
    }

    renderPart() {
        const {activePart} = this.state;
        switch (activePart) {
            case 'Opret konto':
                return <Design changePart={this.changePart} changeStatus={this.changeStatus}/>
            case 'Tilknyt regnskabssystem':
                return <Confirm changePart={this.changePart} changeStatus={this.changeStatus}/>
            case 'account step':
            // return <Account changePart={this.changePart} />
            case 'greeting step':
            // return <Greeting changePart={this.changePart} />
        }
    }

    changePart() {
        const {activePart} = this.state;
        const {parts} = this.props;

        parts.filter((el, key) => {
            if (activePart === el.name) {
                this.changeStatus(parts[key].name, 'success');
                this.setState({activePart: parts[key + 1].name});
            }
        })
    }

    render() {
        return (
            <div className="left-panel containers">{this.renderPart()}</div>
        )
    }
}
