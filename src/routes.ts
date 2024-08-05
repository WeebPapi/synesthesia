import { HomePage } from "./pages";

interface Route {
  path: string;
  element: JSX.Element;
}
type Routes = Route[];
export const routes: Routes = [
  {
    path: "/",
    element: HomePage(),
  },
];
