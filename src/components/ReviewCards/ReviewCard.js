import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Box, width } from "@mui/system";
import { Typography } from "@mui/material";
const Review = () => {
  return (
    <Box
      id="review"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        width: "85%",
        margin: "auto",
        gap: "3%",
        color: "white",
        ["@media  (min-width: 320px) and (max-width:480px)"]: {
          gridTemplateColumns: "repeat(1,1fr)",
        },
        ["@media (min-width: 481px) and (max-width: 768px)"]: {
          gridTemplateColumns: "repeat(2,1fr)",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "I really enjoy using Nolt! The app is focused on what's essential,
            and it's super easy to customize things and understand how things
            work. I also love the transparent and affordable PRO model."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-sebastiano.31c04f45c8.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Sebastiano Guerriero <br /> CodyHouse
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "Nolt is great for collecting feedback and feature requests from our
            community of creators. It's given us clarity on what to build next
            for our users and has helped us improve our product decisions."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-sahil.2236960693.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Sahil Lavingia <br /> Gumroad
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "It took us a while, but we finally found the perfect product to
            centralize feedback. Nolt is minimalistic, intuitive, and just
            beautiful. It's the most efficient way to listen and interact with
            our community."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-itamar.3f40e2ee78.png"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Itamar Madar <br /> The SCP Foundation
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "Nolt works like a charm! Only after three days, more than 8000
            votes, 220 comments, and 80 ideas have been submitted. A suggestion
            with over 1000 upvotes got implemented, and my users are engaged and
            happy like never before."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-michal.6b885fff05.png"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Michał Tajchert <br /> Kanarek
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "Love the simplicity"
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "We used to have suggestions from our community all over the place,
            and it was hard to stay on top of it. But with Nolt, we now have
            this dedicated place for them that makes it super easy to see what
            the community wants most."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-richard.64b827b4bb.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Richard Rampas Volcanoids
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "Our users love the simple, intuitive, and modern design of Nolt! It
            has allowed us to validate ideas, ideate new features, and connect
            with our users in a super easy and organized way."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-umberto.2540ef7933.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Umberto Greco <br /> OpenTabs
            </Typography>
            <Box></Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "We finally found the perfect product to centralize feedback"
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "We are big fans of Nolt. The amount of feedback, feature requests
            and discussions has increased significantly. With the voting system,
            it never feels overwhelming. We are so much more in control of our
            roadmap and closer to the community with our releases."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-bastian.e7fe6e24a1.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Bastian Allgeier
              <br /> Kirby CMS
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "Nolt is a fast and simple solution for getting customer feedback
            for Archbee. We love the easy token integration for automatically
            authenticating our users."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-dragos.5ba1ec0a09.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Dragos Bulugean
              <br /> Archbee
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "We tried several other tools for managing and gathering user
            feedback, but they were either too expensive, had an outdated look
            or were lacking functionalities. Besides the reasonable price and
            the very modern easy-to-use interface, what we love about Nolt is
            the ability to suggest ideas or vote on them anonymously. Most of
            the users don't like signing up for something they may use only
            once. Even if they act anonymously, they do have the option to
            subscribe to specific ideas, so it's a win-win situation."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-ervin.4e6de2d1f0.png"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Ervin Kalemi <br />
              Publer
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "We use @TryNolt for @rive_app and we love it!"
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-guido.79ae0f4b86.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Guido Rosso <br />
              Rive
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "My users are engaged and happy like never before"
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "Nolt enables us to get clarity over the features we should build
            next. By opening up our backlog, which is predominantly made up of
            feature requests from our users, we democratise our product build,
            ensuring the voice of our customer is at the center of our
            development. Nolt makes it super easy!"
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-hassan.9e71415b4b.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Hassan Rajwani <br /> REFSIX
            </Typography>
            <Box></Box>
          </Box>
        </Box>
      </Box>
      <Box 
      sx={{
                  ["@media  (min-width: 320px) and (max-width:480px)"]: {
                      display: "none",
                  },
                  ["@media (min-width: 481px) and (max-width: 768px)"]: {
                      display: "none",
                  },
      }}
      >
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "The simplicity of Nolt made it easy for our small team to start
            collecting customer feedback. In just 30 days, we went from 0
            customer feedback to over 60 customer suggestions about our product.
            We even started using Nolt to collect internal feedback from
            different team members. Overall, it's been the number one addition
            to our tech stack in terms of price, simplicity, ROI, and
            effectiveness."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-josh.827cc021f2.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Josh Merryman
              <br /> MessageDesk
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          "We’ve really liked @TryNolt. The fine folks at @Letterboxd_ have
          moved over to it as well. Highly recommended."
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          ></Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-tomwatson.c8c24550f9.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Tom Watson <br />
              Glass
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "Thanks Tom! You tagged the handle of a fan account, but yes, we’re
            loving Nolt’s streamlined approach to feedback, not to mention the
            SSO and import options. ⚡️"
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-letterboxd.d66b45c754.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Letterboxd
              <br /> @letterboxd
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "Nolt was very easy to set up, and the support was very fast. The
            tool helps us to get new ideas from people both inside and outside
            of The Salvation Army. We definitely recommend Nolt to anyone
            wanting an easy and fast way to collect ideas."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-dean.a9ae2d77df.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Dean Bates <br /> The Salvation Army
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "Nolt is the best for this, by far"
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "As a startup on a tiny budget, we were looking for a
            super-lightweight customer feedback solution that just worked right
            out of the box. Nolt fits our needs perfectly!"
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-greg.5cab24bdd2.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Greg Hamilton <br /> Lifecoach
            </Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "6%",
            margin: "4%",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              color: "white",
              marginBottom: "4%",
            }}
          >
            "We are excited to now use a @TryNolt board for our user
            suggestions! We love hearing from users & this brings our community
            even closer to each other and our roadmap."
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="https://nolt.io/static/dist/images/landing/testimonial-tiimo.b0acff8ade.jpg"
              alt=""
            />
            <Typography
              sx={{
                marginLeft: "4%",
                marginTop: "2%",
                textAlign: "left",
                color: "white",
              }}
            >
              Tiimo <br /> @tiimoapp
            </Typography>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
