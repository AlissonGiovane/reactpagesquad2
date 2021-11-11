import React, { Component } from "react";
import Fade from "react-reveal";
import Slide from "react-reveal";
import Cacholo from './CACHOLO.svg';
import n1img from './n1-img.png';
import n2img from './n2-img.png';
import n3img from './n3-img.png';
import Gato from './GATO.svg';


class QueroAdotar extends Component {


  render() {

    return (
      <section>
      <div id="QueroAdotar">
        <div className="Branca">
          <div className="Cacholo">
        <img src={Cacholo} id="Cacholo-img"/>
        <Fade bottom duration={2000}>
              <ul>

                <a className="cachorro-btn">
                  <i className=""></i>Cachorro
                </a>
              </ul>
            </Fade>
        </div>

        <div className="Gato">
        <img src={Gato} id="Gato-img"/>
        <Fade bottom duration={2000}>
              <ul>

                <a className="Gato-btn">
                  <i className=""></i>Gato
                </a>
              </ul>
            </Fade>
        </div>

        <div id="titulo" lassName="three columns header-col">
        <h1 >Quero Adotar!</h1>
        </div>
        </div>
      </div>

      <div id="Roxa">
        <h2>Além de adotar, você também pode ajudar de outras maneiras:</h2>


        <div id="num1">
          <h3>ADOTE UM PET!</h3>
          <img src={n1img} id="n1-img"/>
          <p>Adotando um pet você contribui para com que a vida de um animalsinho encontre um lar e assim, tenha uma família</p>
        </div>

        <div id="num2">
          <h3>ASSINE NOSSA CAMPANHA</h3>
          <img src={n2img} id="n2-img"/>
          <p>Adotando um pet você contribui para com que a vida de um animalsinho encontre um lar e assim, tenha uma família</p>
        </div>

        <div id="num3">
          <h3>SEJA VOLUNTÁRIO</h3>
          <img src={n3img} id="n3-img"/>
          <p>Adotando um pet você contribui para com que a vida de um animalsinho encontre um lar e assim, tenha uma família</p>
        </div>

        <div id="not">
          <h1>Deseja receber notificações do site?</h1>
          <p>cadastre seu e-mail e fique por dentro das atualizações e solicitações
            <input></input>
          </p>
        </div>

        </div>  

      </section>
    );
  }
}

export default QueroAdotar;
