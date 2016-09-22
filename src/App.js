import React from 'react';
// import NavHeader from './Component/NavHeader.js';
// import Footer from './Component/Footer.js';
// import LeftNav from './LeftNav.js';
class App extends React.Component {
  render () {
    return(
      <div className="content-wrap">
        {this.state.small ? <NavHeader title={this.state.title} /> : <LeftNav title={this.state.title}/> }
        <content className="content-main">
          {this.props.children}
        </content>
        {this.state.small ? <Footer /> : "" }
      </div>
    )
  }
}
