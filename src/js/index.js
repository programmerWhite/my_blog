import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from 'common/js/home/home';
import Blog from "common/js/blog/blog";
import ContractMe from "common/js/contractMe/contractMe";
import Live from "common/js/myLive/myLive";
import Login from "common/js/login/login";
import UpLoadImg from "common/js/upLoadImg/upLoadImg";

var IP_ADDRESS = "localhost:18080";

ReactDOM.render(
    (<Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/live" component={Live} />
                <Route path="/blog" component={Blog} />
                <Route path="/contract" component={ContractMe} />
                <Route path="/login" component={Login} />
                <Route path="/upLoadImg" component={UpLoadImg} />
            </Switch>
        </div>
    </Router>),
    document.getElementById('content'));

