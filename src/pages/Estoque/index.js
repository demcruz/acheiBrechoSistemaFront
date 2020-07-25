import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/aceiBrecho1.png'



export default function Estoque() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper ">
                    <img src={logo} alt="logo" width="4%" />
                </div>
            </nav>

            <section class="container">
                <div class="row">
                    <div class="col s6 ">
                        <h5 class="red-text text-lighten-2">Lista de Produtos Cadastrados</h5>
                    </div>




                    <table class="striped">
                        <thead>
                            <tr>
                                <th>Codigo do Produto</th>
                                <th>Nome do Produto</th>
                                <th>Nome Cliente</th>
                                <th>Item Preço</th>
                                <th>Data de Cadastro</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>43543fefenf23424</td>
                                <td>Camiseta T-Shirt</td>
                                <td>Carol Cruz</td>
                                <td>R$ 240,00</td>
                                <td>18/07/2020</td>
                                <td><a class="waves-effect waves-light btn red">Vendido</a></td>
                                <td><a class="waves-effect waves-light btn red">Editar</a></td>
                            </tr>
                            <tr>
                                <td>43543fefenf23424</td>
                                <td>Camiseta T-Shirt</td>
                                <td>Carol Cruz</td>
                                <td>R$ 240,00</td>
                                <td>18/07/2020</td>
                                <td><a class="waves-effect waves-light btn red">Vendido</a></td>
                                <td><a class="waves-effect waves-light btn red">Editar</a></td>
                            </tr>
                            <tr>
                                <td>43543fefenf23424</td>
                                <td>Camiseta T-Shirt</td>
                                <td>Carol Cruz</td>
                                <td>R$ 240,00</td>
                                <td>18/07/2020</td>
                                <td><a class="waves-effect waves-light btn red">Vendido</a></td>
                                <td><a class="waves-effect waves-light btn red">Editar</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>


        </div>
    )
}