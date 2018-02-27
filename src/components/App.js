import React from 'react';
// console.log(Data);

class App extends React.Component {
    constructor() {
        super(...arguments);
    }
    render() {
        return (
            <div>
                <Box x={this.props.x} y={this.props.y} />
            </div>
        )
    }
}

class Box extends App {
    constructor() {
        super(...arguments);
        this.state = {
            maps: []
        }
    }
    random(n) {
        let rd = Math.floor((Math.random() * n));
        return rd;
    }
    render() {
        const x = Number(this.props.x) + 1;
        const y = Number(this.props.y) + 1;
        for (let i = (y / 2 - 1); i > -(y / 2); i--) {
            for (let j = -(x / 2 - 1); j < (x / 2); j++) {
                this.state.maps.push(j + 'x' + i + 'y');
            }
        }
        return (
            <div className="map">
                {this.state.maps.map((item, i) => {
                    return (
                        <I key={i} id={item} idx={this.random(10)} />
                    )
                })}
            </div>
        )
    }
}

class I extends Box {
    constructor() {
        super(...arguments);
        this.state = {
            focus: false,
            bomb:false,
            flag:false
        }
    }
    render() {
        let num = this.props.idx===0?0:'';
        let scr=this.state.focus===true?num:'';
        return (
            <div className="box">
                <i id={this.props.id} onClick={this.onfocus.bind(this)} >{scr}</i>
            </div>
        )
    }
    onfocus(e) {
        const id = e.target.getAttribute('id');
        this.setState({
            focus:!this.state.focus
        })
        for (let i = (y / 2 - 1); i > -(y / 2); i--) {
            for (let j = -(x / 2 - 1); j < (x / 2); j++) {
                this.state.maps.push(j + 'x' + i + 'y');
            }
        }
    }

}

// class Popup extends React.Component {
//     render() {
//         return (
//             <div className="popup">
//                 {Data[this.props.idx].mean}
//             </div>
//         )
//     }
// }

// class Text extends React.Component {
//     constructor() {
//         super(...arguments);
//     }
//     render() {
//         // Data['안녕'];
//     }
// }
export default App;