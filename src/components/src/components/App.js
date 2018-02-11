import React from 'react';
import Header from './Header';
import Content from './Content';
import Nav from './Nav';
import Footer from './Footer';
import menu from './menu';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            header: true,
            footer: true,
            navActive: false,
            popover: false,
            popup: false,
            hasOpen: false,
            content: 'Home'
        };
    }
    render() {
        let header;
        let nav;
        let contentClassName = 'content';
        let footer;
        let dim;
        if (this.state.header) {
            header =
                <Header hasOpen={this.state.hasOpen} navActive={this.state.navActive} content={this.state.content} onOpenNav={this.openNav.bind(this)} onCloseAll={this.closeAll.bind(this)} onTab={this.changeTab.bind(this)} menu={menu} />;
            contentClassName += ' hasHeader'
        }
        if (this.state.navActive) {
            nav =
                <Nav onTab={this.changeTab.bind(this)} menu={menu} />
        }
        if (this.state.footer) {
            footer =
                <Footer content={this.state.content} menu={menu}/>;
            contentClassName += ' hasFooter'
        }
        if (this.state.hasOpen) {
            dim =
                <i className="dim" onClick={this.closeAll.bind(this)}></i>
        }
        return (
            <main className={this.state.hasOpen?'openPopup':''} >
                {header}
                {nav}
                <Content content={this.state.content} menu={menu} className={contentClassName} popup={this.state.popup} fnSendMail={this.fnSendMail.bind(this)}/>
                {footer}
                {dim}
            </main>
        );
    }
    closeAll() {
        this.setState({
            hasOpen: false,
            navActive: false,
            popup: false
        })
    }
    openNav() {
        this.setState({
            hasOpen: true,
            navActive: true
        })
    }
    fnSendMail(){
        // const idx = Number(e.target.getAttribute('data-tab-key'));
        this.setState({
            hasOpen: !this.state.hasOpen,
            popup: !this.state.popup
        });
    }
    changeTab(e) {
        const tabNum = Number(e.target.getAttribute('data-tab-key'));
        // if (tabNum === menu[0].id) {
        //     this.setState({
        //         header: false
        //     })
        // }
        this.setState({
            hasOpen: false,
            navActive: false,
            content: menu[tabNum].name
        })
    }
}

export default App;