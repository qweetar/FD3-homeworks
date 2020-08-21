import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
      user: PropTypes.object.isRequired,
  };

  state = {
    user: this.props.user,
  };

  componentWillReceiveProps = (newProps) => {
    // console.log("MobileClient id=" + this.props.id + " componentWillReceiveProps");
    this.setState({user: newProps.user});
  };

  editClient = () => {
    mobileEvents.emit("ENewEditClient", this.props.user.id);
  }

  deleteClient = () => {
    var confirmDel = confirm("Вы действительно хотите удалить?");
    if (confirmDel) {
      mobileEvents.emit("ENewDeleteClient", this.props.user.id);
    }
  }

  render() {

    console.log("MobileClient id=" + this.props.user.id + " render");
    
    return (
      <tr >
        <td className="card-title">{this.props.user.familyname}</td>
        <td className="card-text">{this.props.user.name}</td>
        <td className="card-text">{this.props.user.surname}</td>
        <td className="card-text">{this.props.user.balance}</td>
        <td>
          <span className={this.state.user.status == "active" ? "badge badge-success" : "badge badge-danger"}>{this.props.user.status}</span>
        </td>
        <td>
        <button className="btn btn-outline-primary ml-3 mb-1" onClick={this.editClient}>{"Изменить"}</button>
        </td>
        <td>
        <button className="btn btn-outline-danger ml-3 mb-1" onClick={this.deleteClient}>{"Удалить"}</button>
        </td>
      </tr>      
    );
  }
}

export default MobileClient;
