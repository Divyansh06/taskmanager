import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import Router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
