import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Row, Image, Button, Grid} from 'react-bootstrap';
import './Home.css';
export default class Home extends Component{
    render(){
        return(
            <div>
                
                <Grid>
                    <Jumbotron>
                        <h2>Welcome to The News Channel Homepage</h2>
                        <p>This is the very beginning of things to come</p>
                    </Jumbotron>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Grid>
            </div>
        );
    }
}
