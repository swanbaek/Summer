import React from 'react';
import { thisExpression } from '@babel/types';
class SubListContent extends React.Component{
  
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            
                <li className="list-group-item d-flex justify-content-between align-items-center">                   
                    {this.props.title}
                    <span className="badge badge-danger badge-pill">2019-06-02</span>
                </li>         
        );
    }
}
export default SubListContent;