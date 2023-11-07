import cat1 from "../image/cat-01.jpg";
import cat2 from "../image/cat-02.jpg";
import cat3 from "../image/cat-03.jpg";
import cat4 from "../image/cat-04.jpg";
import cat5 from "../image/cat-05.jpg";
import cat6 from "../image/cat-06.jpg";
import cat7 from "../image/cat-07.jpg";
import cat8 from "../image/cat-08.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

function Articles() {

    let ArticlesDate = [
        {
            image: cat1,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
            text: "Read More"
        },
        {
            image: cat2,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
            text: "Read More"
        },
        {
            image: cat3,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
            text: "Read More"
        },
        {
            image: cat4,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
            text: "Read More"
        },
        {
            image: cat5,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
            text: "Read More"
        },
        {
            image: cat6,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
            text: "Read More"
        },
        {
            image: cat7,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
            text: "Read More"
        },
        {
            image: cat8,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
            text: "Read More"
        }
    ]


    return (
        <div>
            <div className="articles" id="articles">
                <h2 className="main-title">Articles</h2>
                <div className="container">
                    {ArticlesDate.map(item => {
                        return (
                            <div className="box">
                                <img src={item.image} alt="" />
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="info">
                                    <a href="">{item.text}</a>
                                    <i><FaLongArrowAltRight /></i>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        </div>
    )
}
export default Articles;