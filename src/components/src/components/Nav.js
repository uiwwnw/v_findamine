import React from 'react';

class Nav extends React.Component {
    render() {
        let items = this.props.menu.map(function (tab, idx) {
            return (
                <button key={idx} onClick={this.props.onTab} data-tab-key={idx}>{tab.name}</button>
                );
        }, this);
        
        return (
            <nav className="nav">
                <div data-align="middle">
                    {items}
                </div>
            </nav>
        );
    }
    // render() {
    //     return (
    //         <nav className="nav">
    //             <div>
    //                 <button onClick={this.props.onTab1}>home</button>
    //                 <button onClick={this.props.onTab2}>contact</button>
    //             </div>
    //         </nav>
    //     );
    // }
}

export default Nav;