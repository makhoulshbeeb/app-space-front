import { useGetAppByIdQuery } from "../api/AppsApi";
import AppHeader from "./AppHeader";
import AppReviews from "./AppReviews";
import Description from "./Descriptioin";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RelatedApps from "./RelatedApps";
import "./styles/AppPage.css"

export default function AppPage() {
    // const {id:app_id} = useParams();
    // const {data:app_data} = useGetAppByIdQuery({id: app_id})
    return (
        <div className="app-page">
            <Navbar></Navbar>
            <div className="app-page-container">
                <AppHeader ></AppHeader>
                <Description title={"About This App"} body={"Lorem ipsum dolor sit amet. Est quia adipisci vel laborum cupiditate ut voluptate unde cum quasi dolorum. Et soluta nostrum qui amet dolor qui totam nihil. At quia quos vel doloremque totam ut quos exercitationem. Qui facere rerum et nemo voluptate aut doloremque provident et cupiditate recusandae aut Quis natus ut possimus quae. Non distinctio natus vel facere nisi non galisum voluptatem ut accusantium commodi. \nQui quisquam similique quo deleniti alias et officiis sunt sit temporibus quia non consequuntur velit. Hic consequuntur error et architecto quaerat sit cumque galisum et voluptate adipisci qui doloribus distinctio et magni voluptatem aut dolor commodi."}></Description>
                <div className="app-page-lower-half">
                    <AppReviews></AppReviews>
                    <RelatedApps></RelatedApps>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}