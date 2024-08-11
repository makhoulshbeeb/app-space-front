import AppList from "./AppList.jsx";
import CategotiesList from "./CategoriesList.jsx";
import "./styles/Discover.css"
function Discover() {
  return (
    <div className="discover">
    <div className="title">wondering which app to use?</div>
    <AppList title="Trending Apps"/>
    <AppList title="Featured Apps"/>
    <AppList title="Apps you’ll love"/>
    <CategotiesList/>
    </div>
  )
}
export default Discover