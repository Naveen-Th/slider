import React,{useState} from "react";
import './slider.css'

export const Slider = ({slides}) => {
    const [change,setChange] = useState(0);

    const next = () => {
        setChange(change != slides.length - 1 ? change + 1 :  slides.length-1
        );
    }
    const prev = () => {
        setChange(change != 0 ? change - 1 : 0)
    }
    const reset = ()=>{
        setChange(0)
    }
    return(
        <div className="card">
            <div className="card-body">
                <h1>{slides[change].heading}</h1>
                <h4>{slides[change].description}</h4>
            </div>
            <div className="btn">
                <button onClick={next}
                disabled={change === slides.length-1}
                className={change === slides.length-1 ? 'disable' : ''}
                >Next</button>
                <button onClick={prev}
                className={change === 0 ? 'disable' : ''}
                disabled={change === 0}
                >Prev</button>
                <button onClick={reset} 
                disabled={change === 0 }
                className={change === 0 ? 'disable' : ''}
                >Reset</button>
            </div>
        </div>
    )
}