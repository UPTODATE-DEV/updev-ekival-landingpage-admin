import Favicon from "./extensions/favicon.ico";
import Logo from "./extensions/logo.png";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Favicon,
    },
    head: {
      favicon: Favicon,
    },
    locales: ["fr"],
    tutorial: false,
    notifications: { release: false },
  },
  bootstrap() {},
};

