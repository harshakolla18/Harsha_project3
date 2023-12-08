// import { useState } from "react";
import UserImg from "../assets/photo.jpeg";

function About() {
  return (
    <>
      <section className="max-w-screen-md mx-auto mt-10" id="about">
        <h2 className="text-center text-3xl mb-10">About Me</h2>

        <div className="flex flex-1 gap-6">
          <a href="">
            <img src={UserImg} alt="photo" className="about__img" />
          </a>
          <div className="max-w-md px-4">
            <p className="text-left text-lg">
              I can say that I am a responsible and a hard-working student.
              Moreover, being a sociable person, I have many friends since I
              like to communicate with people and get to know new interesting
              individuals. I enjoy my time at school: it is really nice to
              study, the students are very friendly and ready to help. The
              atmosphere cannot but make me want to go there every time. I like
              to receive and deal with challenging tasks. I am a very
              enthusiastic student and I think this is a strong point of mine.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
