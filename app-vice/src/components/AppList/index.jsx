import "./style.css";
import img from "../../image/clash.png";
import { useEffect, useRef } from "react";
function AppList({name = "App One" , apps=[]}) {
   apps = [
    { name: "App One", image: "../../image/clash.png" },
    { name: "App Two", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "App Three", image: "../../image/clash.png" },
    { name: "last element", image: "../../image/clash.png" },
  ];
  const textRef = useRef()
  const scrollRef = useRef()
  const appList = useRef()

  return (
    <div className="container">
      <div className="text">
        <h3 ref={textRef}>Trending Apps</h3>
        <p>Show All</p>
      </div>
      <div className="app-list-container" ref={scrollRef}>
        <div className="app-list" ref={appList} >
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
