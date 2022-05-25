import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-out-cubic",
  }); // or any other options you need
};
