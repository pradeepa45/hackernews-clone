import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import {Segment, Message, Button} from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';

class ErrorPage extends Component{
    render(){
        document.title = 'Error:404 Not Found'
        return(
            <div id="loa">
                <Segment very raised padded  id='loaders'>
                   <Message error>
                       <Header>Uh-Oh.. Looks like you're lost</Header>
                        <Button inverted as={Link} to='/best'>Go Back</Button>
                   </Message>
                </Segment>
            </div>
        )
    }
}