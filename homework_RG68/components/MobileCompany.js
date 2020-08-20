import React from "react";
import PropTypes from "prop-types";

import MobileClient from "./MobileClient";
import AddClient from "./AddClient";
import EditClient from "./EditClient";
import {mobileEvents} from './events';

class MobileCompany extends React.PureComponent {

    static propTypes = {
        companyName: PropTypes.string.isRequired,
        clients: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            surname: PropTypes.string.isRequired,
            familyname: PropTypes.string.isRequired,
            balance: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
          })
        ),
      };
    
      state = {
        companyName: this.props.companyName,
        clients: this.props.clients,
        editClientCard: null,
        addClient: null,
        editMode: null,
        filterMode: null,
      };

      componentDidMount = () => {
        mobileEvents.addListener("ENewClientSaved", this.saveClient);
        mobileEvents.addListener("ENewClientCancel", this.cancelClient);
        mobileEvents.addListener("ENewEditClient", this.editClient);
        mobileEvents.addListener("ENewUpdateClient", this.updateClient);
        mobileEvents.addListener("ENewDeleteClient", this.deleteClient);
      }

      componentWillUnmount = () => {
        mobileEvents.removeListener("ENewClientSaved", this.saveClient);
        mobileEvents.removeListener("ENewClientCancel", this.cancelClient);
        mobileEvents.removeListener("ENewEditClient", this.editClient);
        mobileEvents.removeListener("ENewUpdateClient", this.updateClient);
        mobileEvents.removeListener("ENewDeleteClient", this.deleteClient);
      }
    
      setName1 = () => {
        this.setState({companyName:'МТС'});
      };
    
      setName2 = () => {
        this.setState({companyName:'Velcom'});
      };

      addClient = (value) => {
        this.setState({editMode: "add"});
      };

      saveClient = (familyname, name, surname, balance) => {
        var newId = 0;
        this.state.clients.forEach(function(client, i, arr) {
          if (client.id > newId) {
            newId = client.id;
          }
          newId++;
        });
        var tempArr = this.state.clients;
        var newClient = {};
        newClient.id = newId;
        newClient.name = name;
        newClient.surname = surname;
        newClient.familyname = familyname;
        newClient.balance = balance;
        if (balance > 0) {
          newClient.status = "active";
        } else {
          newClient.status = "blocked";
        }
        tempArr.push(newClient);
        this.setState({clients: tempArr});
        this.setState({editMode: null});
      }

      cancelClient = () => {
        this.setState({editMode: null});
      }

      editClient = (id) => {
        if (id != null) {
          var chosenClient;
          this.state.clients.forEach(function(client, i, arr) {
            if (client.id == id) {
              chosenClient = client;
            }
          });
          this.setState({editClientCard: chosenClient});
          this.setState({editMode: "edit"});
        } else {
          this.setState({editClientCard: null});
          this.setState({editMode: null});
        }
      }

      updateClient = (id, familyname, name, surname, balance) => {
        var tempArr = this.state.clients;
        tempArr.forEach(function(client, i, arr) {
          if (client.id == id) {
            client.name = name;
            client.surname = surname;
            client.familyname = familyname;
            client.balance = balance;
            if (balance > 0) {
              client.status = "active";
            } else {
              client.status = "blocked";
            }
          }
        });
        this.setState({clients: tempArr});
        this.setState({editMode: null});
      }
      
      deleteClient = (id) => {
        var tempArr = this.state.clients.filter(client => client.id != id);
        this.setState({clients: tempArr});
      }

      filterAllClients = () => {
        this.setState({filterMode: null});
      }

      filterActiveClients = () => {
        this.setState({filterMode: "active"});
      }

      filterBlockedClients = () => {
        this.setState({filterMode: "blocked"});
      }

      clientList = () => {
        var tempClientList;
        if (this.state.filterMode == "active") {
          return tempClientList = this.state.clients.filter(client => client.status == "active");
        } else if (this.state.filterMode == "blocked") {
          return tempClientList = this.state.clients.filter(client => client.status == "blocked");
        } else {
          return tempClientList = this.state.clients;
        }
      }


      
      render() {
    
        console.log("MobileCompany render");

        var clientsForRender = this.clientList();
        var clientsCode = clientsForRender.map(client => 
          <MobileClient 
            familyname = {client.familyname}
            name = {client.name}
            surname = {client.surname}
            status = {client.status}
            id = {Number(client.id)}
            key = {Number(client.id)}
            balance = {Number(client.balance)}
          />
        );

        if (this.state.editMode == "add") {
          var addClientCardTag = 
            <AddClient/>
          ;
        }

        if (this.state.editMode == "edit") {
          var editClientCardTag = 
            <EditClient 
              id = {Number(this.state.editClientCard.id)}
              familyname = {this.state.editClientCard.familyname}
              name = {this.state.editClientCard.name}
              surname = {this.state.editClientCard.surname}
              balance = {Number(this.state.editClientCard.balance)}
            />
          ;
        }

    
        return (
          <div className='MobileCompany'>
            <button className="btn btn-danger ml-3 mt-3" type="button" onClick={this.setName1}>{"МТС"}</button>
            <button className="btn btn-warning ml-3 mt-3" type="button" onClick={this.setName2}>{"Velcom"}</button>
            <div>
              <p className="h3 ml-3 mt-3" >Компания &laquo;{this.state.companyName}&raquo;</p>
              <div className="btn-group ml-3" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary mb-3" onClick={this.filterAllClients}>{"Все"}</button>
                <button type="button" className="btn btn-secondary mb-3" onClick={this.filterActiveClients}>{"Активные"}</button>
                <button type="button" className="btn btn-secondary mb-3" onClick={this.filterBlockedClients}>{"Заблокированные"}</button>
              </div>
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">{"Фамилия"}</th>
                    <th scope="col">{"Имя"}</th>
                    <th scope="col">{"Отчество"}</th>
                    <th scope="col">{"Баланс BYN"}</th>
                    <th scope="col">{"Статус"}</th>
                    <th scope="col">{"Редактирование"}</th>
                    <th scope="col">{"Удалить"}</th>
                  </tr>
                </thead>
                <tbody>{clientsCode}</tbody>
              </table>
            </div>
            <div className="ml-3">
              <button className="btn btn-primary mb-3 ml-3" onClick={this.addClient} disabled={this.state.editMode == "edit"}>{"Добавить клиента"}</button>
            </div>
            {this.state.editMode == "add" && addClientCardTag}
            {this.state.editMode == "edit" && editClientCardTag}
          </div>
        )
        ;
    
      }
    

}

export default MobileCompany;