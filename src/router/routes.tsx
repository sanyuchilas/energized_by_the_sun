import GamePage from "../pages/GamePage/GamePage";
import MainPage from "../pages/MainPage/MainPage"
import MenuPage from "../pages/MenuPage/MenuPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import {Routes} from "../utils/constants";

class Route {
  constructor (public path: string, public element: JSX.Element) {
    this.path = path;
    this.element = element;
  }
}

export const routes = [
  new Route(Routes.MAIN_ROUTE, <MainPage/>),
  new Route(Routes.GAME_ROUTE + '/:id', <GamePage/>),
  new Route(Routes.MENU_ROUTE, <MenuPage/>),
  new Route('*', <NotFoundPage/>),
]