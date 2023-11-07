import events from "../image/events.png";

function Events() {
    let Event = [
        {
            number: 15,
            title: "Days"
        },
        {
            number: 80,
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
                            {Event.map(item => {
                                return (
                                    <div className="unit">
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
