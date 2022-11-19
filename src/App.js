import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./config/Routes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
