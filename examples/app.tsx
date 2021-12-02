/** @jsxImportSource @emotion/react */
import ExampleUseSelect from "./ExampleUseSelect";
import ExampleUseModal from "./ExampleUseModal";
import ExampleForm from "./ExampleForm";
import ExampleNavigator from "./ExampleNavigator";
import { HashRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ExampleNavigator} />
        <Route exact path="/use-select" component={ExampleUseSelect} />
        <Route exact path="/use-modal" component={ExampleUseModal} />
        <Route exact path="/use-form" component={ExampleForm} />
      </Switch>
    </HashRouter>
  );
}
