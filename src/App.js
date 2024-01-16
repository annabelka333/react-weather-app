import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          <button className="btn btn-primary">Hello</button>
          This project was coded by
          <a href="https://www.instagram.com/vediashkyna/" target="blank">
            {" "}
            Anna Vediashkyna
          </a>{" "}
          and it is{" "}
          <a href="https://prismatic-trifle-d81140.netlify.app/" target="blank">
            opened-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
