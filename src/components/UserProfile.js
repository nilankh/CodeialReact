import React, { Component } from 'react';
import { fetchUserProfile } from '../actions/profile';
import { connect } from 'react-redux';


class UserProfile extends Component {
    componentDidMount() {
      const { match } = this.props;
  
      if (match.params.userId) {
        // dispatch an action
        this.props.dispatch(fetchUserProfile(match.params.userId));
      }
    }

    checkIfUserIsAFriend = () => {
        console.log('this.props', this.props);
        const { match, friends } = this.props;
        const userId = match.params.userId;

        const index = 
    };
    render() {
        const {
          match: { params }, 
          profile,
        } = this.props;
        console.log('this.props', params);
        const user = profile.user;

        if(profile.inProgress) {
            return  <h1>Loading</h1>;
        }
        const isUserAFriend = this.checkIfUserIsAFriend();


        return (
            <div className="settings">
                <div className="img-container">
                    <img 
                        src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                        alt="user-dp"
                    />
                </div>

                <div className="field">
                    <div className="field-label">Name</div>
                    <div className="field-value">{user.name}</div>
                </div>

                <div className="field">
                    <div className="field-label">Email</div>
                    <div className="field-value">{user.email}</div>
                </div>

                <div className="btn-grp">
                    <button className="button save-btn">Add Friend</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps({ profile, friends }) {
    return {
        profile,
        friends,
    }
}
export default connect(mapStateToProps) (UserProfile);