import React from 'react';
import {Provider} from 'react-redux'
import {store} from './Store'
import List from './List'

export default function App() {
  return (
    <Provider store = {store}>
      <List></List>
    </Provider>
  );
}
