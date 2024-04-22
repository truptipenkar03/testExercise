import './Percentile.css';
import percetileImage from '../../assets/percentile.png'

const Percentile = () => {
    return(
        <>
            <h2>Percentile Component</h2>
            <hr />
            <img src={percetileImage} alt="percentile example" width="320" />
            <div className="image-container">
                {/* Your HTML CSS code goes here */}    
            </div>
        </>
    )
}

export default Percentile;
