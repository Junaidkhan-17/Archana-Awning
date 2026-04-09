import "./Manufacturing.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
import VideoCard from "../../components/VideoCard/VideoCard";



// ✅ NEW IMAGE IMPORTS (from new-image folder)
import carparkingawning from "../../assets/new-image/CarParkingAwning.png";
import dropawning from "../../assets/new-image/DropAwning.png";
import foldingawning from "../../assets/new-image/FoldingAwning.png";
import foldingawningjindal from "../../assets/new-image/FoldingAwningJindal.png";
import foldingawningjindal1 from "../../assets/new-image/FoldingAwningJindal1.png";
import foldingawningjindal2 from "../../assets/new-image/FoldingAwningJindal2.png";
import hutawning from "../../assets/new-image/HutAwning.png";
import hutawning1  from "../../assets/new-image/HutAwning1.png";
import hutawning2 from "../../assets/new-image/HutAwning2.png";
import intelligentautomation from "../../assets/new-image/IntelligentAutomation.png";
import tensilestructure from "../../assets/new-image/TensileStructure.png";
import tensilestructure1 from "../../assets/new-image/TensileStructure1.png";
import tensilestructure2 from "../../assets/new-image/TensileStructure2.png";
import tensilestructure3 from "../../assets/new-image/TensileStructure3.png";
import verticalawning from "../../assets/new-image/VerticalAwning.png";
import verticalawning1 from "../../assets/new-image/VerticalAwning1.png";
import windowawning1 from "../../assets/new-image/WindowAwning1.png";
import windowawning2 from "../../assets/new-image/WindowAwning2.png";
import windowawning3 from "../../assets/new-image/WindowAwning3.png";
import sideplate from "../../assets/new-image/sideplate.png";
import gearbox from "../../assets/new-image/gearbox.png";
import frontbarjoint from "../../assets/new-image/frontbarjoint.png";
import frontbar from "../../assets/new-image/frontbar.png";
import armfrontbarjoint from "../../assets/new-image/armfrontbarjoint.png";
import armfrontbarjoint1 from "../../assets/new-image/armfrontbarjoint1.png";
import arm1112 from "../../assets/new-image/arm1112.png";
import arm678 from "../../assets/new-image/arm678.png";
import supportcompensator from "../../assets/new-image/supportcompensator.png";
import sideplatecap from "../../assets/new-image/sideplatecap.png";
import wallclamp from "../../assets/new-image/wallclamp.png";
import fabricpvc from "../../assets/new-image/fabricpvc.png";
import fabricacrylic from "../../assets/new-image/fabricacrylic.png";
import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";
import video3 from "../../assets/video/video3.mp4";


// ✅ UPDATED SYSTEMS ARRAY (now with images)
const systems = [
  { name: "Car Parking Awning", image: carparkingawning },
  { name: "Drop Awning", image: dropawning },
  { name: "Folding Awning", image: foldingawning },
  { name: "Folding Awning Jindal 1", image: foldingawningjindal },
  { name: "Folding Awning Jindal 2", image: foldingawningjindal1 },
  { name: "Folding Awning Jindal 3", image: foldingawningjindal2 },
  { name: "Hut Awning", image: hutawning },
  { name: "Hut Awning 2", image: hutawning1 },
  { name: "Hut Awning 3", image: hutawning2 },
  { name: "Hut Awning 4", image: hutawning2 },
  { name: "Intelligent Automation", image: intelligentautomation },
  { name: "Tensile Structure", image: tensilestructure },
  { name: "Tensile Structure 2", image: tensilestructure1 },
  { name: "Tensile Structure 3", image: tensilestructure2 },
  { name: "Tensile Structure 4", image: tensilestructure3 },
  { name: "Vertical Awning", image: verticalawning },
  { name: "Vertical Awning 2", image: verticalawning1 },
  { name: "Window Awning 1", image: windowawning1 },
  { name: "Window Awning 2", image: windowawning2 },
  { name: "Window Awning 3", image: windowawning3 },
];

