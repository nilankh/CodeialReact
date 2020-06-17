import React, { Component } from 'react';
import PostsList from './PostsList';

class Home extends Component {
    render() {
        const {posts} = this.props;
        // console.log('Props', this.props);
        return (
            <div>
                <PostsList posts={posts}/>
            </div>
        );
    }
}

export default Home;
