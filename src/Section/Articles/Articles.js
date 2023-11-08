import cat1 from "../../image/cat-01.jpg";
import cat2 from "../../image/cat-02.jpg";
import cat3 from "../../image/cat-03.jpg";
import cat4 from "../../image/cat-04.jpg";
import cat5 from "../../image/cat-05.jpg";
import cat6 from "../../image/cat-06.jpg";
import cat7 from "../../image/cat-07.jpg";
import cat8 from "../../image/cat-08.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./articles.css";

const Articles = () => {

    const articlesDate = [
        {
            image: cat1,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
        },
        {
            image: cat2,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
        },
        {
            image: cat3,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
        },
        {
            image: cat4,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
        },
        {
            image: cat5,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
        },
        {
            image: cat6,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
        },
        {
            image: cat7,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
        },
        {
            image: cat8,
            title: "Test Title",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
        }
    ]


    return (
        <div>
            <div className="articles" id="articles">
                <h2 className="main-title">Articles</h2>
                <div className="container">
                    {articlesDate.map(item => {
                        return (
                            <div className="box" key={item.image}>
                                <img src={item.image} alt="" />
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="info">
                                    <a href="">Read More</a>
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