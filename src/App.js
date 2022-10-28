import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './components/Navbar/Navbar';
import Review from './components/ReviewCards/ReviewCard';
import WaBt from './components/WA-BT/waBT';
import HomePage from './pages/home/home';
import Footer from './components/Footer/footer';
import { Box } from '@mui/system';
import FloatingBar from './components/FloatingBar/FloatingBar';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <HomePage/>
      <Review/>
      <WaBt/>
      <FloatingBar />
      <Box sx={{
        marginBottom: "-4px",
      }}>
        <img width={'100%'} src="https://nolt.io/static/dist/images/landing/footer.2353da24de.svg" alt="" />
      </Box>
      <Footer/>
    </div>
  );
}

export default App;
