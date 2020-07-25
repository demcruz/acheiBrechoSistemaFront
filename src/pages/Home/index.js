import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/aceiBrecho1.png'
import load from '../../assets/load.svg'
import register from '../../assets/sales.svg'
import sales from '../../assets/sales.svg'


export default function Home() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper " >
                    <img src={logo} alt="logo" width="4%" />

                </div>
            </nav>

            <section className="container">
                <div className="row">

                    <div className="col s4 ">
                        <div className="card red lighten-2">
                            <div className="card-content white-text center">
                                <img src={register} alt="vendas" width="25%" />
                            </div>
                            <Link to="/cadastro">
                                <div className="card-action grey lighten-2">
                                    <span class="red-text text-darken-2">Cadastro de Produtos</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div class="col s4 ">
                        <div class="card   red lighten-2">
                            <div class="card-content white-text center">
                                <img src={load} alt="vendas" width="25%" />
                            </div>
                            <Link to="/estoque">
                                <div class="card-action  grey lighten-2">
                                    <span className="red-text text-darken-2">Estoque</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div class="col s4 ">
                        <div class="card red lighten-2">
                            <div class="card-content white-text center">
                                <img src={sales} alt="vendas" width="25%" />
                            </div>
                            <Link to="/produtosVendidos">
                            <div class="card-action  grey lighten-2">
                                <span className="red-text text-darken-2" >Produtos Vendidos</span>
                            </div>
                            </Link>
                        </div>
                    </div>



                </div>
            </section>

        </div>


    )

}