import{useState} from "react";

const Collapse = ({text, status}) => {
    const [isShown, setIsShown] = useState(status);

    const clickHandler = () => {
        setIsShown(!isShown)
    }

    return (
        <div>
            <p>
                <a
                    onClick={clickHandler}
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                    href="#"
                    role="button"
                    aria-expanded={!isShown ? "false" : "true"}
                >Button</a>
            </p>
            <div className={!isShown ? "collapse" : "collapse show"}>
                <div className="card card-body">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Collapse;
