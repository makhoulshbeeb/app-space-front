import AppList from "../../components/AppList";
import CategotiesList from "../../components/CategoriesList";
import Navbar from "../../components/Navbar";
import "./style.css"
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