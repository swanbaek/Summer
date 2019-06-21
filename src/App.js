import React,{Component} from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import IntroContent from './components/IntroContent'
import CreateContent from './components/CreateContent'
import ListContent from './components/ListContent'
import ViewContent from './components/ViewContent';
import EditContent from './components/EditContent';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'view', //view,create,edit,delete
      selected_idx:1,
      memos:[{idx:1,title:'To Do',msg:'오늘 할일이 많아요', wdate:'2019-6-01'},
      {idx:2,title:'In Progress',msg:'진행중인 일..많아요', wdate:'2019-6-01'}]
    }
    this.editHandler=this.editHandler.bind(this)
    this.deleteHandler=this.deleteHandler.bind(this);
  }
  deleteHandler(_idx){
    if(this.state.memos.length<=0){
         alert('삭제할 글이 없어요');
         return;
    }
    let yn=window.confirm('정말 삭제할까요?'+_idx);
    if(yn){
      var _memos=this.state.memos;
      var arr=Array.from(_memos);
      for(var i=0;i<arr.length;i++){
        if(arr[i].idx==_idx){
          arr.splice(i,1);
          break;
        }
      }//for-----
      
      this.setState({mode:'view',selected_idx:arr.length,memos:arr});
      
    }
  }
  editHandler(_idx,_title,_msg){
    //alert(_title)
    var _i=parseInt(_idx);
    var date=new Date();
    var dstr=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    var edit_memo={idx:_idx,title:_title,msg:_msg, wdate:dstr}
    
      //let memo=memos[i];
      var _arr=Array.from(this.state.memos);//memos를 카피한 배열을 반환=> _arr
      for(var j=0;j<_arr.length;j++){
        if(_arr[j].idx==_i){
          _arr[j]=edit_memo;
          break;
        }//if
      }//for-----
      this.setState({memos:_arr,mode:'view',selected_idx:_idx});
    }
  

  render(){
    var i=parseInt(this.state.selected_idx)-1;
    var _content=null;
    var _mode=this.state.mode;
    switch(_mode){
      case 'view':
        var memo=null;
        if(this.state.memos.length>0){
         memo=this.state.memos[i];
        }else{
          memo={idx:0,title:'',msg:'',wdate:''}
        }
        _content=<ViewContent idx={memo.idx} title={memo.title} msg={memo.msg}
        wdate={memo.wdate}  onEditForm={function(idx, vmode){
          if(!idx){
            alert('수정할 글이 없어요');
            return;
          }
          console.log('idx==='+idx+", vmode=-==="+vmode)
          this.setState({mode:vmode,selected_idx:idx})
        }.bind(this)} 
       
        onDelete={this.deleteHandler}></ViewContent>;
        break;
      case 'edit':
          _content=<EditContent idx={this.state.memos[i].idx} title={this.state.memos[i].title} msg={this.state.memos[i].msg}
          wdate={this.state.memos[i].wdate} onSubmit={this.editHandler} ></EditContent>;
        break;  
      case 'delete':
        break;  
    }

    return (
    <div className="container">      
      <Header subject="My Memo Posting"></Header>
      <Navbar></Navbar>
      <div className="row">
        <IntroContent title="Welcome to MyMemo" msg="오늘 할 일을 포스트하세요"></IntroContent>
        <CreateContent onSubmit={function(_title,_msg){
            //this.state.memos.push({title:_title,msg:_msg});
            var arr=this.state.memos;
            var today=new Date();
            var dstr=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
            var _idx=arr.length+1;
            
            arr.push({idx:_idx,title:_title,msg:_msg, wdate:dstr});
            this.setState({
              memos:arr,
              selected_idx:_idx
            })
          }.bind(this)}></CreateContent>
        <ListContent memos={this.state.memos} onClick={function(_idx){
          this.setState({
            selected_idx:Number(_idx)
          })
        }.bind(this)}></ListContent>
        {/*<ViewContent title={this.state.memos[i].title} msg={this.state.memos[i].msg}
         wdate={this.state.memos[i].wdate}></ViewContent>*/}
         {_content}
      </div>
    </div>);
  }

}
export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
