import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorShow: false
        };
        this.validation = this.validation.bind(this);
    }

    validation(el) {
        let { errorShow } = this.state;

        let error = false;
        console.log('this.props.dublPass',!!this.props.dublPass,this.props.error(el.target.value, this.props.dublPass))
        if (!!this.props.dublPass) {
            error = this.props.error(el.target.value, this.props.dublPass)
        }
        else {
            error = this.props.error(el.target.value)
        }

        if (el.target.value === '') {
            this.setState({ errorShow: true });
            return '';
        }
        if (error) {
            this.props.onChange(el.target.name, el.target.value);
        } else {
            this.props.onChange(el.target.name, '');

        }
        this.setState({ errorShow: !error });

    }

    render() {
        const { errorMes = '', error = () => { }, dublPass, type = '', title = '', onChange = () => { }, styles = {} } = this.props;
        const { errorShow } = this.state;
        return (
            <div className="input-block">
                <div className="input-title">
                    {title}
                </div>
                <div>
                    <input type={type} name={title} className={`input-value ${errorShow ? 'error' : ''}`} onChange={this.validation} />
                </div>
                <span className={`error-message ${errorShow ? 'show' : ''}`}> {errorMes}</span>
            </div>
        )
    }
}
