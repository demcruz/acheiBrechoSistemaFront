import React from 'react'
import {Link} from 'react-router-dom'


import './style.css'
import logo from '../../assets/aceiBrecho1.png'



export default function ProdudoVandido() {
    return (
        <div>

            <nav>
                <div className="nav-wrapper ">
                    <img src={logo} alt="logo" width="4%" />
                </div>
            </nav>

            
            <div className="container center">
                <h1>Tela em Construção</h1>
                <Link to='/' className="red-text text-darken-2" href="index.html">   <p>Voltar para <br /> Tela inicial</p> </Link>
            </div>

        </div>


    )
}






/*

 <div>
            <nav>
                <div className="nav-wrapper ">
                    <img src={logo} alt="logo" width="4%" />
                </div>
            </nav>

            <section className="container">
                <div className="row">
                    <div className="col s6 ">
                        <h5 className="red-text text-lighten-2">Produtos Vendidos</h5>
                    </div>
                </div>

                <table className="striped">
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
                            <td><a className="waves-effect waves-light btn red">Pago</a></td>

                        </tr>
                        <tr>
                            <td>43543fefenf23424</td>
                            <td>Camiseta T-Shirt</td>
                            <td>Carol Cruz</td>
                            <td>R$ 240,00</td>
                            <td>R$ 120,00</td>
                            <td>13 dias</td>
                            <td><a className="waves-effect waves-light btn red">Pago</a></td>

                        </tr>
                        <tr>
                            <td>43543fefenf23424</td>
                            <td>Camiseta T-Shirt</td>
                            <td>Carol Cruz</td>
                            <td>R$ 240,00</td>
                            <td>R$ 120,00</td>
                            <td>30 dias</td>
                            <td><a className="waves-effect waves-light btn red">Pago</a></td>

                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

*/