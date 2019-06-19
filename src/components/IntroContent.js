import React from 'react';
class IntroContent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title:'',
            msg:'',
            wdate:'2019-06-13'
        }
    }

    render(){
        return (
            <div className="col-md-3 col-sm-6">
                <div className="card">
                    <img src="images/img02.png" className="card-img-top img img-thumbnail"/>
                    <div className="card-body text-center">
                        <h3 className="card-title">{this.props.title}</h3>
                        <p className="card-text">{this.props.msg}</p>                    
                        <a href="#" className="btn btn-outline-danger">Show Info</a>
                    </div>
                </div>                
            </div>
        );
    }
}
export default IntroContent;