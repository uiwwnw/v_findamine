import React from 'react';
// import datas from './data.js';
// console.log(datas);

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            maps: [],
            popup: false
        }
    }
    render() {
        return (
            <div>
                <InputMap x={this.props.x} y={this.props.y} />
            </div>
        )
    }
}

class Rd {
    render(n) {
        let rd = Math.floor((Math.random() * n));
        return rd;
    }
}

class InputMap extends App {
    constructor() {
        super(...arguments);
    }
    render() {
        const x = Number(this.props.x) + 1;
        const y = Number(this.props.y) + 1;
        for (let i = (y / 2 - 1); i > -(y / 2); i--) {
            for (let j = -(x / 2 - 1); j < (x / 2); j++) {
                this.state.maps.push(j + 'x' + i + 'y');
            }
        }
        
        // console.log(new Rd().render(2))
        return (
            <div className="inputBox">
                {this.state.maps.map((item, i) => {
                    return (
                        <Input key={i} id={item}/>
                    )
                })}
            </div>
        )
    }
}

class Input extends InputMap {
    constructor() {
        super(...arguments);
    }
    render() {
        let popup = <Popup />;
        
        return (
            <div className="inputWrap">
                <input id={this.props.id} onFocus={this.popOpen.bind(this)} onBlur={this.popClose.bind(this)} />
                {this.state.popup===false?'':popup}
            </div>
        )
    }
    popOpen(e) {
        this.setState({
            popup: true
        })
        // e.target.parentNode.classList.add('popup');
    }
    popClose(e) {
        this.setState({
            popup: false
        })
        // e.target.parentNode.classList.remove('popup');
    }
}

class Popup extends React.Component {
    render() {
        return (
            <div className="popup">
                {/* {Data[1]} */}
            </div>
        )
    }
}

class Text extends React.Component {
    constructor() {
        super(...arguments);
    }
    render() {
        Data['안녕'];
    }
}
export default App;