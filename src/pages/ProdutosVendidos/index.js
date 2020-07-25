import React from 'react'

import logo from '../../assets/aceiBrecho1.png'

export default function ProdudoVandido() {
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
                        <h5 class="red-text text-lighten-2">Produtos Vendidos</h5>
                    </div>
                </div>

                <table class="striped">
                    <thead>
                        <tr>
                            <th>Codigo do Produto</th>
                            <th>Nome do Produto</th>
                            <th>Nome Cliente</th>
                            <th>Item Preço</th>
                            <th>Valor a Pagar</th>
                            <th>Data de Cadastro</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>43543fefenf23424</td>
                            <td>Camiseta T-Shirt</td>
                            <td>Carol Cruz</td>
                            <td>R$ 240,00</td>
                            <td>R$ 120,00</td>
                            <td>10 dias</td>
                            <td><a class="waves-effect waves-light btn red">Pago</a></td>

                        </tr>
                        <tr>
                            <td>43543fefenf23424</td>
                            <td>Camiseta T-Shirt</td>
                            <td>Carol Cruz</td>
                            <td>R$ 240,00</td>
                            <td>R$ 120,00</td>
                            <td>13 dias</td>
                            <td><a class="waves-effect waves-light btn red">Pago</a></td>

                        </tr>
                        <tr>
                            <td>43543fefenf23424</td>
                            <td>Camiseta T-Shirt</td>
                            <td>Carol Cruz</td>
                            <td>R$ 240,00</td>
                            <td>R$ 120,00</td>
                            <td>30 dias</td>
                            <td><a class="waves-effect waves-light btn red">Pago</a></td>

                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}