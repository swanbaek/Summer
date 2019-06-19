import React from 'react';
import SubListContent from './SubListContent';

import { thisExpression } from '@babel/types';
class ListContent extends React.Component{
  
    constructor(props){
        super(props);
        
    }
    getList(){
        var _str=[];
        for(var i=0;i<this.props.memos.length;i++){
            let _idx=this.props.memos[i].idx;
            let _title=this.props.memos[i].title;
            let _msg=this.props.memos[i].msg;
            let _wdate=this.props.memos[i].wdate;
        _str.push(<SubListContent key={i} idx={_idx} title={_title}
             msg={_msg} wdate={_wdate}
             onClick={function(_idx){   
                 this.props.onClick(_idx)
             }.bind(this)} ></SubListContent>)
        }
       return _str;
    }
    render(){
        let _lst=this.getList();
        return (
            <div className="col-md-3 col-sm-6">
                <div className="card">
                <ul className="list-group">
                <li className="list-group-item active d-flex justify-content-between align-items-center">
                Memo List
                    <span className="badge badge-danger badge-pill">2019-06-01</span>
                </li>
                
                {_lst}
                
                
                </ul>
                </div>                
            </div>
        );
    }
}
export default ListContent;