import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Estoque from './pages/Estoque'
import ProdutosVendidos from './pages/ProdutosVendidos'



export default function routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/cadastro' component={Cadastro} />
                <Route path='/estoque' component={Estoque} />
                <Route path='/produtosVendidos' component={ProdutosVendidos} />
            </Switch>
        </BrowserRouter>
    )
}
