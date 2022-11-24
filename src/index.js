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
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mybook" element={<Navigate replace to="/book" />} />
      <Route path="/book" element={<Book />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="dashboard" element={<DashBoard />} />
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>I am Home routes</h1>
      <Link to="/book">Book Route</Link>
      <Link to="/new">New Route</Link>
    </div>
  );
}

function DashBoard() {
  const location = useLocation();
  return (
    <div>
      <h1>Course Price is {location.state}</h1>
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
  const courseList = ["React", "Angular", "Nodejs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>I am Course</h1>

      <p>More test</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "red" : "blue",
          };
        }}
        to={`/book/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink to={`/book/courses/test`}>test</NavLink>

      <Outlet />
    </div>
  );
}

function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div>
      <h1>I am {courseid} Course </h1>

      <button
        onClick={() => {
          navigate("/dashboard", { state: courseid  });
        }}
      >
        Price
      </button>
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
