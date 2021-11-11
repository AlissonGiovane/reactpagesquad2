import React, { Component } from "react";
import Slide from "react-reveal";
import  Jpe from './jpe.png';
import Insta from './instagram-logo.svg';
import Facebook from './Facebook-Logo.svg';
import Juh from './Juh.jpeg';
import Noeh from './noeh.jpeg';
import Gab from './Gab.jpeg';

class Quemsomos extends Component {

  render() {

    return (
      <section id="containerqs">
        <div id="quem-Somos"> 
          <div id="textinho">
              <h1>QUEM SOMOS</h1>
              <p>Juntas por eles é uma  empresa do terceiro setor, ela vai se encaixar na sigla ONG, Organização não governamental, que, sem fins lucrativos, defende uma causa voluntária. Organizado e administrado por mulheres, o Juntas por Eles tem também como  intenção de arrecadar, de forma transparente, por meio de doações e venda de artes próprias, dinheiro que apoia e fortalece a causa para se manter viva e continuar ajudando todos animais. 
               Os lucros arrecadados nos produtos são revertidos para clínicas veterinárias ou casas de lar temporário, para que possamos cuidar e ajudar a abrigar esses animais em situações vulneráveis. Nosso site oferece um cadastro nos ajudará a organizar toda a arrecadação e acompanha o processo de adoção e doação, dessa forma, mantemos um controle e clareza na comunicação de dono com o futuro pet.
              </p>
              <h3>Nossas Redes:</h3>
              <a href=""> <img src={Insta} id="insta-logo"></img> </a>
              <a href=""> <img src={Facebook} id="Facebook-logo"></img> </a>
            </div>

            <div id="devs">
              <h1>DESENVOLDEDORES VOLUNTÁRIOS</h1>
              <img src={Juh} id="Juh"></img>
              <img src={Noeh} id="Noeh"></img>
              <img src={Gab} id="Gab"></img>
          </div>

        </div>
        
      </section>
    );
  }
}

export default Quemsomos;
