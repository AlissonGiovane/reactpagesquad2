import React, { Component } from "react";
import Fade from "react-reveal";
import i1 from './i1.png';
import i2 from './i2.png';
import i3 from './i3.png';
import i4 from './i4.png';

class Adocao extends Component {

  render() {

    return (
      <section>
        <div id="frame1">
        <h1>Quer fazer parte dessa corrente do bem e adotar? Entenda como funciona:</h1>
         
          <div id="textinho1">
            <img src={i1} id="i1"></img>
            <p>Visite as páginas de cães e gatos disponíveis e dedicado para a adoção. Lá você irá encontrar os pets para criar uma conexão perfeita com o cão e/ou gato que busca um novo lar.</p>
            </div>

            <div id="textinho2">
            <img src={i2} id="i2"></img>
            <p>Visite as páginas de cães e gatos disponíveis e dedicado para a adoção. Lá você irá encontrar os pets para criar uma conexão perfeita com o cão e/ou gato que busca um novo lar.</p>
            </div>

            <div id="textinho3">
            <img src={i3} id="i3"></img>
            <p>Visite as páginas de cães e gatos disponíveis e dedicado para a adoção. Lá você irá encontrar os pets para criar uma conexão perfeita com o cão e/ou gato que busca um novo lar.</p>
            </div>

            <div id="textinho4">
            <img src={i4} id="i4"></img>
            <p>Visite as páginas de cães e gatos disponíveis e dedicado para a adoção. Lá você irá encontrar os pets para criar uma conexão perfeita com o cão e/ou gato que busca um novo lar.</p>
            </div>

            
              <ul>

                <a className="cadastro-btn">
                  <i className=""></i>FAÇA SEU CADASTRO AQUI!
                </a>
              </ul>
            

            
              <ul>

                <a className="form-btn">
                  <i className=""></i>Preencher Formulário.
                </a>
              </ul>
            

            <div id="textinhos-finais">
            <h3>Ainda está com dúvidas sobre a adoção?</h3>

            <a> <p>Clique aqui e fale conosco</p> </a>
            </div>
        </div>
      </section>
    );
  }
}

export default Adocao;
