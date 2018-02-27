import React from 'react';
import Data from './Data';
// console.log(Data);

class App extends React.Component {
    constructor() {
        super(...arguments);
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
        this.state = {
            maps: []
        }
    }
    word(e) {
        let rd = Math.floor((Math.random() * n));
        e[0] = Data[rd].name;
        for(var i = 1; i < this.state.maps.length; i++) {
            e[i]
        }
    }
    render() {
        const x = Number(this.props.x) + 1;
        const y = Number(this.props.y) + 1;
        for (let i = (y / 2 - 1); i > -(y / 2); i--) {
            for (let j = -(x / 2 - 1); j < (x / 2); j++) {
                this.state.maps.push(j + 'x' + i + 'y');
            }
        }
        let word = [];
        this.word(word);
        return (
            <div className="inputBox">
                {this.state.maps.map((item, i) => {
                    return (
                        <Input key={i} id={item} idx="1"/>
                    )
                })}
            </div>
        )
    }
}

class Input extends InputMap {
    constructor() {
        super(...arguments);
        this.state = {
            popup: false
        }
    }
    render() {
        let rd = 1;
        // let rd = this.random(Data.length-1);
        let popup = <Popup idx={this.props.idx}/>;
        return (
            <div className="inputWrap">
                <input id={this.props.id} onFocus={this.popOpen.bind(this)} onBlur={this.popClose.bind(this)} />
                {this.state.popup === false ? '' : popup}
            </div>
        )
    }
    random(n){
        let rd = Math.floor((Math.random() * n));
        return rd;
    }
    wright(n) {
        let a = {};
        let _n = n === undefined?this.random(Data.length):n;
        a.text = Data[_n].name;
        a.length = a.text.length;
        
        return a;
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
                {Data[this.props.idx].mean}
            </div>
        )
    }
}

class Text extends React.Component {
    constructor() {
        super(...arguments);
    }
    render() {
        // Data['안녕'];
    }
}
export default App;