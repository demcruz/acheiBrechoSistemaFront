import React from 'react'

import logo from '../../assets/aceiBrecho1.png'


export default function Cadastro() {

    


    return (
        <div>
            <nav>
                <div className="nav-wrapper ">
                    <img src={logo} alt="logo" width="4%" />
                </div>
            </nav>

            <section className="container">
                <div className="row">
                    <form className="col s12">
                    <h5>Cliente </h5>
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Primeiro Nome" id="first_name" type="text" className="validate" />
                            </div>

                            <div className="input-field col s6">
                                <input placeholder="sobrenome" id="last_name" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="WhatsApp" id="disabled" type="text" className="validate" />
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="Email" id="last_name" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row">

                            <h5>Produto </h5>

                            <div className="input-field col s6">
                                <input placeholder="descrição" id="disabled" type="text" className="validate" />

                            </div>
                            <div className="input-field col s6">
                                <input placeholder="tamanho" id="last_name" type="text" className="validate" />

                            </div>

                            <div className="input-field col s4">
                                <input placeholder="preço" id="disabled" type="text" className="validate" />

                            </div>
                            <div className="input-field col s4">
                                <input placeholder="categoria" id="last_name" type="text" className="validate" />

                            </div>

                            <div className="input-field col s4">
                                
                                <input placeholder="Data de Cadastro" id="last_name" type="text" className="validate" />

                            </div>
                        </div>

                        <button className="btn waves-effect waves-light right red" type="submit" name="action">Cadastrar </button>
                    </form>
                </div>
            </section>
        </div>
    )
}