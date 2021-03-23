import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ProductView from '../pages/ProductView';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={ProductView} path="/product/:id"/>
    </Switch>
  </BrowserRouter>
);
export default Router;
