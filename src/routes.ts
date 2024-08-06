import { AboutPage, GeneratePage, HomePage } from "./pages";
import { Layout } from "./components";

interface Route {
  path: string;
  element: JSX.Element;
  children?: { path: string; element: JSX.Element }[];
}
type Routes = Route[];
export const routes: Routes = [
  {
    path: "/",
    element: Layout(),
    children: [
      {
        path: "/",
        element: HomePage(),
      },
      {
        path: "/about",
        element: AboutPage(),
      },
      {
        path: "/generate",
        element: GeneratePage(),
      },
    ],
  },
];
