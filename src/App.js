import React from 'react';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' render={() => <h1>hello world</h1> } />
      <Route exact path='/:repo' render={() => <h1>commits page</h1> } />
      <Route render={() => <h1>404 page</h1>} />
    </Switch>
     <footer>made with <span role='img' aria-label='brain emoji'>🧠</span>, <span role='img' aria-label='flexing arm emoji'>💪</span> and <span role='img' aria-label='red heart emoji'>❤️</span> by <a href='https://github.com/willianwelbert' target='_blank' rel='noreferrer noopener'>willian welbert</a></footer>
    </>
  );
}

export default App;
