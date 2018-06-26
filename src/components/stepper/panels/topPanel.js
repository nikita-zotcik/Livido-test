import React from 'react'

export default class TopPanel extends React.Component {
    render() {
        const {parts} = this.props;
        return (
            <div className="menu">
                {parts.map((el, index) => {
                    return (
                        <div key={index} className="wrapper">
                            <div  className="step">
                                <div className="status-field">
                                    <div className="status">
                                        <div className={ el.status}></div>
                                    </div>
                                </div>
                                <div className="name">
                                    <p>{el.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
