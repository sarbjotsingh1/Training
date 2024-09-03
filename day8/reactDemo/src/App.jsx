import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Componets/login";
import { DashBoard } from "../Componets/Dashboard";
import { Header } from "../Componets/Header";
import { UserList } from "../Componets/UserList";
import { UserDetails } from "../Componets/UserDetails";
import { ProtectedRoute } from "../Componets/ProtectedRoute";
import { useState } from "react";
import { NotFound } from "../Componets/NotFound";
import { CustList } from "../Componets/CustList";
import { AddCust } from "../Componets/AddCust";
import { UpdateCust } from "../Componets/UpdateCust";
import { useContext } from "react";
import { CounterContext } from "../Counter/CounterContext";
import { Counter } from "../redux/Counter";
import { ItemsList } from "../redux/ItemsList";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));
  const { count } = useContext(CounterContext);
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Counter />
          <h4>Count : {count}</h4>
          <Header />
          <Routes>
            <Route path="login" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route
              path="dashboard/*"
              element={
                <ProtectedRoute isAuthenicated={loggedIn}>
                  <DashBoard />
                </ProtectedRoute>
              }
            />
            <Route path="users" element={<UserList />} />
            <Route path="details/:id" element={<UserDetails />} />
            <Route path="/addcust" element={<AddCust />} />
            <Route path="/cust" element={<CustList />} />
            <Route path="/itemlist" element={<ItemsList />} />
            <Route path="/updatecust/:id" element={<UpdateCust />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
