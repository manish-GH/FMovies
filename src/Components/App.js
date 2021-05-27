import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Navbar } from "./Navbar";
import { Trending } from "./Trending";
import { Movies } from "./Movies";
import { TvSeries } from "./TvSeries";
import { Search } from "./Search";
import { BottomNavbar } from "./BottomNavbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Trending} />
          <Route path="/movies" component={Movies} />
          <Route path="/tv-series" component={TvSeries} />
          <Route path="/search" component={Search} />
        </Switch>
      </Container>
      <div className="hide foot">
        <BottomNavbar />
      </div>
    </div>
  );
}

export default App;
