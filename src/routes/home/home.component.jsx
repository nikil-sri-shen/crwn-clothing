import "./categories.styles.scss";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component.jsx";

function Home() {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
}

export default Home;
