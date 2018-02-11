import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <button className={this.props.hasOpen ? 'callNav active' : 'callNav'} onClick={this.props.hasOpen ?this.props.onCloseAll:this.props.onOpenNav}>
                    <i></i>
                </button>
                <h1>{this.props.content}</h1>
                {/* <div className="menuBox">
                    <button className="callHome" onClick={this.props.onTab} data-tab-key="0">aaaaaaaaaaaaaaaa</button>
                    <button className="callHome" onClick={this.props.onTab} data-tab-key="1">bbb</button>
                </div> */}
            </header>
        );
    }
    // openNav() {
    //     this.refs.active.classList.toggle('active');
    //     this.setProp({nav:!this.props.nav})
    // }

    // componentDidMount() {
    //     this.refs.active.addEventListener('click', this.openNav);
    // }

    // componentWillUnmount() {
    //     this.refs.active.removeEventListener('click', this.openNav);
    // }
}


export default Header;