import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "./App";

const Home = lazy(() => import("./pages/Home"));
const CharacterList = lazy(() => import("./pages/characters/CharacterList"));
const CharacterDetail = lazy(() => import("./pages/characters/CharacterDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'characters',
        children: [
          {
            index: true,
            element: <CharacterList />
          },
          {
            path: ':id',
            element: <CharacterDetail />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ]
  }
])