import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing the best
        experience for our users. Our platform is designed to help you
        explore, learn, and grow.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals by offering high-quality
          resources and services tailored to their needs. We strive to create
          a community where everyone can achieve their full potential.
        </p>
      </section>
      <section>
        <h2>Our Vision</h2>
        <p>
          We envision a world where technology bridges gaps and brings people
          closer together. Our platform is a step towards this vision, making
          knowledge and tools accessible to everyone.
        </p>
      </section>
      <section>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We believe in being honest and transparent in everything we do.</li>
          <li><strong>Innovation:</strong> We are constantly evolving to bring new and exciting solutions.</li>
          <li><strong>Community:</strong> We prioritize building a supportive and inclusive community.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;