
import './App.css';
import Header from "./Header";
import  Sidebar  from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage";
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>

        <Switch>
          <Route path="/search/:searchTerm">
              <div className="app__page">
              <Sidebar className="sidebar"/>
              <SearchPage/>
              
              </div>
        </Route>
        <Route path="/">
        <div className="app__page">
           <Sidebar classname="sidebar"/>
           <RecommendedVideos/>
        </div>
        </Route>
        </Switch>
      </Router>
     
    </div>

    
  );
}

export default App;
