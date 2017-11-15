import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import NewUser from './containers/NewUser';
import UsersList from './containers/UsersList';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <section>
          <NewUser />
          <UsersList />
        </section>
      </Provider>
    );
  }
}

export default App;
