import React from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Storytelling from './Storytelling';
import Log from './Log';

class Content extends React.Component {
    render() {
        let content;
        if (this.props.content === this.props.menu[0].name) {
            content = <Home />
        }
        if (this.props.content === this.props.menu[1].name) {
            content = <Portfolio />
        }
        if (this.props.content === this.props.menu[2].name) {
            content = <Contact fnSendMail={this.props.fnSendMail.bind(this)} popup={this.props.popup}/>
        }
        if (this.props.content === this.props.menu[3].name) {
            content = <Storytelling />
        }
        if (this.props.content === this.props.menu[4].name) {
            content = <Log />
        }
        // for (var i = 0; i < this.props.menu.length; i++) {
        //     if (this.props.content == this.props.menu[i].name) {
        //         var name = this.props.menu[i].name;
        //         content = name
        //     }
        // }
        return (
            <section className={this.props.className}>
                {content}
            </section>
        );
    }
}

export default Content;