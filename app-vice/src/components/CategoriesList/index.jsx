import "./style.css";
import { useEffect, useRef } from "react";
import Vector from "../../image/categories/Vector.svg";
function CategotiesList() {
  const apps = [
    { name: "Family", image: "/public/categories/Vector.svg" },
    { name: "Medical", image: "/public/categories/Vector-1.svg" },
    { name: "Games", image: "/public/categories/Vector-2.svg" },
    { name: "Tools", image: "/public/categories/Vector-3.svg" },
    { name: "business", image: "/public/categories/Frame 92159.svg" }
  ];
  const textRef = useRef()
  const scrollRef = useRef()
  const appList = useRef()


  useEffect(() => {
    textRef.current.addEventListener("click", () => {
      scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
      console.log(appList.current.offsetWidth);
      // scrollRef.current.scrollTo({
      //   left:scrollRef.current.offsetWidth,
      //   behavior: 'smooth'
      // })
      
    });
    textRef.current.addEventListener("mouseout", () => {
      textRef.current.style.color = "white";
      scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;

    });
  }, [])

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
              <img src={Vector} alt={"skjfrg"} className="category-svg" />              
              <div className="app-name">{app.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CategotiesList;
