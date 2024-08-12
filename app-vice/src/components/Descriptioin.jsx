import "./styles/Description.css"

export default function Description({ title, body }) {
    return (
        <div className="description-box">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}