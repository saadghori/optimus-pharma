import Head from "next/head";
import { Container, Carousel, Modal, Row, Col } from "react-bootstrap";
import { useState, useMemo } from "react";

export default function Facility() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  // State to track which certificate is currently hovered for inline styling
  const [hoveredCert, setHoveredCert] = useState(null);

  const galleryImages = [
    "/factory/gallery/1.jpg", "/factory/gallery/2.jpg", "/factory/gallery/3.jpg",
    "/factory/gallery/4.jpg", "/factory/gallery/5.jpg", "/factory/gallery/6.jpg",
    "/factory/gallery/7.jpg", "/factory/gallery/9.jpg", "/factory/gallery/12.jpg", "/factory/gallery/14.jpg", "/factory/gallery/16.jpg",
    "/factory/gallery/17.jpg", "/factory/gallery/18.jpg", "/factory/gallery/19.jpg",
    "/factory/gallery/20.jpg", "/factory/gallery/21.jpg", "/factory/gallery/22.jpg",
    "/factory/gallery/23.jpg", "/factory/gallery/24.jpg", "/factory/gallery/25.jpg",
    "/factory/gallery/26.jpg", "/factory/gallery/27.jpg", "/factory/gallery/28.jpg",
    "/factory/gallery/30.jpg", "/factory/gallery/31.jpg", "/factory/gallery/32.jpg",
    "/factory/gallery/33.jpg", "/factory/gallery/34.jpg", "/factory/gallery/35.jpg",
    "/factory/gallery/36.jpg", "/factory/gallery/37.jpg", "/factory/gallery/38.jpg",
    "/factory/gallery/39.jpg", "/factory/gallery/40.jpg", "/factory/gallery/41.jpg",
  ];

  const chunkedImages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < galleryImages.length; i += 3) {
      chunks.push(galleryImages.slice(i, i + 3));
    }
    return chunks;
  }, [galleryImages]);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  const certStyle = {
    padding: "2rem",
    textAlign: "center",
    border: "1px solid #eee",
    borderRadius: "8px",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    transition: "transform 0.3s ease"
  };

  const certTitleStyle = {
    color: "#ff7823",
    fontWeight: "bold",
    fontSize: "1.25rem",
    marginBottom: "0.5rem",
    display: "inline-block",
    transition: "all 0.2s ease-in-out"
  };

  return (
    <>
      <Head>
        <title>Manufacturing Excellence - Optimus Laboratories</title>
      </Head>

      <div
        style={{
          backgroundImage: `url('/6264.jpg')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.78)",
            zIndex: 1,
          }}
        />

        <Container className="py-5 px-4" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "2.75rem", textAlign: "center" }} className="my-5">
            Optimus Laboratories (Pvt.) Ltd.
          </h1>

          <p style={{ fontSize: "1.65rem", textAlign: "center", maxWidth: "950px", margin: "0 auto 5rem" }}>
            Precision engineering meets pharmaceutical purity
          </p>

          <div style={{ backgroundColor: "#ff7823", padding: "3rem", marginBottom: "6rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}>
            <p style={{ color: "white", fontSize: "1.8rem", fontWeight: "bold", textAlign: "center", margin: 0 }}>
              Equipped with industry-leading machinery and rigorous quality controls,
            </p>
            <p style={{ color: "white", fontSize: "1.8rem", fontWeight: "bold", textAlign: "center", margin: 0 }}>
              our facility ensures unmatched purity and compliance.
            </p>
          </div>

          <div className="row align-items-center my-5">
            <div className="col-lg-6 col-md-12 col-sm-12 text-center">
              <img
                src="/DSC07632.jpg"
                alt="Sterile Liquid Production"
                className="img-fluid rounded shadow"
                style={{ width: "85%", height: "auto", objectFit: "cover" }}
                fetchpriority="high"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mt-lg-0"> 
              <div className="px-lg-5">
                <h3 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.8rem" }}>Sterile Liquid Production</h3>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.7" }}>
                   Our facility utilizes advanced Rotary and Linear Filling Lines encased in Laminar Air Flow (LAF) systems. This technology creates a particle-free environment, ensuring that every bottle of eye drops and nasal spray is filled under strict aseptic conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center my-5 flex-lg-row-reverse">
            <div className="col-lg-6 col-md-12 col-sm-12 text-center">
              <img
                src="/factory/DSC07727.jpg"
                alt="Specialized Ointment & Gel Processing"
                className="img-fluid rounded shadow"
                style={{ width: "85%", height: "auto", objectFit: "cover" }}
                fetchpriority="high"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mt-lg-0">
              <div className="px-lg-5">
                <h3 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.8rem" }}>Specialized Ointment & Gel Processing</h3>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.7" }}>
                  To support our diverse product range, we employ industrial-grade Cream & Ointment Mixers. These specialized vessels allow for the precise homogenization of semi-solid formulations, guaranteeing consistent texture and efficacy in our eye gels and ointments.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center my-5">
            <div className="col-lg-6 col-md-12 col-sm-12 text-center">
              <img
                src="/factory/FZP03187.jpg"
                alt="Advanced Distillation Technology"
                className="img-fluid rounded shadow"
                style={{ width: "85%", height: "auto", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mt-lg-0">
              <div className="px-lg-5">
                <h3 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.8rem" }}>Advanced Distillation Technology</h3>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.7" }}>
                   Our facility features a dedicated Double Distillation Plant with a 200 Ltr/hr capacity. This multi-column system utilizes thermodynamic principles to eliminate endotoxins and volatile impurities, providing a continuous supply of high-purity sterile water.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center my-5 flex-lg-row-reverse">
            <div className="col-lg-6 col-md-12 col-sm-12 text-center">
              <img
                src="/factory/DSC07779.jpg"
                alt="Rigorous Quality Testing"
                className="img-fluid rounded shadow"
                style={{ width: "85%", height: "auto", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mt-lg-0">
              <div className="px-lg-5">
                <h3 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.8rem" }}>Rigorous Quality Testing</h3>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.7" }}>
                  Safety is our priority. We utilize advanced HPLC (High-Performance Liquid Chromatography) systems to verify chemical integrity, ensuring that every formulation meets the highest safety profiles for both domestic and global markets.
                </p>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#ff7823", padding: "3rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}>
            <h2 style={{ color: "white", textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>
            <p style={{ color: "white", fontSize: "1.4rem", textAlign: "center", marginBottom: "3rem" }}>
              Explore more views of our cutting-edge pharmaceutical manufacturing facility.
            </p>

            <Carousel indicators={false} interval={null} wrap={true}>
              {chunkedImages.map((imageGroup, slideIndex) => (
                <Carousel.Item key={slideIndex}>
                  <div className="row g-4 justify-content-center">
                    {imageGroup.map((src, imgIndex) => (
                      <div key={imgIndex} className="col-lg-4 col-md-4 col-sm-6">
                        <img
                          src={src}
                          alt={`Gallery item ${slideIndex * 3 + imgIndex + 1}`}
                          className="img-fluid rounded shadow"
                          style={{ height: "280px", width: "100%", objectFit: "cover", cursor: "pointer" }}
                          onClick={() => handleImageClick(src)}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="py-5 my-5">
            <h2 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "2.2rem", textAlign: "center", marginBottom: "3rem" }}>
              Certifications & Compliance
            </h2>
            <Row className="g-4 mb-5">
              <Col md={3}>
                <div style={certStyle}>
                  <div style={certTitleStyle}>
                    GMP
                  </div>
                  <p className="mb-0">Good Manufacturing Practice Compliant Facility</p>
                </div>
              </Col>
              <Col md={3}>
                <div style={certStyle}>
                  <div 
                    style={{
                      ...certTitleStyle,
                      cursor: "pointer",
                      textDecoration: hoveredCert === "9001" ? "underline" : "none",
                      transform: hoveredCert === "9001" ? "scale(1.05)" : "scale(1)"
                    }}
                    onMouseEnter={() => setHoveredCert("9001")}
                    onMouseLeave={() => setHoveredCert(null)}
                    onClick={() => handleImageClick("/9001.jpeg")}
                  >
                    ISO 9001:2015
                  </div>
                  <p className="mb-0">Quality Management System (QMS)</p>
                </div>
              </Col>
              <Col md={3}>
                <div style={certStyle}>
                  <div 
                    style={{
                      ...certTitleStyle,
                      cursor: "pointer",
                      textDecoration: hoveredCert === "14001" ? "underline" : "none",
                      transform: hoveredCert === "14001" ? "scale(1.05)" : "scale(1)"
                    }}
                    onMouseEnter={() => setHoveredCert("14001")}
                    onMouseLeave={() => setHoveredCert(null)}
                    onClick={() => handleImageClick("/14001.jpeg")}
                  >
                    ISO 14001:2015
                  </div>
                  <p className="mb-0">Environmental Management System (EMS)</p>
                </div>
              </Col>
              <Col md={3}>
                <div style={certStyle}>
                  <div 
                    style={{
                      ...certTitleStyle,
                      cursor: "pointer",
                      textDecoration: hoveredCert === "45001" ? "underline" : "none",
                      transform: hoveredCert === "45001" ? "scale(1.05)" : "scale(1)"
                    }}
                    onMouseEnter={() => setHoveredCert("45001")}
                    onMouseLeave={() => setHoveredCert(null)}
                    onClick={() => handleImageClick("/45001.jpeg")}
                  >
                    ISO 45001:2018
                  </div>
                  <p className="mb-0">Occupational Health and Safety Management System (OHSMS)</p>
                </div>
              </Col>
            </Row>

            <h2 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "2.2rem", textAlign: "center", marginTop: "4rem", marginBottom: "3rem" }}>
              Memberships
            </h2>
            <Row className="g-4 justify-content-center">
              <Col md={4}>
                <div style={certStyle}>
                  {/* Wrapper to ensure vertical alignment */}
                  <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <img 
                      src="/lcci.jpeg" 
                      alt="LCCI Logo" 
                      style={{ maxWidth: "120px", maxHeight: "100px", height: "auto" }} 
                    />
                  </div>
                  <div style={certTitleStyle}>LCCI</div>
                  <p className="mb-0">The Lahore Chamber of Commerce and Industry</p>
                </div>
              </Col>
              <Col md={4}>
                <div style={certStyle}>
                  {/* Wrapper to ensure vertical alignment */}
                  <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <img 
                      src="/ppma.jpeg" 
                      alt="PPMA Logo" 
                      style={{ maxWidth: "120px", maxHeight: "100px", height: "auto" }} 
                    />
                  </div>
                  <div style={certTitleStyle}>PPMA</div>
                  <p className="mb-0">Pakistan Pharmaceutical Manufacturers Association</p>
                </div>
              </Col>
            </Row>
          </div>

          <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
            <Modal.Body className="p-4 text-center">
              <img 
                src={selectedImage} 
                alt="Enlarged View" 
                className="img-fluid rounded" 
                style={{ width: "70%", margin: "0 auto", display: "block" }} 
              />
            </Modal.Body>
          </Modal>

        </Container>
      </div>
    </>
  );
}