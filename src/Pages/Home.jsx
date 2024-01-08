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

        <Container fluid className="mt-5 h-100">
          <Row className="rest_info m-1" gap={3}>
            <Col sm={6} md={7} xl={6} className="two_img mt-2">
              <Image
                src={barr}
                alt=""
                className="h-100 w-100 object-fit-cover"
                rounded
              />
            </Col>
            <Col sm={6} md={5} xl={6} className="mb-5">
              <h6 className="fw-normal position-relative">about</h6>
              <h3 className="fw-medium flex-md-wrap">Feliciano Restaurant</h3>
              <p className="fw-normal mt-3 fs-md-4 fs-5">
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
              <p className="fw-normal fs-4 mt-4">
                Mon -Fri &nbsp; <span className="fw-bold">8AM - 11PM</span>
              </p>
              <h4 className="fw-bold fs-1">+234-9027-91057</h4>
            </Col>
          </Row>

          <Row className='mt-5 m-1 stat'>
            <Col md={2}>
                <h3 className='fw-bold '>18</h3>
                <h6>YEARS OF EXPERIENCE</h6>
            </Col>
            <Col md={2}>
                <h3 className='fw-bold '>100</h3>
                <h6>MENUS / DISHES</h6>
            </Col>
            <Col md={2}>
                <h3 className='fw-bold '>500</h3>
                <h6>STAFFS</h6>
            </Col>
            <Col md={2}>
                <h3 className='fw-bold '>15,000</h3>
                <h6>HAPPY CUSTOMERS</h6>
            </Col>
            <Col md={4}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto ad reiciendis officia dicta esse fugit recusandae tempore repudiandae, tenetur non commodi sit quaerat facere optio, quod corporis, rerum cum voluptas. Ad suscipit officiis nam vero. Quidem eaque magnam illum.</p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Home;
