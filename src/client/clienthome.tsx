import { Route, Routes } from "react-router-dom";

export default function ClientHome() {
  return (
    <Routes>
      <Route path="/" element={<div>Hello client</div>}></Route>
      {/* furutre navigation... */}
    </Routes>
  );
}
