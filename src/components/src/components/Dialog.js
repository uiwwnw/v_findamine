import React from 'react';

class Dialog extends React.Component {
    render() {
        return (
            <div className="dialog">
                <div data-align="middle">
                    <div className="dialogHeader">{this.props.dialogHeader}</div>
                    <div className="dialogContent">{this.props.dialogContent}</div>
                    <div className={this.props.dialogFooter===undefined?'dialogFooter':'dialogFooter' + this.props.dialogFooter}>
                        <a onClick={this.props.fnSendMail.bind(this)}>취소</a>
                        <a href={'mailto:uiwwnw@icloud.com?subject='+this.props.title+'&body='+this.props.text} onClick={this.props.fnSendMail.bind(this)}>확인</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;