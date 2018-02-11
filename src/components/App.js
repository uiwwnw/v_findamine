import React from 'react';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            maps: []
        }
    }
    render() {
        return (
            <div>
                <Input x={this.props.x} y={this.props.y} />
            </div>
        )
    }
}

// class Maps {
//     render() {

//     }
// }

class Input extends App {
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
        return (
            <div className="inputBox">
                {this.state.maps.map((item, i) => {
                    return (
                        <div className="inputWrap" key={i}>
                            <input id={item} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default App;