import React from 'react';
import SubListContent from './SubListContent';

import { thisExpression } from '@babel/types';
class ListContent extends React.Component{
  
    constructor(props){
        super(props);
        
    }
    getList(){
        for(var i=0;i<this.props.memos.length;i++){
       var _str=<SubListContent title={this.props.memos[i].title}></SubListContent>
        }
       return _str;
    }
    render(){
        return (
            <div className="col-md-3 col-sm-6">
                <div className="card">
                <ul className="list-group">
                <li className="list-group-item active d-flex justify-content-between align-items-center">
                Active
                    <span className="badge badge-danger badge-pill">2019-06-01</span>
                </li>
                
                {this.getList()}
                
                
                </ul>
                </div>                
            </div>
        );
    }
}
export default ListContent;