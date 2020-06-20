import React, { Component, useReducer } from 'react';

class Settings extends Component {
    render() {
        return (
            <div className="settings">
                <div className="img-container">
                    <img
                        src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                        alt="user-dp"
                        id="user-dp"
                     />
                </div>
                <div className="field">
                    <div className="field-label">Email</div>
                    <div className="field-value">{user.email}</div>

                </div>
            </div>
        );
    }
}
function mapStateToProps( { auth }) {
    return {
        auth,
    };
}
export default connect(mapStateToProps)(Settings);