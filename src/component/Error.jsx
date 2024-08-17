import { useNavigate } from "react-router-dom"

function Error() {
    const navigate = useNavigate()

    return (
        <>
        <div className="error-page">
            <img src="/img/lines.svg" alt="lines" />
            <div className="error-txt">
                <img src="/img/circle.svg" alt="circle" />
                <div className="err-text">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
            </div>
            <img src="/img/star.svg" alt="star" />
        </div>
        </>
    )
}

export default Error