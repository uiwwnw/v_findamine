import React from 'react';
import Dialog from './Dialog';

class Contact extends React.Component {
    constructor() {
        super();
        
        this.state = {
            textareaLength: 0,
            title: '제목을 입력해주세요',
            text: '내용을 입력해주세요'
        }
    }
    onInput() {
        const value = document.querySelector('input').value;
        this.setState({
            title: value
        })
    }
    onTextarea() {
        const value = document.querySelector('textarea').value;
        const length = value.length;
        this.setState({
            textareaLength: length,
            text: value
        })
    }
    render() {
        let sendMail;
        if (this.props.popup) {
            const content = 
            <div>
                <input onChange={this.onInput.bind(this)} type="text" maxLength="40" placeholder="제목을 입력해주세요"/>
                <textarea onChange={this.onTextarea.bind(this)} placeholder="내용을 입력해주세요" rows="5"/>
                <sub>{this.state.textareaLength}</sub>
            </div>
            ; 
            // href="mailto:uiwwnw@icloud.com"
            sendMail = <Dialog dialogHeader="이메일보내기" dialogContent={content} fnSendMail={this.props.fnSendMail.bind(this)} title={this.state.title} text={this.state.text}/>
        };
        return (
            <article>
                <h2>개인연락처</h2>
                <button className="link" onClick={this.props.fnSendMail.bind(this)}><i className="icon-mail"></i>uiwwnw@icloud.com</button>
                <a className="link" href="https://github.com/uiwwnw"><i className="icon-github-circled-alt"></i>https://github.com/uiwwnw</a>
                {sendMail}
            </article>
        );
    }
}

export default Contact;