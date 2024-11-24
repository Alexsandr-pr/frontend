import { ArrowRight } from "lucide-react";
import "./input.scss"

const Input = ({
    placeholder,
    type = "text",
    setValue,
    value,
    dark = false,

} : {
    placeholder: string;
    type: string;
    setValue: (value: string) => void;
    value: string;
    dark?: boolean;
}) => {
    return (
        <div className={`input-block ${dark ? "dark" : ""}`}>
            <input 
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type} 
                className="input-block__input"
            />
            <button className="input-block__button">
                <ArrowRight width={24} height={24}/>
            </button>
        </div>
    )
}

export default Input