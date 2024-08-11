import "./styles/AppList.css";
import img from "../image/clash.png";
import { useRef } from "react";
function AppList({title="Trending Apps", name = "App One" , apps=[]}) {
   apps = [
    { name: "App One", image: "../../image/clash.png" },
    { name: "App Two", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "last element", image: "../../image/clash.png" }
  ];

  return (
    <div className="container">
      <div className="text">
        <h3>{title}</h3>
        <p>Show All</p>
      </div>
      <div className="app-list-container">
        <div className="app-list" >
          {apps.map((app, index) => (
            <div key={index} className="app-item">
              <img src={img} alt={"skjfrg"} className="app-image" />
              <div className="app-name">{app.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default AppList;
