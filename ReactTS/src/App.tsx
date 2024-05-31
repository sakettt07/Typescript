import "./App.css";
import Page from "./components/Page";

const App = () => {
  return (
    <div>
      <h1>This is my new type script react tutorial</h1>

      <p>Primarily we are going to learn about prop drilling</p>
      <Page heading={"Hello typescript walo"} count={1}>
        <button>NO naa</button>
      </Page>
    </div>
  );
};
export default App;

// To pass a function as props

// func1={(a:string)=>{
//   alert(a)
