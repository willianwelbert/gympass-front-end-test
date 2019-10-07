import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Footer from './components/Footer/footer.component';

function App() {
  return (
    <div data-test='app'>
      <Switch>
        <Route exact path='/' render={() => <h1>hello world</h1> } />
        <Route exact path='/:repo' render={() => <h1>commits page</h1> } />
        <Route render={() => <h1>404 page</h1>} />
      </Switch>
      <Footer data-test='footer' />
    </div>
  );
}

export default App;