const videos = [
  { id: "video-1", name: "Awning Installation", video: video1 },
  { id: "video-2", name: "Awning Installation", video: video2 },
  { id: "video-3", name: "Awning Installation", video: video3 },
];

const components = [
  { title: "Side Plate", image: sideplate, description: "Precision cut supports for strong load handling." },
  { title: "Gear Box", image: gearbox, description: "Smooth operating mechanical core for easy extension." },
  { title: "Front Bar", image: frontbar, description: "High-grade brackets for stable frame connection." },
  { title: "Front Bar Joint", image: frontbarjoint, description: "Engineered retractable arms for long cycle life." },
  { title: "Arm Front Bar Joint", image: armfrontbarjoint, description: "Precision cut supports for strong load handling." },
  { title: "Arm Front Bar Joint 2", image: armfrontbarjoint1, description: "Precision cut supports for strong load handling." },
  { title: "Arm 11' & 12' ", image: arm1112, description: "High-grade brackets for stable frame connection." },
  { title: "Arm 6', 7' & 8,", image: arm678, description: "Engineered retractable arms for long cycle life." },
  { title: "Support Compensator", image: supportcompensator, description: "Precision cut supports for strong load handling." },
  { title: "Side Plate Cap", image: sideplatecap, description: "Smooth operating mechanical core for easy extension." },
  { title: "Wall Clamp", image: wallclamp, description: "High-grade brackets for stable frame connection." },
];

const Manufacturing = () => {
  return (
    <div className="manufacturing-page section-space">
      <div className="manufacturing-hero-bg">
        <div className="container">
          <SectionTitle
            title="Manufacturing Excellence"
            subtitle="End-to-end in-house production for durable awning and tensile solutions."
            centered={false}
          />

          <div className="row g-4 align-items-center mb-5">
            <div className="col-lg-6" data-aos="fade-right">
              <p>
                ARCHANA AWNING COMPANY delivers high-performance systems with strict fabrication controls, structural checks, and installation-ready modular assemblies.
              </p>
              <p>
                Our facility handles fabrication, surface finishing, stitched fabric integration, and automation testing to ensure reliable field performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="mb-5">  
          <SectionTitle title="Product System" />
          <div className="row g-3">
            {systems.map((item) => (
              <div className="col-sm-6 col-lg-3" key={item.name}>
                <div className="system-pill card-surface text-center" data-aos="fade-up">
                  
                  {/* ✅ IMAGE ADDED */}
                  <div className="mb-2">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-fluid system-img"
                    />
                  </div>

                  {/* TEXT */}
                  {item.name}

                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <SectionTitle title="Core Components" />
          <div className="row g-4">
            {components.map((item) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <ProductCard {...item} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <SectionTitle
            title="Fabric Technology"
            subtitle="PVC vs Acrylic selection based on cost, UV resistance, and long-term durability."
          />
          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="fabric-box card-surface">
                <div className="image-hover-wrap mb-3">
                  <img src={fabricpvc} alt="PVC fabric" className="fabric-img" />
                </div>
                <h4>SunSetter PVC</h4>
                <p>Budget-driven projects requiring practical and reliable weather protection.</p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="fabric-box card-surface">
                <div className="image-hover-wrap mb-3">
                  <img src={fabricacrylic} alt="Acrylic fabric" className="fabric-img" />
                </div>
                <h4>ProSolar Acrylic</h4>
                <p>Premium long-life solution with up to 90% UV protection and better heat reduction.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <SectionTitle title="Awning Installation Process" />
          <div className="row g-4">
            {videos.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <VideoCard {...item} />
              </div>
            ))}
          </div>
        </section>



        <section>
          <SectionTitle title="Automation & Controls" />
          <div className="row g-3">
            {[
              "Motorized systems up to 75 sq.m",
              "Remote control integration",
              "Wind sensor safety response",
              "Sun sensor responsive shading",
              "Wired + RTS technology",
            ].map((item) => (
              <div className="col-sm-6 col-lg-4" key={item}>
                <div className="system-pill card-surface" data-aos="zoom-in">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Manufacturing;
