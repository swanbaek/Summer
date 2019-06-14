import React from 'react';
class CreateContent extends React.Component{
    render(){
        return (
            <div className="col-md-3 col-sm-6">
                <div className="card" style={{height: 350}}>
                <div className="card-header text-center">
                <h3 className="text-center text-success">Add Memo</h3>
                </div>
                <div className="card-body text-center">
                <form action="memoAdd.jsp" method="post">
                    <input type="text"
                     name="title" placeholder="제  목" className="form-control"></input>
                     <p>
                    <textarea name="msg" placeholder="메모 내용" className="form-control"></textarea>
                    </p>
                    <button className="btn btn-outline-success">글쓰기</button>
                </form> 
                </div>
                
                </div> 
            </div>
        );
    }
}
export default CreateContent;