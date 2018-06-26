import React from 'react';
import axios from 'axios';
import {Button, Select} from '../../../../smpl-components/index';

export default class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showItem: false,
            selectSearch: '',
        };
        this.data = this.props.data.search;
    }

    componentWillMount(){
        this.getData();
    }

    async getData() {
        try {
            const res = await axios.get('http://kredit.likvido.dk/api/companytypeahead?query=youf', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            console.log(res)
        } catch (e) {
            console.log('Err: ', e)
        }
    }

    fetchData(value) {
        let { search } = this.props.data;
        if (value === '') {
            this.data = search;
        } else {
            this.data = search.filter((el) => {
                if (el.registrationName.indexOf(value) !== -1)
                    return el
            })
        }
    }

    search = (el) => {
        this.setState({ selectSearch: el.target.value });
        this.fetchData(el.target.value);
    };

    render() {
        const { selectSearch } = this.state;
        const { content } = this.props.data;
        const { changeStep } = this.props;
        return (
                <div className="container">
                    <div className="left-panel-block">
                        <div className="left-panel-container-header">
                            {content.container_header}
                        </div>
                        <div className="left-panel-container-text left-panel-container-content">
                            {content.header_content}
                        </div>
                        <Select data={this.data} searchValue={selectSearch} search={this.search} changeStep={changeStep}/>
                        <span className="panel-bl-content">Kan du ikke finde din virksomhed?
                            <u className="panel-bl-content">  Opret manuelt</u>
                        </span>
                    </div>
                    <div className="left-panel-block left-panel-payment-info">
                        <div className="left-panel-container-text">
                            Likvido fungerer kun med ovenstående regnskabsprogrammer
                            <br/>
                            Skriv til os på kontakt@likvido.dk hvis du har ønsker til andre integrationer.
                        </div>
                    </div>
                </div>
        )
    }
}
