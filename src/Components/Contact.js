import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contato extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="contato">
        <h1>CONTATE-NOS</h1>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form action="" method="post" id="Formcontato" name="Formcontato">
                <fieldset>
                  <div>
                    <label htmlFor="nomeContato">
                      Nome <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="nomeContato"
                      name="nomeContato"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contatoEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contatoEmail"
                      name="contatoEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="telefoneContato">Telefone</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="telefoneContato"
                      name="telefoneContato"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contatoMensagem">
                      Mensagem <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contatoMensagem"
                      name="contatoMensagem"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Enviar</button>
                  </div>
                </fieldset>
              </form>

            </div>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contato;
