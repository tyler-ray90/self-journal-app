import Quote from '../../components/quote/quote';
import '../../App.css';


const HomePage = (props) => {
    return (
        <div className="App-home">
    <main className="main">
      <h1>Accomplish more with Self Journal</h1>
      <Quote apiState={props.apiState}/>
      <section>
     </section>
    </main>
  </div>
    );
};


export default HomePage;