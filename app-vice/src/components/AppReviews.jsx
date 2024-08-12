import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import "./styles/AppReviews.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AppReviews({ reviews= [{username: "Reviewing Enthusiaist", feedback:"I really enjoy reviewing", rating:4.0},{username: "Reviewing Enthusiaist", feedback:"I really enjoy reviewing. I really enjoy reviewing. I really enjoy reviewing. I really enjoy reviewing. I really enjoy reviewing. I really enjoy reviewing. I really enjoy reviewing. I really enjoy reviewing. I really enjoy reviewing. ", rating:4.0}] }) {
    return (
        <dic className="app-reviews">
            <h2> App Reviews</h2>
            {reviews.map(review => {
                return (
                    <div className="review-container">
                            <h4>{review.username}</h4>
                            <div className="review-stars">
                                <FontAwesomeIcon icon={faStar} />&nbsp;
                                <FontAwesomeIcon icon={faStar} />&nbsp;
                                <FontAwesomeIcon icon={faStar} />&nbsp;
                                <FontAwesomeIcon icon={faStar} />&nbsp;
                                <FontAwesomeIcon icon={faStarHalfStroke} />&nbsp;
                            </div>
                        <p>
                            {review.feedback}
                        </p>
                    </div>
                )
            })}
        </dic>
    )
}