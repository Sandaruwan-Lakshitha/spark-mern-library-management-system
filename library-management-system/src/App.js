import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BsBookHalf } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main, Footer, Header } from "./componets/layout";
import { NavBar, NavItem, NavLink } from "./componets/Navbar";
import Spinner from "./componets/Spinner";

import { DASHBOARD, CATALOG } from "./shared/routes";

const Dashboard = React.lazy(() => {
   return import("./containers/Dashboard/index");
});
const NotFound = React.lazy(()=>{
   return import("./containers/404");
});

const Catalog = React.lazy(()=>{
   return import("./containers/Catalog/index")
});
function App() {
   const theme = {
      primary: {
         main: "#29b6f6",
         light: "#73e8ff",
         dark: "#0086c3",
         textColor: "#000",
         danger : "#e91e63",
         dangerDark : "#b0003a"
      },
      secondary: {
         main : "#9e9e9e",
         light : "#cfcfcf",
         dark : "#707070",
         textColor : "#000" 

      },
      spacing: (factor) => `${factor * 8}px`,
   };

   let routes = (
      <Suspense fallback={<Spinner />}>
         <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path={DASHBOARD} component={Dashboard} />
            <Route exact path={CATALOG} component={Catalog} />
            <Route component={NotFound} />
         </Switch>
      </Suspense>
   );

   return (
      <ThemeProvider theme={theme}>
         <Header>
            <NavBar>
               <NavItem>
                  <NavLink href={CATALOG}>
                     <BsBookHalf></BsBookHalf>
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href={CATALOG}>Catalog</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink href={DASHBOARD}>Dashboard</NavLink>
               </NavItem>
            </NavBar>
         </Header>
         {Catalog && <Header></Header>}
         <Main>
            <Router>{routes}</Router>
         </Main>
         <Footer>
            Copyright {new Date().getFullYear()} &#169; Spark Academy
         </Footer>
      </ThemeProvider>
   );
}

export default App;
