import { HomePage } from "./pages/home";
import { NotFoundPage } from "./pages/not-found";
import { RegisterPage } from "./pages/register";

export const routes = {
  public: [
    { path: "/", page: HomePage },
    { path: "/not-found", page: NotFoundPage },
    { path: "/register", page: RegisterPage },
  ],
  private: [{}],
};
