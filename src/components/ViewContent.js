import React from 'react';
class ViewContent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title:'',
            msg:'',
            wdate:'2019-06-13'
        }
    }

    render(){
        let mystyle={
            width:'100%',
            height:'800px'
        }
        return (
            <div className="col-md-3 col-sm-6">
                <div className="card">
                    <img src="images/memo01.PNG" 
                    className="card-img-top img img-thumbnail"/>
                    <div className="card-img-overlay text-center">
                        <h3 className="card-title mt-5  text-primary">{this.props.title}</h3>
                        <p className="card-text text-success font-weight-bold">
                        <pre className="pre-scrollable">{this.props.msg}</pre>
                        </p> 
                        <span class="text-secondary font-weight-bold">{this.props.wdate}</span>  
                        <p></p>              
                        <a href="#" className="btn btn-warning btn-sm mr-1">
                            EDIT</a>
                        <a href="#" className="btn btn-danger btn-sm">
                          DEL</a>    
                    </div>
                </div>                
            </div>
        );
    }
}
export default ViewContent;