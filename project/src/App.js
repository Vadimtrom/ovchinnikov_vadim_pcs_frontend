import './App.css';
import Pop from "./component/Pop";
import Search from "./component/Search";
import MoviePopular from "./component/MoviePopular";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <a href="./" className="header__logo">Movie Theater</a>
        </div>
          <form>

              <a href="">Login</a>
              <input type="text" className="header__search" placeholder="Поиск"/>
          </form>
          <MoviePopular/>

          <Search/>

      </header>

      <div className="container">
        <div className="movies">
            <Pop/>
        </div>
      </div>
    </div>
  );
}


export default App;
