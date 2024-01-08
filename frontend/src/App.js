import React from "react"
import { BrowserRouter , Switch, Route } from "react-router-dom"

import { Header } from "./components/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import { Footer } from "./components/footer/Footer"
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Regsiter} />
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/details/:id' component={DetailsPages} />
          <ProtectedRoute exact path='/account' component={Account} />
          <ProtectedRoute exact path='/create' component={Create} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
