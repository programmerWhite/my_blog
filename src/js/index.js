import React from 'react';
import ReactDOM from 'react-dom';


import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


import Home from 'common/js/home/home';
import Blog from "common/js/blog/blog";
import ContractMe from "common/js/contractMe/contractMe";

ReactDOM.render(
    (<Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/contract" component={ContractMe} />
            </Switch>
        </div>
    </Router>),
    document.getElementById('content'));

