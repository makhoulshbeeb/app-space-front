import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles/AppHeader.css"
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons"

export default function AppHeader({ app_data = { name: "Examplar", author: "Dingus & co", rating: 4.0, reviews: [{user: "Reviewing Enthusiaist", feedback:"I really enjoy reviewing", rating:4.0}], installs: 120, age_rating: "18+" } }) {
    return (
        <div className="app-header">
            <div className="app-info">
                <div className="app-names">
                    <h1>{app_data.name}</h1>
                    <p>{app_data.author}</p>
                </div>
                <div className="app-stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="app-overview">
                    <div>
                        <h3>{app_data.rating} <FontAwesomeIcon icon={faStar} size='xs'></FontAwesomeIcon></h3>
                        <p>{app_data.reviews.length} reviews</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h3>{app_data.installs} <FontAwesomeIcon icon={faDownload} size='xs'></FontAwesomeIcon></h3>
                        <p>Downloads</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h3>{app_data.age_rating}</h3>
                        <p>Adults Only</p>
                    </div>
                </div>
            </div>
            <div className="app-img"></div>
        </div>
    )
}