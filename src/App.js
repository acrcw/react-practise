import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import FunctionalComponent from "./Components/FunctionalComponent";
import ClassComponent from "./Components/ClassComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import States from "./Components/States";
import Counter from "./Components/Counter";
import Parent from "./Components/Parent";
import ListMap from "./Components/ListMap";
import Form from "./Components/Form";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="class" element={<ClassComponent />} />
          <Route path="resume" element={<Main />} />
          <Route path="function" element={<FunctionalComponent />} />
          <Route path="states" element={<States />} />
          <Route path="Counter" element={<Counter />} />
          <Route path="usememo" element={<Parent />} />
          <Route path="listmap" element={<ListMap />} />
          <Route path="Signup" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* 
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
  <Route element={<PageLayout />}>
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/tos" element={<Tos />} />
  </Route>
  <Route path="contact-us" element={<Contact />} />
</Routes>; 
*/}
