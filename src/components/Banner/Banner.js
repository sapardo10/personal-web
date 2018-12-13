import React, { Component } from 'react';

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : props.title,
        }
    }
    render() {
        return (
            <section id="banner">
                <h3>{this.state.title}</h3>
            </section>
        );
    }
}

export default Banner;