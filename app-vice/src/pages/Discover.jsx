import AppList from "../components/AppList.jsx";
import CategotiesList from "../components/CategoriesList.jsx";
import "./Discove.css"
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