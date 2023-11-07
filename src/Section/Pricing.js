import hosting from "../image/hosting-basic.png";
import advanced from "../image/hosting-advanced.png";
import professional from "../image/hosting-professional.png";

function Pricing() {

    let pricing = [
        {
            title: "Basic",
            image: hosting,
            number: "$15",
            text: "Per Month",
            space: "10GB HDD Space",
            address: "5 Email Addresses",
            subdo: "2 Subdomains",
            bases: "4 Databases",
            support: "Basic Support",
            choose: "Choose Plan"
        },
        {
            label: "Most Popular",
            title: "Advanced",
            image: advanced,
            number: "$25",
            text: "Per Month",
            space: "20GB HDD Space",
            address: "10 Email Addresses",
            subdo: "5 Subdomains",
            bases: "8 Databases",
            support: "Advanced Support",
            choose: "Choose Plan"
        },
        {
            title: "Professional",
            image: professional,
            number: "$45",
            text: "Per Month",
            space: "50 GB HDD Space",
            address: "20 Email Addresses",
            subdo: "10 Databases",
            bases: "20 Databases",
            support: "Professional Support",
            choose: "Choose Plan"
        },
    ]
    return (
        <div>
            <div className="pricing" id="pricing">
                <div className="dots dots-up"></div>
                <div className="dots dots-down"></div>
                <h2 className="main-title">Pricing Plans</h2>
                <div className="container">
                    {pricing.map(item => {
                        return (
                            <div className="box">
                                <div className="title">{item.title}</div>
                                <img src={item.image} alt="" />
                                <div className="price">
                                    <span className="amount">{item.number}</span>
                                    <span className="time">{item.text}</span>
                                </div>
                                <ul>
                                    <li>{item.space}</li>
                                    <li>{item.address}</li>
                                    <li>{item.subdo}</li>
                                    <li>{item.bases}</li>
                                    <li>{item.support}</li>
                                </ul>
                                <a href="#">{item.choose}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Pricing
