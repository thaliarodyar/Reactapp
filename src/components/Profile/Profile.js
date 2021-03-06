import React from"react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alejandro Espinoza",
      email: "alexesba@gmail.com",
      avatar:"https://avatars2.githubusercontent.com/u/579793?v=4&s=460"
    }
  }
  render() {
    return(
      <div>
        <img src={ this.state.avatar } width="200" />
        <div>
          <p> { this.state.name } </p>
          <p> { this.state.email }</p>
        </div>
      </div>
    );
   }
}

export default Profile;
