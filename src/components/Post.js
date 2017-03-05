import React from 'react';

class Post extends React.Component {
  render () {
    return(
      <div>
        {this.props.params.title}
      </div>
    )
  }
}
// let Post =function({params}=props){   //结构赋值
//   console.log(props);
//   return(
//     <div>par</div>
//   )
// }
export default Post;
