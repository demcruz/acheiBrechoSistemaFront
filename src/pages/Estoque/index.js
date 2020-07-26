import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import logo from '../../assets/aceiBrecho1.png'



export default function Estoque() {

    const [clientes, setClientes] = useState([])
    const [produtos, setProdutos] = useState([])


    useEffect(() => {
        api.get('achei').then(res => {
            setClientes(res.data)
        })
    }, [])


    useEffect(() => {
        api.get('achei').then(res => res.data.map(produto => {
            setProdutos(produto.produtos)
            console.log(produto.produtos)
        }))
    }, [])




    return (
        <div>
            <nav>
                <div className="nav-wrapper ">
                    <img src={logo} alt="logo" width="4%" />
                </div>
            </nav>

            <section className="container">
                <div className="row">
                    <div className="col s6 ">
                        <h5 className="red-text text-lighten-2">Lista de Produtos Cadastrados</h5>
                    </div>

                    <div className="col s6 ">
                    <Link to='/' className="red-text text-darken-2" href="index.html">   <p>Voltar para <br /> Tela inicial</p> </Link>
                    </div>


                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nome Cliente</th>
                                <th>Whats App</th>
                                <th>Email</th>
                                <th>produto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.nome + " " + data.sobreNome}</td>
                                    <td>{data.whatsApp}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        {
                                            data.produtos.map((datas, i) => (
                                                <ul key={i}>
                                                    <li>{` ${datas.nomeDescricao} ${datas.categoria}  ${datas.dataCadastro} `} </li>

                                                </ul>

                                            ))}
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </section>


        </div>
    )
}