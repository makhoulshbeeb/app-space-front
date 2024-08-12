import "./styles/RelatedApps.css"

export default function RelatedApps({category}){
    return(
        <div className="related-apps">
            <h2>Related Apps</h2>
            <div className="related-apps-grid">
                <img src="https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png" alt="related app" />
                <img src="https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png" alt="related app" />
                <img src="https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png" alt="related app" />
                <img src="https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png" alt="related app" />
            </div>
        </div>
    )
}