import React from 'react';
import { thisExpression } from '@babel/types';
class SubListContent extends React.Component{
  
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            
                <li className="list-group-item d-flex justify-content-between align-items-center">                   
                    <a href="#" data-idx={this.props.idx} onClick={function(e){
                        e.preventDefault();
                        console.log('eeeee',e.target)
                        let _idx=e.target.dataset.idx;
                       //let _idx=1;
                        this.props.onClick(_idx); 
                        //부모(ListContent)의 onSelect()에 전달
                    }.bind(this)}>{this.props.title}</a>
                    <span className="badge badge-danger badge-pill">{this.props.wdate}</span>
                </li>         
        );
    }
}
export default SubListContent;