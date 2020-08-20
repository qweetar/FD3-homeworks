import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
      familyname: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      balance: PropTypes.number.isRequired,
  };

  state = {
    familyname: this.props.familyname,
    balance: this.props.balance,
    status: this.props.status,
  };

  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({familyname: newProps.familyname, balance: newProps.balance});
  };

  editClient = () => {
    mobileEvents.emit("ENewEditClient", this.props.id);
  }

  deleteClient = () => {
    var confirmDel = confirm("Вы действительно хотите удалить?");
    if (confirmDel) {
      mobileEvents.emit("ENewDeleteClient", this.props.id);
    }
  }

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (
      <tr id={this.props.id} >
        <td className="card-title">{this.props.familyname}</td>
        <td className="card-text">{this.props.name}</td>
        <td className="card-text">{this.props.surname}</td>
        <td className="card-text">{this.props.balance}</td>
        <td>
          <span className={this.state.status == "active" ? "badge badge-success" : "badge badge-danger"}>{this.props.status}</span>
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
