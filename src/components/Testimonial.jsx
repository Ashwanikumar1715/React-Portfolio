import React from "react";
import gfg from "../assets/gfg2.png";
import codechef from "../assets/code.jpeg";
import leet from "../assets/leet.png";
// import ninja from "../assets/ninja.png";

const Testimonial = () => (
  <div id="testimonial">
    <h2>My Coding Platforms</h2>

    <section>
      <TestimonialCard
        name={"Geeks for Geeks"}
        feedback={<ul>
          <li>450+ Questions</li>
          <li>Love Babar Dsa Sheet</li>
        </ul>}
        imageSrc={gfg}
        link={"https://auth.geeksforgeeks.org/user/as_hw_ani0507/"} />

      <TestimonialCard
        name={"Codechef"}
        feedback={<ul>
          <li>2⭐ MAX(1508)</li>
          <li>Leveling Up</li>
        </ul>}
        imageSrc={codechef}
        link={"https://www.codechef.com/users/ashwani1715"} />

      <TestimonialCard
        name={"Leetcode "}
        feedback={<ul>
          <li>120+ Questions</li>
          <li>Contest Rating:1,440</li>
        </ul>}
        imageSrc={leet}
        link={"https://leetcode.com/ashwani1715/"} />

    </section>
  </div>
);

const TestimonialCard = ({ name, feedback, imageSrc,link }) => (
  <article className="testimonial-card ">
    <img src={imageSrc} alt="platforms" className="user-image" />
    <h4>{name}</h4>
    <p>{feedback}</p>
   <a href={link} target="_blank"  rel="noreferrer">visit</a>
  </article>
);

export default Testimonial;
