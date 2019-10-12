import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage/ErrorPage.component';
import Footer from './components/Footer/footer.component';
import ListPage from './pages/ListPage/ListPage.component';

function App() {
  return (
    <div data-test='app'>
      <Switch>
        <Route exact path='/' render={() => <ListPage />} />
        <Route exact path='/:repo' render={() => <ListPage />} />
        <Route render={() => <ErrorPage message='404 page not found' />} />
      </Switch>
      <Footer data-test='footer' />
    </div>
  );
}

export default App;
