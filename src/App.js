import React,{Component} from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import IntroContent from './components/IntroContent'
import CreateContent from './components/CreateContent'
import ListContent from './components/ListContent'
import ViewContent from './components/ViewContent';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selected_idx:1,
      memos:[{idx:1,title:'To Do',msg:'오늘 할일이 많아요', wdate:'2019-06-01'},
      {idx:2,title:'In Progress',msg:'진행중인 일..많아요', wdate:'2019-06-01'}]
    }
  }
  

  render(){
    var i=parseInt(this.state.selected_idx)-1;
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
        <ViewContent title={this.state.memos[i].title} msg={this.state.memos[i].msg}
         wdate={this.state.memos[i].wdate}></ViewContent>
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
