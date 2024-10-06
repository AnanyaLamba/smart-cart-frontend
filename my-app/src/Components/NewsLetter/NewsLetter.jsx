import "./NewsLetter.css";

const NewsLetter = () => {
    return ( 
        <div className="newsletter">
            <h1>Get Exclusive Offers In Your Inbox</h1>
            <p>Subscribe to our newsletter and stay on top of fashion</p>

            <div>
                <input type="email" placeholder="Enter email here"/>
                <button>Subscribe</button>
            </div>
        </div>
     );
}
 
export default NewsLetter;