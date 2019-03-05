import React from 'react';
import Card from './Card';
import {hashHistory} from 'react-router';

//import { prependOnceListener } from 'cluster';

const Home = () => {

    const homeCard = {
        title: 'CFDA',
        text: 'Cadastro de funcionários e departamento atuante',
        button: 'Iniciar',
        action: () => hashHistory.push('/CFDA')
    },homeCard2 = {
        title: 'CDD',
        text: 'Cadastro e gerenciamento de departamento',
        button: 'Iniciar',
        action: () => hashHistory.push('/CDD')
    },homeCard3 = {
        title: 'GDM',
        text: 'Gerenciamento de Movimentações',
        button: 'Iniciar',
        action: () => hashHistory.push('/CDG')
    };

      return(
        <div className="container-fluid text-center ">
        <h2>RTcad - Gerenciamento e administração</h2>
        Seja Bem-Vindo. <b>Admin</b>
            <div className="row">
            <Card 
            title={homeCard.title}
            text={homeCard.text}
            button={homeCard.button}
            action={homeCard.action} />
            <Card 
            title={homeCard2.title}
            text={homeCard2.text}
            button={homeCard2.button}
            action={homeCard2.action} />
            <Card 
            title={homeCard3.title}
            text={homeCard3.text}
            button={homeCard3.button}
            action={homeCard3.action} />
            </div>
        </div>
      );
}

export default Home;
