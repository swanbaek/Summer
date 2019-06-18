import React,{Component} from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import ListContent from './components/ListContent'
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      memos:[{title:'To Do',msg:'오늘 할일이 많아요', wdate:'2019-06-01'},
      {title:'In Progress',msg:'진행중인 일..많아요', wdate:'2019-06-01'}]
    }
  }
  

  render(){
    return (
    <div className="container">      
      <Header subject="My Memo Posting"></Header>
      <Navbar></Navbar>
      <div className="row">
        <CreateContent onSubmit={function(_title,_msg){
            this.state.memos.push({title:_title,msg:_msg});
          }}></CreateContent>
        <ReadContent title="Welcome to MyMemo" msg="오늘 할 일을 포스트하세요"></ReadContent>
        <ListContent memos={this.state.memos}></ListContent>
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
