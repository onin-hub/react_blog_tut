import Navbar from './components/Navbar'
import Home from './Home'
import Create from './components/Create'
import BlogDetails from './components/shared/BlogDetails.Component'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/create" >
              <Create />
            </Route>
            <Route path="/blog-details/:blogID" >
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
