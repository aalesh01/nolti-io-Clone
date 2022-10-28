import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Box, width } from "@mui/system";

const Review = () => {
    const people = [{
        id: 1, name: "Sahil Lavingia", job: "Gumroad", image: "https://nolt.io/static/dist/images/landing/testimonial-sahil.2236960693.jpg", text: "Nolt is great for collecting feedback and feature requests from our community of creators. It's given us clarity on what to build next for our users and has helped us improve our product decisions."
    },{
        id: 2, name: "", job: "", image: "", image: "", text: "Love the simplicity"
    },
        {
            id: 3, name: "Josh Merryman", job: "MessageDesk", image: "https://nolt.io/static/dist/images/landing/testimonial-josh.827cc021f2.jpg", text: "The simplicity of Nolt made it easy for our small team to start collecting customer feedback. In just 30 days, we went from 0 customer feedback to over 60 customer suggestions about our product. We even started using Nolt to collect internal feedback from different team members. Overall, it's been the number one addition to our tech stack in terms of price, simplicity, ROI, and effectiveness."
        },
        {
            id: 4, name: "Itamar Madar", job: "The SCP Foundation", image: "https://nolt.io/static/dist/images/landing/testimonial-itamar.3f40e2ee78.png", text: "It took us a while, but we finally found the perfect product to centralize feedback. Nolt is minimalistic, intuitive, and just beautiful. It's the most efficient way to listen and interact with our community."
        },
        {
            id: 5, name: "Dragos Bulugean", job: "Archbee", image: "https://nolt.io/static/dist/images/landing/testimonial-dragos.5ba1ec0a09.jpg", text: "Nolt is a fast and simple solution for getting customer feedback for Archbee. We love the easy token integration for automatically authenticating our users."
        },
        {
            id: 6, name: "Tom Watson", job: "Glass", image: "https://nolt.io/static/dist/images/landing/testimonial-tomwatson.c8c24550f9.jpg", text: "We’ve really liked @TryNolt.The fine folks at @Letterboxd_ have moved over to it as well.Highly recommended."
        },
        {
            id: 7, name: "Sebastiano Guerriero", job: "CodyHouse", image: "https://nolt.io/static/dist/images/landing/testimonial-sebastiano.31c04f45c8.jpg", text: "I really enjoy using Nolt! The app is focused on what's essential, and it's super easy to customize things and understand how things work.I also love the transparent and affordable PRO model."
        }
    ];

    return (
        <Box 
        sx={{
            width:"80%",
            margin:"10% auto",
            display:"grid",
            gridTemplateColumns:"repeat(3,1fr)",
            alignItems:"center",
            gridGap:"2rem",
            ['@media (max-width:600px) ']: {
                gridTemplateColumns:"repeat(1,1fr)",
            }
        }}>
            {people.map((person) => {
                const { id, name, job, image, text } = person;
                return (
                    <article
                    style={{   
                            backgroundColor:"#D4E4F7",
                        boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.75)",
                    }}
                    key={id} className="review">
                        {person.image ?
                        <div className="img-container">
                            <img src={image} alt={name} className="person-img" />
                            <span className="quote-icon">
                                <FaQuoteRight />
                            </span>  
                        </div>
                        : null} 
                        <h4 className="author">{name}</h4>
                        <p className="job">{job}</p>
                        <p className="info">{text}</p>
                    </article>
                )
                }
            )
            }
        </Box>
    );
};

export default Review;
