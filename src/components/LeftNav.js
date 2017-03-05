import React from 'react';
import {Link} from 'react-router'


class LeftNav extends React.Component {
  render () {
    console.log(this.props.title)
    return(
      <div className='leftnav'>
        <h2>我的{this.props.title}</h2>
        <Link to='/' activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; Home</Link>
        <Link to='/blog' activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; blog</Link>
        <Link to='/work' activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; Work</Link>
        <Link to='/about' activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp; About</Link>
      </div>
    )
  }
}

export default LeftNav;
