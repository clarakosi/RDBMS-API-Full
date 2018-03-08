import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../Actions/index';
import Postss from './Posts2';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: false,
      posts: []
    }
  }

  componentDidMount() {
    this.props.getPosts();
  }

  showPosts = (id) => {
    const posts = this.props.posts.filter(post => post.userId === id);
    const active = !this.state.filtered;
    this.setState({ posts, filtered: active });
    console.log(this.state.filtered);
  }

  render() {
    return (
      <div>
        <div onClick={() => this.showPosts(this.props.id) }>
          {this.props.user}
        </div>
          {this.state.filtered ? <Postss posts={this.state.posts} /> : null }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, { getPosts })(Posts);

      // <div style={this.state.filtered ? null : {display: 'none'}}>
      //   {this.state.posts.map(post => {
      //     return <div key={post.id}>{post.text}</div>
      //   })}
      // </div>