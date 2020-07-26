import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

import './style.css'

export default function Login() {
    return (
        <div id="login-page" class="row">
            <div class="col s12 z-depth-6 card-panel">
                <form class="login-form">

                    <div class="row">
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                           
                            <input class="validate" id="email" type="email" />
                            <label for="email" data-error="wrong" data-success="right">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            
                            <input id="password" type="password" />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m12 l12  login-text">
                            <input type="checkbox" id="remember-me" />
                           
                        </div>
                    </div>
                    <div class="row">
                        <Link to='/'>
                        <div class="input-field col s12">
                            <span class="btn waves-effect waves-light col s12">Login</span>
                        </div>
                        </Link>
                    </div>


                </form>
            </div>
        </div>
    )
}