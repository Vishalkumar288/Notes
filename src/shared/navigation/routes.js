import { Route } from "react-router-dom";
import LandingPage from "../../home/pages/LandingPage";

export const routes = (
  <>
    <Route path={"/"} element={<LandingPage />} />
  </>
);
