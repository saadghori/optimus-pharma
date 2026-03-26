import Head from "next/head";
import { Container } from "react-bootstrap";
import LeaderProfile from "@/components/LeaderProfile";

export default function Leadership() {
  return (
    <>
      <Head>
        <title>Leadership - Optimus Laboratories</title>
      </Head>
      {/* Wrapper div for full-page background with light white overlay */}
      <div
        style={{
          backgroundImage: `url('/6263.jpg')`, // Image path in public folder
          backgroundSize: "cover", // Scales image to cover the entire area
          backgroundPosition: "center", // Centers the image
          minHeight: "100vh", // Ensures it covers the full viewport height
          width: "100%", // Ensures it spans the full width
          position: "relative", // Required for overlay positioning
        }}
      >
        {/* Light white overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.88)", // Light white overlay
            zIndex: 1, // Places overlay above the background image
          }}
        />
        <Container
          className="py-5 px-4"
          style={{ backgroundColor: "transparent", position: "relative", zIndex: 2 }}
        >
          {/* Page Title */}
          <h1
            style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.15rem" }}
            className="mb-3"
          >
            Leadership
          </h1>

          {/* Introductory Text */}
          <p className="mb-4" style={{ color: "black", fontSize: "1.4rem" }}>
            At Optimus Laboratories, our leadership team is driven by a shared vision of innovation, excellence, and commitment to quality. With extensive expertise in the pharmaceutical industry, our leaders ensure strategic growth, operational efficiency, and groundbreaking advancements in ophthalmic and ENT solutions.
          </p>

          {/* Leader Profiles */}
          <LeaderProfile
            imageSrc="/hamid-sindhu.png"
            designation="Founder & Chief Executive Officer"
            name="Muhammad Hamid"
            description="Muhammad Hamid’s journey in healthcare began on the frontlines of the ophthalmology industry, where he built the foundation of knowledge, trust, and dedication that would define his career. His path led him to work with global leaders in ophthalmology, where he earned consistent recognition for his hard work and performance and grew through leadership roles spanning product launches and business development. He joined hands with trusted friends nd partners to found the Optimus Group — growing it from a pharmaceutical marketing venture into a fully licensed manufacturing company. Today, he leads Optimus with a steadfast commitment to delivering world-class healthcare solutions to the patients who need them most."
            imagePosition="left"
          />

          <LeaderProfile
            imageSrc="/Gulzar.jpeg"
            designation="Chief Financial Officer"
            name="Gulzar Ahmed Bajwa"
            description="With a deep commitment to financial integrity and corporate governance, Gulzar Ahmed Bajwa oversees the fiscal health of the Optimus Group. His strategic oversight ensures that the company’s resources are managed strategically and ethically, enabling us to maintain high standards of quality and innovation."
            imagePosition="right"
          />

          <LeaderProfile
            imageSrc="/Asadullah.png"
            designation="Director Finance"
            name="Asadullah"
            description="Asadullah ensures the smooth operation and expansion of the financial department, leading initiatives that foster sustainable growth. His expertise in fiscal management underpins the company's long-term vision and global reach."
            imagePosition="left"
          />
        </Container>
      </div>
    </>
  );
}