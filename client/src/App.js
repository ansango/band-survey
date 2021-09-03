import { BandAdd } from "./components/BandAdd";
import BandChart from "./components/BandChart";
import { BandList } from "./components/BandList";
import { Container } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import { Main } from "./components/ui/Main";

const App = () => {
  return (
    <Container
      maxW="container.xl"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <NavBar />
      <Main>
        <BandChart />
        <BandList />
        {/* <BandAdd /> */}
      </Main>
      <Footer />
    </Container>
  );
};

export default App;
