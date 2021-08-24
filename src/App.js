import { Container, Icon, Menu } from 'semantic-ui-react'
import { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import BestStories from './BestStories';
import NewStories from './NewStories';
import TopStories from './TopStories';
import ErrorPage from './ErrorPage';

export default class App extends Component {
  state = {
    activeitem: 'best'
  }
  handleItemClick = (e, { name }) => {
    this.setState({
      activeitem: name,
    })
  }
  render() {
    const { activeitem } = this.state;
    return (
      <div id="cont">
        <Container fluid>
        <Router>
          <Menu size='huge' inverted id="myHeader" stackable >
            <Menu.Item id="to-top">
              <Icon name='hacker news square' size='large'></Icon>
            </Menu.Item>
            <Menu.Item
              as={NavLink} to='/best'
              name='best stories'
              activeitem={activeitem === 'best'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink} to='/top'
              name='top stories'
              activeitem={activeitem === 'top'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink} to='/new'
              name='latest stories'
              activeitem={activeitem === 'new'}
              onClick={this.handleItemClick}
            />
          </Menu>

          <Switch>
            <Route
              exact
              path='/best'
              render={() => {
                return (
                  <BestStories type={"best"} />
                )
              }}
            />

            <Route
              exact
              path='/hackernews-clone'
              render={() => {
                return (
                  <BestStories type={"best"} />
                )
              }}
            />

            <Route
              exact
              path='/top'
              render={() => {
                return (
                  <TopStories type={"top"} />
                )
              }}
            />

            <Route
              exact
              path='/new'
              render={() => {
                return (
                  <NewStories type={"new"} />
                )
              }}
            />
            <Route 
            path="/*"
            render={()=>{
              return(
                <ErrorPage />
              )
            }}
            />

          </Switch>
        </Router>

        </Container>

      </div>
    );
  }
}