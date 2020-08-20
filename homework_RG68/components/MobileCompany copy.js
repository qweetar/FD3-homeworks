import React from "react";
import PropTypes from "prop-types";

import MobileClient from "./MobileClient";

class MobileCompany extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        clients:PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.number.isRequired,
            surname: PropTypes.string.isRequired,
            familyname: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
            status: PropTypes.string.isRequired,
          })
        ),
      };
    
      state = {
        name: this.props.name,
        clients: this.props.clients,
      };
    
      setName1 = () => {
        this.setState({name:'МТС'});
      };
    
      setName2 = () => {
        this.setState({name:'Velcom'});
      };
      
      setBalance = (clientId,newBalance) => {
        let changed=false;
        let newClients=[...this.state.clients]; // копия самого массива клиентов
        newClients.forEach( (c,i) => {
          if ( c.id==clientId && c.balance!=newBalance ) {
            let newClient={...c}; // копия хэша изменившегося клиента
            newClient.balance=newBalance;
            newClients[i]=newClient;
            changed=true;
          }
        } );
        if ( changed )
          this.setState({clients:newClients});
      };
      
      setBalance1 = () => {
        this.setBalance(105,230);
      };
    
      setBalance2 = () => {
        this.setBalance(105,250);
      };
      
      render() {
    
        console.log("MobileCompany render");
    
        var clientsCode=this.state.clients.map( client => {
            let FIO={familyname:client.familyname,name:client.name,surname:client.surname};
            return <MobileClient key={client.id} id={client.id} FIO={FIO} balance={client.balance} />;
          }
        );
    
        return (
          <div className='MobileCompany'>
            <button className="btn btn-danger" type="button" value="=МТС" onClick={this.setName1} />
            <button className="btn btn-warning" type="button" value="=Velcom" onClick={this.setName2} />
            <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
            <div className='MobileCompanyClients'>
              {clientsCode}
            </div>
            <input type="button" value="Сидоров=230" onClick={this.setBalance1} />
            <input type="button" value="Сидоров=250" onClick={this.setBalance2} />
          </div>
        )
        ;
    
      }
    

}

export default MobileCompany;