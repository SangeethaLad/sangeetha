
import React, { Component } from 'react';
import './App.css';


class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    id: 0,
                    imgurl: "http://t2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
                    title: "AVENGERS",
                    cast: "2019 ",
                    rating: "4"
                },
                {
                    id: 1,
                    imgurl: "http://t0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
                    title: "TITANIC",
                    cast: "1997 ",
                    rating: "5"
                },
                {
                    id: 2,
                    imgurl: "http://t0.gstatic.com/images?q=tbn:ANd9GcT_9nrOnN8sYfZZHJ06EIBSoEO5qjx7uHHEs6VtKNplGVuGhZuC",
                    title: "harry potter",
                    cast: "2002 ",
                    rating: "6"
                },
                {
                    id: 3,
                    imgurl: "https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg",
                    title: "AVATAR",
                    cast: "2009 ",
                    rating: "3"
                },
                {
                    id: 4,
                    imgurl: "https://cdn7.newsnation.in/images/2017/04/02/437027723-Bahubalithebeggining_6.jpg",
                    title: "BAHUBALLI",
                    cast: "2015 ",
                    rating: "6"
                },
                {
                    id: 5,
                    imgurl: "http://t3.gstatic.com/images?q=tbn:ANd9GcQDUBv_iHQkErMkhfMKpklqUN5bo01oetTAvEo8RbZ2BJ-s6O1x",
                    title: "KGF",
                    cast: "2018",
                    rating: "6"
                }
            ]
        };
    }

    handleChange(e) {
        var queryData = [];
        let FliterFlag = true;
        let AvailData = [...this.state.movies];
        let moviename = document.getElementById("txtid").value;
        this.state.movies.map((dynamicData) => {
            if (moviename.length > 0) {
                if (dynamicData["title"].toUpperCase().indexOf(moviename.toUpperCase()) != -1) {
                    FliterFlag = true;
                } else {
                    FliterFlag = false;
                }

            }
            if (FliterFlag) {
                queryData.push(dynamicData);
            }
        })


        if (moviename.length > 0) {
            let data = { ...this.state.movies };
            data = queryData;
            this.setState({ movies: data });
        }
        else {
            this.setState({ movies: AvailData });
        }

    }
    render() {
        return (
            <div className="App">
                <div id="mydiv">

                    <div style={{ paddingTop: "15px" }}>
                        <input type="text" id="txtid" placeholder="Search" style={{ width: "35%", height: "30%" }} onChange={this.handleChange.bind(this)} />
                    </div>

                    {this.state.movies.map(movies => (
                        <div>
                            <table style={{borderCollapse:"collapse"}} key={movies.id}>
                                <tbody>
                                
                                    <tr>
                                        <td>
                                            <img alt="poster" width="120" src={movies.imgurl} />
                                        </td>

                                        <td style={{ padding: "15px 20px 20px 76px"}}>{movies.title}</td>
                                        <td style={{ padding: "15px 20px 20px 76px" }}>{movies.cast}</td>
                                        <td style={{ padding: "15px 20px 20px 76px"}}>{movies.rating}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}

                </div>
            </div>
        );
    }
}

export default Movie;
