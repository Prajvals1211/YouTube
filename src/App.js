import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
import Loader, { LoginName } from "./utils/loadContext";
import { useState } from "react";
import LoginPage from "./components/LoginPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Body />
       
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search/:id",
        element: <SearchPage />,
      },
    ],
  },
  {
    path : '/login',
    element : <LoginPage/>
  }
]);

function App() {
  const [Loading, setLoading] = useState(true);
  const [name,setName] = useState('');
  return (
    <Provider store={store}>
      <LoginName.Provider value={[name,setName]}>
      <Loader.Provider value={[Loading, setLoading]}>
        <div className="">
          {/* <Header /> */}

          <RouterProvider router={appRouter} /> 

          {/* <Body /> */}
        </div>
      </Loader.Provider>
      </LoginName.Provider>
    </Provider>
  );
}

export default App;
