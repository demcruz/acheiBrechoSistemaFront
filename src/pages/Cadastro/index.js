import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import api from '../../services/api'

import logo from '../../assets/aceiBrecho1.png'


export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [sobreNome, setSobreNome] = useState('')
    const [whatsApp, setWhatApp] = useState('')
    const [email, setEmail] = useState('')
    const [produtos, setProduto] = useState([
        {
            nomeDescricao: "",
            tamanho: "",
            preco: "",
            categoria: "",
            dataCadastro: ""
        }
    ])

    const history = useHistory()

    console.log(produtos)
    async function handleSubmit(e) {
        e.preventDefault()

        const data = {
            nome,
            sobreNome,
            whatsApp,
            email,
            produtos
        }
        try {
            await api.post('achei', data)
            alert('Produto Cadastrado com Sucesso')
            console.log(data)
            history.push('/estoque')
        } catch (error) {
            console.log(data)
            alert('Erro ao cadastrar usuário')
        }
    }


    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const listProdutos = [...produtos]
        listProdutos[index][name] = value
        setProduto(listProdutos)
    }


    const handleRemoveClick = index => {
        const list = [...produtos];
        list.splice(index, 1);
        setProduto(list);
    };

    const handleAddClick = () => {
        setProduto([...produtos, { nomeDescricao: "", tamanho: "", preco: "", categoria: '', dataCadastro: '' }]);
    }


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
                    <h5>Cliente </h5>
                </div>

                    <div className="col s6 ">
                        <Link to='/' className="red-text text-darken-2" href="index.html">   <p>Voltar para <br /> Tela inicial</p> </Link>
                    </div>

                    <form className="col s12" onSubmit={handleSubmit}>




                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Primeiro Nome"

                                    type="text"
                                    className="validate"
                                    name="nome"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                            </div>

                            <div className="input-field col s6">
                                <input placeholder="sobrenome"
                                    type="text"
                                    className="validate"
                                    name="sobreNome"
                                    value={sobreNome}
                                    onChange={e => setSobreNome(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="WhatsApp"
                                    type="text"
                                    className="validate"
                                    name="whatsApp"
                                    value={whatsApp}
                                    onChange={e => setWhatApp(e.target.value)}
                                />
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="Email"
                                    type="text"
                                    className="validate"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}

                                />
                            </div>
                        </div>

                        <div className="row">
                            <h5>Produto </h5>

                            {produtos.map((x, i) => {
                                return (
                                    <div key={i}>
                                        <div className="input-field col s6">
                                            <input placeholder="descrição"
                                                type="text"
                                                className="validate"
                                                name="nomeDescricao"
                                                value={x.nomeDescricao}
                                                onChange={e => handleInputChange(e, i)}
                                            />
                                        </div>

                                        <div className="input-field col s6">
                                            <input placeholder="tamanho"
                                                type="text"
                                                className="validate"
                                                name="tamanho"
                                                value={x.tamanho}
                                                onChange={e => handleInputChange(e, i)}
                                            />
                                        </div>

                                        <div className="input-field col s4">
                                            <input placeholder="preço"
                                                type="text"
                                                className="validate"
                                                name="preco"
                                                value={x.preco}
                                                onChange={e => handleInputChange(e, i)}
                                            />
                                        </div>

                                        <div className="input-field col s4">
                                            <input placeholder="categoria"
                                                type="text"
                                                className="validate"
                                                name="categoria"
                                                value={x.categoria}
                                                onChange={e => handleInputChange(e, i)}
                                            />
                                        </div>



                                        <div className="input-field col s4">
                                            <input placeholder="Data de Cadastro"
                                                type="text"
                                                className="validate"
                                                name="dataCadastro"
                                                value={x.dataCadastro}
                                                onChange={e => handleInputChange(e, i)}
                                            />
                                        </div>

                                        <div className="btn-box">
                                            {produtos.length !== 1 &&
                                                <button className="hide-on-med-and-down btn-floating btn-small waves-effect waves-light red" onClick={() => handleRemoveClick(i)}>-</button>}
                                            {produtos.length - 1 === i &&
                                                <button className=" hide-on-med-and-down btn-floating btn-small waves-effect waves-light red" onClick={handleAddClick}>+</button>}
                                        </div>
                                    </div>
                                )


                            })}


                        </div>

                        <button className="btn waves-effect waves-light right red" type="submit" name="action">Cadastrar </button>
                    </form>
                </div>
            </section>
        </div>
    )
}