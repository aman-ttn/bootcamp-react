import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state={
            component: null
        }

        componentDidMount(){
            importComponent()
                .then(compo => {
                    this.setState({component:compo.default});
                });
        }
        render(){
            const Com=this.state.component;

            return Com ? <Com {...this.props}/> : null;
        }
    }
}

export default asyncComponent;