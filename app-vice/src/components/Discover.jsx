import AppList from "./AppList.jsx";
import CategotiesList from "./CategoriesList.jsx";
import "./styles/Discover.css"
function Discover() {
  return (
    <>
    <div className="title">wondering which app to use?</div>
    <AppList/>
    <AppList/>
    <AppList/>
    <CategotiesList/>
    </>
  )
}
export default Discover