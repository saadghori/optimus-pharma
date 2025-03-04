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
            At Optimus Pharma, our leadership team is driven by a shared vision of
            innovation, excellence, and commitment to quality. With extensive
            expertise in the pharmaceutical industry, our leaders ensure strategic
            growth, operational efficiency, and groundbreaking advancements in
            ophthalmic solutions.
          </p>

          {/* Leader Profiles */}
          <LeaderProfile
            imageSrc="/hamid-sindhu.png"
            designation="CEO / Founder"
            name="Muhammad Hamid"
            description="With years of experience in pioneering large-scale pharmaceutical projects, Muhammad Hamid is committed to driving innovation at Optimus Pharma. His visionary leadership ensures that each product meets the highest standards of quality and efficacy."
            imagePosition="left"
          />

          <LeaderProfile
            imageSrc="/sajjad-latif-1.png"
            designation="Director Planning"
            name="Sajjad Latif"
            description="Sajjad Latif spearheads strategic planning, ensuring that Optimus Pharma remains on the cutting edge of research and development. He focuses on streamlined operations and future-ready processes to expand our global impact."
            imagePosition="right"
          />

          <LeaderProfile
            imageSrc="/Farooq.png"
            designation="Director Operations"
            name="Farooq Azam Khan"
            description="Farooq Azam Khan oversees day-to-day operations, maintaining a balance between operational efficiency and patient-focused innovation. His hands-on approach drives seamless production and distribution across our network."
            imagePosition="left"
          />

          <LeaderProfile
            imageSrc="/Asadullah.png"
            designation="Director Finance"
            name="Asadullah"
            description="Asadullah ensures the financial health and stability of Optimus Pharma, leading initiatives that foster sustainable growth. His expertise in fiscal management underpins the company's long-term vision and global reach."
            imagePosition="right"
          />
        </Container>
      </div>
    </>
  );
}