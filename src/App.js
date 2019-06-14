import React,{Component} from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import ListContent from './components/ListContent'
class App extends Component{
  render(){
    return (
    <div className="container">      
      <Header subject="MyMemo PostIng"></Header>
      <Navbar></Navbar>
      <div className="row">
        <CreateContent></CreateContent>
        <ReadContent title="Welcome to MyMemo" msg="오늘 할 일을 포스트하세요"></ReadContent>
        <ListContent></ListContent>
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
