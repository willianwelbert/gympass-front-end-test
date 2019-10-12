import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ErrorPage from './pages/ErrorPage/ErrorPage.component';
import Footer from './components/Footer/footer.component';

function App() {
  return (
    <div data-test='app'>
      <Switch>
        <Route exact path='/' render={() => <h1>hello world</h1> } />
        <Route exact path='/:repo' render={() => <h1>commits page</h1> } />
        <Route render={() => <ErrorPage />} />
      </Switch>
      <Footer data-test='footer' />
    </div>
  );
}

export default App;
