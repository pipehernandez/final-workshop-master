import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login/login.page";
import { NotFoundPage } from "./pages/not-found";
import { RegisterPage } from "./pages/register";
import { TaskPage } from "./pages/tasks";

export const routes = {
  public: [
    { path: "/", page: HomePage },
    { path: "/not-found", page: NotFoundPage },
    { path: "/register", page: RegisterPage },
    { path: "/login", page: LoginPage },
  ],
  private: [
    { path: "/tasks", page: TaskPage}
  ]
};
