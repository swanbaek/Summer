import React from 'react';
class Navbar extends React.Component{
    render(){
        return (
<nav className="navbar navbar-expand-sm bg-light mb-5">
  <ul className="navbar-nav">
  <a className="navbar-brand" href="#">
    <img src="pig.PNG" alt="Logo" style={{width:40}}/>
  </a>
  <li className="nav-item active">
      <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Memo</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Movie</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Board</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Login</a>
    </li>
  </ul>

</nav>
        );
    }
}
export default Navbar;