import avatar1 from "../image/avatar-01.png";
import avatar2 from "../image/avatar-02.png";
import avatar3 from "../image/avatar-03.png";
import avatar4 from "../image/avatar-04.png";
import avatar5 from "../image/avatar-05.png";
import avatar6 from "../image/avatar-06.png";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai"
function Testimonials() {


    let testimonialsData = [
        {

            name: "Mohamed Farag",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus",
            title: "Full Stack Developer",
            image: avatar1,
            stars: [
                1, 2, 3, 4,
            ],
            emptyStars: [
                1
            ]
        },
        {

            name: "Mohamed Ibrahim",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus",
            title: "Full Stack Developer",
            image: avatar2,
            stars: [
                1, 2, 3, 4,
            ],
            emptyStars: [
                1
            ]
        },
        {

            name: "Shady Nabil",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus",
            title: "Full Stack Developer",
            image: avatar3,
            stars: [
                1, 2, 3, 4,
            ],
            emptyStars: [
                1
            ]
        },
        {

            name: "Amr Hendawy",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus",
            title: "Full Stack Developer",
            image: avatar4,
            stars: [
                1, 2, 3, 4, 5
            ]

        },
        {

            name: "Sherief Ashraf",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus",
            title: "Full Stack Developer",
            image: avatar5,
            stars: [
                1, 2, 3,
            ],
            emptyStars: [
                1, 2
            ]

        },
        {

            name: "Osama Mohamed",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus",
            title: "Full Stack Developer",
            image: avatar6,
            stars: [
                1, 2, 3,
            ],
            emptyStars: [
                1, 2
            ]


        },


    ]



    return (
        <div>
            <div className="testimonials" id="testimonials">
                <h2 className="main-title">Testimonials</h2>
                <div className="container">
                    {testimonialsData?.map((item, index) => {
                        return (
                            <div className="box" key={item.name}>
                                <img src={item.image} alt="" />
                                <h3>{item.name}</h3>
                                <span className="title">{item.title}</span>
                                <div className="rate">
                                    {item?.stars?.map((item) => {
                                        return (
                                            <>
                                                <i className="filled"><BsStarFill /></i>
                                            </>
                                        )
                                    })
                                    }
                                    {item?.emptyStars?.map(item => {
                                        return (

                                            <i><AiOutlineStar /></i>
                                        )
                                    })
                                    }

                                </div>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })

                    }

                </div>
            </div>
        </div>
    )
}
export default Testimonials;