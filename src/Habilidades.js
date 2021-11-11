import React, { Component } from "react";
import Slide from "react-reveal";

class Habilidades extends Component {
  CoresAleatorias() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const mensagemHabilidade = this.props.data.mensagemHabilidade;

    const Habilidades = this.props.data.Habilidades.map((Habilidades) => {
      const backgroundColor = this.CoresAleatorias();
    });

    return (
      <section id="resumo">

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Habilidades</span>
              </h1>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Habilidades;
