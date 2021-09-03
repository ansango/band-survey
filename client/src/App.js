import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";

const App = () => {
  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status <span className="text-success">Online</span>
          <span className="text-danger">Online</span>
        </p>
      </div>
      <h1>Band Survey</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <BandList />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
};

export default App;
