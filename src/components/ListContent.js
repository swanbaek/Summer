import React from 'react';
class ListContent extends React.Component{

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
                <ul className="list-group">
                <li className="list-group-item active d-flex justify-content-between align-items-center">
                <i className="fas fa-cloud"></i>Active
                    <span className="badge badge-danger badge-pill">2019-06-01</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Inbox
                    <span className="badge badge-danger badge-pill">2019-06-02</span>
                </li>
                </ul>
                </div>                
            </div>
        );
    }
}
export default ListContent;