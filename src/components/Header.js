import React from 'react';
class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={
            subject:this.props.subject
        }
    }

    render(){
        return (
            <div className="jumbotron mt-3">
            <h1 className="text-primary text-center">{this.state.subject}</h1>
            </div>
        );
    }
}
export default Header;