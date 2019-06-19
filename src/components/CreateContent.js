import React from 'react';
class CreateContent extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);

        this.state={           
            memos:[],
            title:'',
            msg:''        
        }
        
    }
    handleSubmit(e){
        console.log("handleSubmit()")
        e.preventDefault();
        this.props.onSubmit( //부모에 onSubmit()으로 전달
            e.target.title.value,
            e.target.msg.value
        );
        console.log('CreateContent Submit')
        e.target.title.value="";
        e.target.msg.value="";
    }

    render(){
        return (
            <div className="col-md-3 col-sm-6">
                <div className="card" style={{height: 350}}>
                <div className="card-header text-center">
                <h3 className="text-center text-success">Add Memo</h3>
                </div>
                <div className="card-body text-center">
                <form action="memoAdd.jsp" method="post" onSubmit={(e)=>this.handleSubmit(e)}>
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