import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meditations from "./Pages/Meditations";
import Breaths from "./Pages/Breaths";
import Cards from "./Pages/Cards";
import Sounds from "./Pages/Sounds";
import SideNav from "./components/SideNav";
import "./scss/main.scss";
import Login from "./Pages/Login";
import { AXIOS } from "./utils/Contstants";

const App = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const login = async () => {
  //   const fire = new Fire();
  //   const newUser = await fire.loginWithEmailPassword(email, password);
  //   console.log(newUser);

  //   await axios
  //     .post("http://localhost:8000/", {
  //       token: newUser.accessToken,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  //   console.log("gata?");
  // };

  // const [images, setImages] = useState([]);
  // const handleFileInputChange = (event) => {
  //   // const files = Array.from(event.target.files);
  //   setImages(event.target.files[0]);
  // };

  // const submit_med = async (e) => {
  //   e.preventDefault();

  //   const form = new FormData();
  //   form.append("title", e.target[0].value);
  //   form.append("category", e.target[1].value);
  //   form.append("tags", e.target[2].value);
  //   form.append("background", e.target[3].files[0]);
  //   form.append("mp3", e.target[4].files[0]);
  //   form.append("voice", e.target[5].value);
  //   form.append("duration", e.target[6].value);
  //   form.append("premium", e.target[7].checked);
  //   form.append("large", e.target[8].checked);

  //   await axios_fara_cred
  //     .post("meditations/", form, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  //   console.log(e.target[0].value);
  //   console.log(e.target[1].value);
  //   console.log(e.target[2].value);
  //   console.log(e.target[3].files[0]);
  //   console.log(e.target[4].files[0]);
  //   console.log(e.target[5].value);
  //   console.log(e.target[6].value);
  //   console.log(e.target[7].checked);
  //   console.log(e.target[8].checked);
  // };
  // const submit = async () => {
  //   // await axios_fara_cred
  //   //   .post("api/", {
  //   //     field1: title,
  //   //     field2: description,
  //   //     // files: images,
  //   //   })
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });

  //   // console.log({
  //   //   title: title,
  //   //   description: description,
  //   //   files: images,
  //   // });

  //   const form = new FormData();

  //   form.append("images", images);

  //   console.log(form.get("images"));

  //   await axios_fara_cred
  //     .post("testIt/", form, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setImg(res.data.link);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const [img, setImg] = useState("");
  // useEffect(() => {
  //   axios_fara_cred.get("getIt/").then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);
  // return (
  //   <div>
  //     {img && <img src={img} />}
  //     <input
  //       type="text"
  //       placeholder="Email"
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <input
  //       type="password"
  //       placeholder="Password"
  //       onChange={(e) => setPassword(e.target.value)}
  //     />
  //     <button onClick={login}>Login</button>
  //     <br />
  //     <br />
  //     <br />
  //     <input type="file" onChange={handleFileInputChange} name="" id="" />
  //     <button onClick={submit}>submit</button>
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <Login />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />

  //     <form onSubmit={submit_med}>
  //       <label for="title">Title:</label>
  //       <input type="text" name="title" required />
  //       <br />

  //       <label for="category">Category:</label>
  //       <input type="text" name="category" required />
  //       <br />

  //       <label for="tags">Tags (comma-separated):</label>
  //       <input type="text" name="tags" required />
  //       <br />

  //       <label for="background">Background URL:</label>
  //       <input type="file" name="background" required />
  //       <br />

  //       <label for="mp3">MP3 URL:</label>
  //       <input type="file" name="mp3" required />
  //       <br />

  //       <label for="voice">Voice:</label>
  //       <input type="text" name="voice" required />
  //       <br />

  //       <label for="duration">Duration (in seconds):</label>
  //       <input type="number" name="duration" required />
  //       <br />

  //       <label for="premium">Premium:</label>
  //       <input type="checkbox" name="premium" />
  //       <br />

  //       <label for="large">Large:</label>
  //       <input type="checkbox" name="large" />
  //       <br />

  //       <input type="submit" value="Submit" />
  //     </form>
  //   </div>
  // );

  // const navigate = useNavigate();
  // const [nono, setNono] = useState(false);

  // useEffect(() => {
  //   const check = async () => {
  //     console.log(localStorage.getItem("auth"));
  //     if (!localStorage.getItem("auth")) {
  //       setNono(true);
  //     }
  //   };
  //   check();
  // }, []);

  // if (nono) {
  //   return (
  //    <Login/>
  //   );
  // }
  // let isAuthenticated = !!localStorage.getItem("auth");
  const [isAuthenticated, setAuth] = useState(false);

  const checkit = () => {
    setAuth(!!localStorage.getItem("auth"));
    console.log("checkit", localStorage.getItem("auth"), isAuthenticated);
  };
  useEffect(() => {
    setAuth(!!localStorage.getItem("auth"));

    console.log(localStorage.getItem("auth"));
  }, [, window, localStorage.getItem("auth")]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/meditations"
            element={
              isAuthenticated ? (
                <Meditations checkit={checkit} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/breaths"
            element={
              isAuthenticated ? (
                <Breaths checkit={checkit} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/cards"
            element={
              isAuthenticated ? (
                <Cards checkit={checkit} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/sounds"
            element={
              isAuthenticated ? (
                <Sounds checkit={checkit} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to={"/meditations"} />
              ) : (
                <Login checkit={checkit} />
              )
            }
          />
        </Routes>
        <ToastContainer draggable={true} position="top-center" />
      </Router>
    </>
  );
};

export default App;
