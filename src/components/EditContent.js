import React from 'react';
class EditContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            idx:this.props.idx,
            title:this.props.title,
            msg:this.props.msg,
            wdate:this.props.wdate
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.inputHandler=this.inputHandler.bind(this);
    }
    inputHandler(e){
        this.setState({[e.target.name]:e.target.value}) 
    }
    handleSubmit(e){
        console.log("handleSubmit()")
        e.preventDefault();
        this.props.onSubmit( //부모에 onSubmit()으로 전달
            e.target.idx.value,
            e.target.title.value,
            e.target.msg.value
        );
        console.log('EditContent Submit')
        e.target.title.value="";
        e.target.msg.value="";
        
    }

    render(){
        let _memo={idx:this.props.idx,title:this.props.title,msg:this.props.msg, wdate:this.props.wdate}
        //console.log('memo',_memo)
        return (
            <div className="col-md-3 col-sm-6" >
                <div className="card" style={{height: 250}}>
                
                <img src="images/memo02.PNG" 
                    className="card-img-top img img-thumbnail" />
                    <div className="card-img-overlay text-center">
                <form action="memoEdit.jsp" method="post"
                 onSubmit={(e)=>this.handleSubmit(e)} className="mt-2">
                    <input type="hidden" name="idx" value={_memo.idx}></input>
                    {/*<input type="text" value={_memo.title}
                     name="title" placeholder="제  목" className="form-control"></input>*/}
                     <input type="text" value={this.state.title}
                     name="title" placeholder="제  목"
                      className="form-control" onChange={this.inputHandler}></input>
                     {/* {value={this.props.data.title} } 이런식으로 value값에 넣어주면 안됨.
                        props는 readonly속성이 있으므로 수정할 수 없다. 따라서 constructor를 구성하고 
                        state를 이용해 title,msg등의값을 전달하자.
                        하지만 this.state.title로 value에 주어도 수정되지 않으며, onChange이벤트와 함께
                        사용하여 setState()함수통해 변경되도록 조치해야 함*/}
                    
                     <p>
                    <textarea name="msg" placeholder="메모 내용" 
                    className="form-control mt-2"
                     value={this.state.msg}
                     onChange={this.inputHandler}></textarea>
                    </p>
                    <span className="badge badge-success">
                        작성일: {this.state.wdate}
                    </span><p></p>
                    <button className="btn btn-outline-info">글수정</button>
                </form> 
                </div>
                
                </div> 
            </div>
        );
    }
}
export default EditContent;