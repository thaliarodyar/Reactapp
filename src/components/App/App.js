import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router";
import style from "./style.scss";
import { routeFor } from "../../common";

class App extends Component {

  render() {
    const { onChangeColor, color } = this.props;
    return (
      <div>
        <div styleName="react-logo" onClick={ onChangeColor } style={{ color}}>
          <span/>
        </div>
        <p>
          <Link to={ routeFor("awesome-react") } style={{color}}>
            Awesome React!
          </Link>
        </p>
      </div>
    );
  }

};

export default CSSModules(App, style);
