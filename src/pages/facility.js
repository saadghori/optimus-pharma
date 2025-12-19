import Head from "next/head";
import { Container, Carousel, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Facility() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const galleryImages = [
    "/factory/gallery/1.jpg",
    "/factory/gallery/2.jpeg",
    "/factory/gallery/3.jpeg",
    "/factory/gallery/4.jpeg",
    "/factory/gallery/5.jpeg",
    "/factory/gallery/6.jpeg",
    "/factory/gallery/7.jpeg",
    "/factory/gallery/9.jpeg",
    "/factory/gallery/12.jpeg",
    "/factory/gallery/13.jpeg",
    "/factory/gallery/14.jpeg",
    "/factory/gallery/15.jpg",
    "/factory/gallery/16.jpg",
    "/factory/gallery/17.jpg",
    "/factory/gallery/18.jpg",
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  return (
    <>
      <Head>
        <title>Manufacturing Excellence - Optimus Laboratories</title>
      </Head>

      {/* Full-page background with light white overlay */}
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          position: "relative",
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
            backgroundColor: "rgba(255, 255, 255, 0.88)",
            zIndex: 1,
          }}
        />

        <Container
          className="py-5 px-4"
          style={{ position: "relative", zIndex: 2 }}
        >
          {/* Page Title */}
          <h1
            style={{ color: "#ff7823", fontWeight: "bold", fontSize: "2.5rem", textAlign: "center" }}
            className="my-5"
          >
            Leading-Edge Laboratories
          </h1>

          {/* Headline */}
          <h2
            style={{ color: "#ff7823", fontWeight: "bold", fontSize: "2rem", textAlign: "center" }}
            className="mb-4"
          >
            Precision Engineering Meets Pharmaceutical Purity
          </h2>

          {/* Introductory Text */}
          <p style={{ fontSize: "1.4rem", textAlign: "center", maxWidth: "950px", margin: "0 auto 5rem" }}>
            At Optimus Laboratories, we don’t just manufacture; we craft healthcare solutions with absolute precision. Our state-of-the-art facility is purpose-built to handle the delicate requirements of sterile ophthalmic and ENT preparations.
          </p>

          {/* Intro Call to Scroll - Orange background with white text */}
          <div style={{ backgroundColor: "#ff7823", padding: "3rem", marginBottom: "6rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}>
            <p style={{ color: "white", fontSize: "1.8rem", fontWeight: "bold", textAlign: "center", margin: 0 }}>
              Equipped with industry-leading machinery and rigorous quality controls,
            </p>
            <p style={{ color: "white", fontSize: "1.8rem", fontWeight: "bold", textAlign: "center", margin: 0 }}>
              our facility ensures unmatched purity and compliance.
            </p>
          </div>

          {/* Highlight 1: Sterile Liquid Production */}
          <div className="row align-items-center my-5">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src="/factory/IMG_1794.jpeg"
                alt="Sterile Liquid Production"
                className="img-fluid rounded shadow"
                style={{ width: "85%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="px-lg-5">
                <h3 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.8rem" }}>Sterile Liquid Production</h3>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.7" }}>
                  Our facility utilizes advanced Rotary and Linear Filling Lines encased in Laminar Air Flow (LAF) systems. This technology creates a particle-free environment, ensuring that every bottle of eye drops and nasal spray is filled under strict aseptic conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight 2: Specialized Ointment & Gel Processing */}
          <div className="row align-items-center my-5 flex-lg-row-reverse">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src="/factory/IMG_1778.jpeg"
                alt="Specialized Ointment & Gel Processing"
                className="img-fluid rounded shadow"
                style={{ width: "85%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="px-lg-5">
                <h3 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.8rem" }}>Specialized Ointment & Gel Processing</h3>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.7" }}>
                  To support our diverse product range, we employ industrial-grade Cream & Ointment Mixers. These specialized vessels allow for the precise homogenization of semi-solid formulations, guaranteeing consistent texture and efficacy in our eye gels and ointments.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight 3: Controlled Cleanroom Environment */}
          <div className="row align-items-center my-5">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src="/factory/IMG_1830.jpeg"
                alt="Controlled Cleanroom Environment"
                className="img-fluid rounded shadow"
                style={{ width: "85%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="px-lg-5">
                <h3 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.8rem" }}>Controlled Cleanroom Environment</h3>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.7" }}>
                  Hygiene is engineered into our infrastructure. From seamless epoxy flooring to dedicated personnel airlocks and gowning areas, every square foot is designed to prevent contamination. Our material handling utilizes interlocking pass-through boxes, ensuring safe transfer between classified zones without compromising air quality.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight 4: Traceability & Packaging */}
          <div className="row align-items-center my-5 flex-lg-row-reverse">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src="/factory/IMG_1800.jpg"
                alt="Traceability & Packaging"
                className="img-fluid rounded shadow"
                style={{ width: "85%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="px-lg-5">
                <h3 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.8rem" }}>Traceability & Packaging</h3>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.7" }}>
                  Quality extends to the final package. Our finishing lines feature dedicated Laser Printing Rooms for indelible batch coding and expiry marking, ensuring complete traceability and compliance for both domestic and export markets.
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Section - Styled like Mission section */}
          <div style={{ backgroundColor: "#ff7823", padding: "3rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}>
            <h2 style={{ color: "white", textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
              Gallery
            </h2>
            <p style={{ color: "white", fontSize: "1.4rem", textAlign: "center", marginBottom: "3rem" }}>
              Explore more views of our cutting-edge pharmaceutical manufacturing facility.
            </p>

            {/* Carousel showing 3 images at a time */}
            <Carousel indicators={false} interval={null} wrap={true}>
              {[0, 3, 6, 9, 12].map((startIndex) => (
                <Carousel.Item key={startIndex}>
                  <div className="row g-4 justify-content-center">
                    {galleryImages.slice(startIndex, startIndex + 3).map((src, idx) => (
                      <div key={idx} className="col-lg-4 col-md-4 col-sm-6">
                        <img
                          src={src}
                          alt={`Gallery ${startIndex + idx + 1}`}
                          className="img-fluid rounded shadow"
                          style={{ height: "280px", width: "100%", objectFit: "cover", cursor: "pointer" }}
                          onClick={() => handleImageClick(src)}
                        />
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Modal for enlarged image */}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl">
            <Modal.Body className="p-0">
              <img src={selectedImage} alt="Enlarged" className="img-fluid" style={{ width: "100%" }} />
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </>
  );
}