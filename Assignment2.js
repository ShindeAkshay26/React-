import React, { Component } from 'react';

class Counter extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        };
    }

    
 incrementcount =() => {
            this.setState({ count: this.state.count + 1 });
        };

        render() {
            return (
                <div>
                    <p>Assignment 2</p>
                    <p>count :{this.state.count}</p>
                    <button onClick={this.incrementcount}>Increment</button>
                </div>
            );
        }
    }
export default Counter;