import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout";
import { NotesContextProvider } from "./context/NotesCotext";
import EditPage from "./pages/Edit";
import Login from "./pages/Login";
import ApplayAtm from "./pages/ApplayAtm";
import AtmRequests from "./pages/AtmRequests";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8E498E",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "QuickSand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          
            <NotesContextProvider>
              <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/applay_atm" element={<ApplayAtm/>}/>
                <Route path="/atm_requests" element={<AtmRequests/>}/>
                
                <Route path="/home" element={<Layout><Notes /></Layout>}/>
                <Route path="/create" element={<Layout><Create /></Layout>}/>
                <Route path="/note/:id" element={<Layout><EditPage/></Layout>}/>
              </Routes>
            </NotesContextProvider>
        
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;
