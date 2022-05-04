import './SearchResult.css'
import Review from "./LikeDislike"

const Card = (props) => {

    return (
        <div className="card shadow mb-3" id="CardLayout"
        data-aos="fade" data-aos-duration={700} data-aos-delay={50}
        >

            <div data-bs-toggle="modal" data-bs-target="#cartModal" data-bs-whatever="Cart">

                <img className="card-img-top " src={props.element.image} alt="Card image cap" style={{width: "710px", height: "300px"}}/>
                <div className="card-body">
                    <h5 className="card-title " id="CardTitleCSS">{props.element.title}</h5>
                    <p className="card-text">{props.element.text}</p>
                    <span className="Pricetag">{props.element.price}</span>
                </div>

            </div>

            <Review/>

        </div>
    );
}

const SearchResult = () => {

    const cardList1 = [
        {
            "image": require('./img/h-20v2.jpg'),
            "title": "Serenity Junction",
            "text": "Murree",
            "price": "PKR 8,000/Night"
        },
        {
            "image": require('./img/h-16v4.jpg'),
            "title": "Serenity Hindukush Sarai",
            "text": "Chitral",
            "price": "PKR 9,000/Night"
        },
        {
            "image": require('./img/h-17v3.jpg'),
            "title": "Serenity Crossroads",
            "text": "Peshawar",
            "price": "PKR 9,000/Night"
        },
        {
            "image": require('./img/h-14v4.jpg'),
            "title": "Serenity Khawna",
            "text": "Sost, Hunza",
            "price": "PKR 10,000/Night"
        },
    ]
    const cardList2 = [
        {
            "image": require('./img/h-13v2.jpg'),
            "title": "Serenity Vantage",
            "text": "Duikar, Altit, Hunza",
            "price": "PKR 10,000/Night"
        },
        {
            "image": require('./img/h-8v1.png'),
            "title": "Serenity Yurts Osho Thang",
            "text": "Minapin, Hunza-Nagar",
            "price": "PKR 11,000/Night"
        },
        {
            "image": require('./img/h-11v1.png'),
            "title": "Serenity Signature",
            "text": "Islamabad, Sector F-6",
            "price": "PKR 11,200/Night"
        },
        {
            "image": require('./img/h-15v2.png'),
            "title": "The Serenity Lodge",
            "text": "Murree",
            "price": "PKR 11,500/Night"
        },
    ]
    const cardList3 = [
        {
            "image": require('./img/h-9v1.png'),
            "title": "Serenity Yurts Marcopolo Inn",
            "text": "Gulmit, Hunza",
            "price": "PKR 12,500/Night"
        },
        {
            "image": require('./img/h-12v7.jpg'),
            "title": "Serenity Dastaan",
            "text": "Karimabad, Hunza",
            "price": "PKR 14,000/Night"
        },
        {
            "image": require('./img/h-19v1.jpg'),
            "title": "Lemon Lodges By Serenity",
            "text": "Nathia Gali",
            "price": "PKR 15,000/Night"
        },
        {
            "image": require('./img/h-7v1.png'),
            "title": "Serenity Mountain Top Resort",
            "text": "batakundi Naran",
            "price": "PKR 15,000/Night"
        },
    ]

    return (
        <div className = "container">
        <div className = "row">
            <div className = "col">
            {cardList1.map(CardElement => (<Card element={CardElement}/>))}
            </div>
            <div className = "col">
            {cardList2.map(CardElement => (<Card element={CardElement}/>))}
            </div>
            <div className = "col">
            {cardList3.map(CardElement => (<Card element={CardElement}/>))}
            </div>
        </div>

        <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="/#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
            <a className="page-link" href="#">Next</a>
            </li>
        </ul>
        </nav>

        </div>
    );
}

export default SearchResult;