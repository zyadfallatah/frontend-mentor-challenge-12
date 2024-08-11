import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

import Countries from "./pages/Countries";
import NavLayout from "./layout/NavLayout";
import CountryDetails from "./pages/CountryDetails";

const queryClient = new QueryClient();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/frontend-mentor-challenge-12" element={<NavLayout />}>
      <Route index element={<Countries />} />
      <Route
        path="/frontend-mentor-challenge-12/:countryName"
        element={<CountryDetails />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
