import React, { Component } from "react";
import Fade from "react-reveal";
import ReactLogo from './logo.png';
import Doguinho from './Doguinho.png';
import LogoWallpaper from './LogoWallpaper.png';

class Cabecalho extends Component {
  render() {

    return (
      <header id="home">
        <nav id="nav-wrap">
        <img src={ReactLogo} id="Logo" className="nav"/>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Sobre Nós
              </a>
            </li>


            <li>
              <a className="smoothscroll" href="#QueroAdotar">
                Como Funciona
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#containerqs">
                Quem Somos
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#Roxa">
                Mais info
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
        <img src={Doguinho} id="Dog"/>
        <img src={LogoWallpaper} id="LogoWallpaper"/>
          <div className="banner-text">
            <Fade bottom duration={2000}>
              <ul>

                <a className="VC-btn">
                  <i className=""></i>Vamos Começar!
                </a>
              </ul>
            </Fade>
          </div>
        </div>


      </header>
    );
  }
}

export default Cabecalho;
