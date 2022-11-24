import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mybook" element={<Navigate replace to="/book" />} />
      <Route path="/book" element={<Book />}>
        <Route path="courses" element={<Courses />}>
          <Route  path=":course-id"  element={<CourseId />}/>
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>I am Home routes</h1>
    </div>
  );
}

function Book() {
  return (
    <div>
      <h1>I am Book routes</h1>
      <h1>Courses</h1>
      <Link to="/book/courses">Courses</Link>
      <h1>Bundle</h1>
      <Link to="/book/bundles">Bundle</Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1>I am Course component</h1>
    </div>
  );
}


function CourseId() {

  return (
    <div>
      <h1>I am Course component</h1>
    </div>
  );
}


function Bundles() {
  return (
    <div>
      <h1>I am Bundles component</h1>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
