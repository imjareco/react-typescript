import appBuilder from "core/start";
import home from "home/module";
import user from "user/module";

appBuilder({
  modules: [
    home,
    user
  ],
});

