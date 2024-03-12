import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import episodes from './data/episodesData';
import Blog from './pages/Blog';
import Episode from './pages/Episode';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/nick" component={Blog}/>
        {Object.keys(episodes).map((episodeKey) => (
          <Route key={episodeKey} path={`/${episodeKey}`} render={() => <Episode episodeNumber={episodeKey} />} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;