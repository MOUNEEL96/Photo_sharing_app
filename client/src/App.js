import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing_page from "./components/landing_page";
import PostView from "./components/post_view";
import Form_page from "./components/form-post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page />}></Route>
        <Route path="/postview" element={<PostView />}></Route>
        <Route path="/form" element={<Form_page />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
