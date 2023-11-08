import events from "../../image/events.png";
import "./events.css";

const Events = () => {
    const event = [
        {
            number: 15,
            title: "Days"
        },
        {
            number: "08",
            title: "Days"
        },
        {
            number: 45,
            title: "minutes"
        },
        {
            number: 55,
            title: "Seconds"
        }
    ]
    return (
        <div>
            <div className="events" id="events">
                <div className="dots dots-up"></div>
                <div className="dots dots-down"></div>
                <h2 className="main-title">Latest Events</h2>
                <div className="container">
                    <img src={events} alt="" />
                    <div className="info">
                        <div className="time">
                            {event.map(item => {
                                return (
                                    <div className="unit" key={item.title}>
                                        <span className="days">{item.number}</span>
                                        <span>{item.title}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <h2 className="title">Tech Masters Event 2021</h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam
                            ratione aliquam excepturi nulla in harum, veritatis porro
                        </p>
                    </div>
                    <div className="subscribe">
                        <form action="">
                            <input type="email" placeholder="Enter Your Email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Events
