import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./component/Create";
import BlogDetails from "./component/BlogDetails";
import Error404 from "./component/Error404";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/blogs/:id" component={BlogDetails} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
