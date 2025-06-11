import "./App.scss";
import Title from "../components/Title/Title";
import Container from "../components/Container/Container";
import Slider from "../components/Slider/Slider";

function App() {
  return (
    <>
      <div className="feedback">
        <Container>
          <Title as="h1" style={{fontSize:'48px',marginBottom:'34px'}}>Voices of Success with Sales Fortuna</Title>

          <div className="feedback__slider">
            <Slider />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
