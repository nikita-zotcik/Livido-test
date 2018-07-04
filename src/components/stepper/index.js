import React from 'react';
import LeftPanel from './panels/leftPanel'
import RightPanel from './panels/rightPanel'
import TopPanel from './panels/topPanel'
import data from '../../data.json'
import LoadingPage from './contents/loadingPage/loadingPage'
import { ModalVideo } from '../../smpl-components/index'

export default class step extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: [{
                name: 'Opret konto', status: ''
            }, {
                name: 'Tilknyt regnskabssystem', status: ''
            }, {
                name: 'Design kampagne', status: ''
            }, {
                name: 'Vælg sager', status: ''
            }, {
                name: 'Bekræft kampagne', status: ''
            }],
            loading: false
        };

        this.changeStatus = this.changeStatus.bind(this);
        this.changeLoading = this.changeLoading.bind(this);
    }

    changeStatus(name, status) {
        let { parts } = this.state;

        parts.forEach((el, index) => {
            if (el.name === name) {
                parts[index].status = status;
            }
        });
        this.setState({ parts: parts });
    }

    changeLoading(status) {
        this.setState({ loading: status })
    }

    render() {
        const { parts, loading } = this.state;
        return ([
            <div className="compan-block">
                <div className="compan-logo">
                    {data.logo}
                </div>
                <div className="login">Allerede bruger? <u className="login-url">Login →</u>
                </div>

            </div>
            ,
            <div className="main">

                {loading ?
                    <div className="container-main">
                        <LoadingPage />
                    </div>
                    :
                    [<TopPanel parts={parts} />,
                    <div className="container-main">
                        <LeftPanel parts={parts} changeStatus={this.changeStatus} changeLoading={this.changeLoading}/>
                        <RightPanel />
                    </div>]
                }
                {/* <ModalVideo/> */}
            </div>
        ]

        )
    }
}
