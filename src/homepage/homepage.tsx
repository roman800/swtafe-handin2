import Login from "../login/login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Routes>
      <Route path="/" element={<p>Logged in as ass</p>}></Route>
      <Route path="ass" element={<p>Ass</p>}>
        <div>Ass router</div>
      </Route>
      <Route path="butt" element={<p>Butt</p>}>
        <div>butt router</div>
      </Route>
    </Routes>
  );
}
