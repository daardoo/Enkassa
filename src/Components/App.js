import React from "react";
import { Component, Fragment } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Exercises from "./Exercises";
import { distrito, Casas, banioPrivado, tipoCasa } from "../Datos";

export default class extends Component {
  state = {
    Casas,
    Casa: {}
  };

  getCasasByDistrito() {
    return Object.entries(
      this.state.Casas.reduce((Casas, Casa) => {
        const { distrito } = Casa;

        Casas[distrito] = Casas[distrito] ? [...Casas[distrito], Casa] : [Casa];

        return Casas;
      }, {})
    );
  }
  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleVerCasasCategoriaDistrito = id => {
    this.setState(({ Casas }) => ({
      Casa: Casas.find(ca => ca.id === id)
    }));
  };

  handleFiltrobanio = filtrobanio => {
    this.setState({
      filtrobanio
    });
  };
  handleFiltroamoblado = filtroamoblado => {
    this.setState({
      filtroamoblado
    });
  };
  handleFiltroprecio = filtroprecio => {
    this.setState({
      filtroprecio
    });
  };
  handleNuevaCasaCreate = Casa => {
    this.setState(({ Casas }) => ({
      Casas: [...Casas, Casa]
    }));
  };

  render() {
    const Casas = this.getCasasByDistrito(),
      {
        category,
        Casa,
        filtrobanio,
        filtroamoblado,
        filtroprecio
      } = this.state;
    console.log("filtro baño");
    console.log(filtrobanio);

    return (
      <Fragment>
        <Header
          categoriasDistrito={distrito}
          onNuevaCasaCreate={this.handleNuevaCasaCreate}
          tiposcasa={tipoCasa}
        />
        <Footer
          category={category}
          Distritos={distrito}
          onSelect={this.handleCategorySelected}
        />
        <Exercises
          Casas={Casas}
          category={category}
          filtrobanio={filtrobanio}
          filtroamoblado={filtroamoblado}
          filtroprecio={filtroprecio}
          banioPrivado={banioPrivado}
          tipoCasa={tipoCasa}
          onSelect={this.handleVerCasasCategoriaDistrito}
          onCheckBanio={this.handleFiltrobanio}
          onCheckAmoblado={this.handleFiltroamoblado}
          onCheckPrecio={this.handleFiltroprecio}
          casa={Casa}
        />
      </Fragment>
    );
  }
}
