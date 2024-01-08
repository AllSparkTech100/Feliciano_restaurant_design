import "./pages.scss";
import Slide from "../Components/Slide";
import CircleImage from "../Components/CircleImage";
import { Container, Row, Col, Image } from "react-bootstrap";
import barr from "../Photos/chef-2.jpg";
function Home() {
  return (
    <>
      <Slide />

      <main className="my-5">
        <Container fluid>
          <Row className="m-md-0 m-2">
            <Col sm={3} md={3} className="good">
              <CircleImage
                imageUrl={
                  "https://www.eatingwell.com/thmb/ngkEIo8XHdZxLcmY-Se-yk3uGjc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x678:961x680)/is-grilled-meat-bad-for-you-ba946756dae3432592d0b463941b1917.jpg"
                }
              />
              <div className="under-text">
                <h5 className="fw-semibold mt-2">Grilled Meat With Tomatoes</h5>
                <p className="fw-medium mt-2">Meat, Potatoes, Rice, Tomato</p>
              </div>
            </Col>
            <Col sm={3} md={3} className="good">
              <CircleImage
                imageUrl={
                  "https://hips.hearstapps.com/hmg-prod/images/delish-grilled-potatoes-jpg-1526061594.jpg?crop=1xw:0.9968354430379747xh;center,top"
                }
              />
              <div className="under-text">
                <h5 className="fw-semibold mt-2">
                  Grilled Potatoes With Tomatoes
                </h5>
                <p className="fw-medium mt-2">Meat, Potatoes, Rice, Tomato</p>
              </div>
            </Col>
            <Col sm={3} md={3} className="good">
              <CircleImage
                imageUrl={
                  "https://img.taste.com.au/pQppG_f4/taste/2016/11/barbecued-japanese-rice-cakes-onigiri-110057-1.jpeg"
                }
              />
              <div className="under-text">
                <h5 className="fw-semibold mt-2">Grilled Rice With Tomatoes</h5>
                <p className="fw-medium mt-2">Meat, Potatoes, Rice, Tomato</p>
              </div>
            </Col>
            <Col sm={3} md={3} className="good">
              <CircleImage
                imageUrl={
                  "https://www.feastingathome.com/wp-content/uploads/2023/06/Grilled-Tomatoes-12.jpg"
                }
              />
              <div className="under-text">
                <h5 className="fw-semibold mt-2">
                  Grilled Tomato With Tomatoes
                </h5>
                <p className="fw-medium mt-2">Meat, Potatoes, Rice, Tomato</p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid className="mt-5">
          <Row className="rest_info">
            <Col sm={4} md={3} className="two_img mt-2">
              <Image src={barr} alt="" rounded />
            </Col>
            <Col sm={8} md={9} className="mb-5">
              <h6 className="fw-normal position-relative">about</h6>
              <h3 className="fw-semibold">Feliciano Restaurant</h3>
              <p className="fw-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur sint similique aliquam laboriosam sapiente eligendi
                dolore quae distinctio quisquam minima?
              </p>
              <p className="fw-normal fs-4">
                Mon -Fri <span className="fw-bold">8AM - 11PM</span>
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Home;
