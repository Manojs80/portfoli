
 import Carousel from 'react-bootstrap/Carousel';
import "./Homebanner.css";
import { Col, Row } from 'react-bootstrap';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>



function Homebanner() {
  return (
     <div className='container-fluid bg-black'>
    <Carousel >
 
      <Carousel.Item> 
        <img className='w-100' src="./Images/bgimg4.JPG" alt='loading' />
          <div className='cr1 CarouselCaption '>
              <h2> <b><span style={{fontSize:'5vw'}}>Hi  I  Am</span> <span style={{color:'blue'}} >Manoj</span>  </b> </h2>
              <h4 > <b> I am a full stack developer.....</b> </h4>
              <p> <h6> <b> Revolutionizing the way we live, work and play.</b></h6> </p>
           </div>                
      </Carousel.Item>

      <Carousel.Item>
      <img className='w-100' src="./Images/bgimg1.JPG"  alt="loading"/>  
       <div className='cr2'>
       <h4>ABOUT ME</h4>
        <p><h6>Hi, I am Manoj s and I work as a web developer.I am a software engineer who loves to create websites as well as apps for people. I think that people should look at the bigger picture when they are building something. I love to work in groups where everyone can voice their opinions and ideas.In the end, I love to work towards one goal where in the end we all can contribute towards making a good website.In my free time, you can see me listening to songs and binge-watching series when I am not working with my clients</h6></p>
       </div>      
       </Carousel.Item>

      <Carousel.Item>
      <img className='w-100' src="./Images/language.JPG"  alt="loading"/> 
          <div className='cr3'>
            <h3>SKILLS</h3>
            </div>           
      </Carousel.Item>

    </Carousel>
        <div className='iconbody'>
         <Row className='justify-content-center '>
         <Col md={9} className='icon2 '> 
         <div className='iconhead  p-2'>Hey... I am here</div>      
          <ul className='d-flex '>
            <li><a href='https://www.facebook.com/manu.sivadasan.35?mibextid=ZbWKwL' ><i  class="bi bi-facebook "></i> </a></li>
            <li><a href='https://m.me/Manu Sivadasan'><i class="bi bi-messenger"></i></a></li>
            <li><a href='https://wa.me/9847862400?text=Hello'><i class="bi bi-whatsapp"></i></a></li> 
            <li><a href="mailto:08041996kallada@gmail.com"><i class="bi bi-envelope-at-fill"></i></a></li>
            <li><a href='https://github.com/Manojs80'><i class="bi bi-github"></i></a></li>
            <li> <a href="tel:+919847862400"><i class="bi bi-telephone-outbound-fill"></i></a></li>
          </ul>
       </Col>
       </Row>
       </div>
    </div>
  );
}

export default Homebanner;  
/*
<div className='icons-r bg-black p-1'>
          <ul className='d-flex  py-1'>
            <li><a href='' ><i  class="bi bi-facebook  pt-1 "></i> </a></li>
            <li><a href='#'><i class="bi bi-messenger"></i></a></li>
            <li><a href='https://wa.me/9847862400?text=Hello'><i class="bi bi-whatsapp"></i></a></li> 
            <li><a href='https://www.bing.com/ck/a?!&&p=672b5d1b8e5b0dacJmltdHM9MTcxMzIyNTYwMCZpZ3VpZD0xYmU4NDM1MC05OGNjLTY2OTgtMmViMS01MGIzOTk2MTY3YjMmaW5zaWQ9NTIxMw&ptn=3&ver=2&hsh=3&fclid=1be84350-98cc-6698-2eb1-50b3996167b3&psq=gmail+login&u=a1aHR0cDovL21haWwuZ29vZ2xlLmNvbS9tYWlsLw&ntb=1'><i class="bi bi-envelope-at-fill"></i></a></li>
            <li><a href='https://manojs80.github.io/Manoj/'><i class="bi bi-github"></i></a></li>
            <li> <a href=''><i class="bi bi-telephone-outbound-fill"></i></a></li>
          </ul>
       </div>

       <div className='post'>
              <h2> <b>Hi  I  Am  Manoj </b></h2>
              <h5 className='text-center pb-2'> I am a full stack developer..... </h5>
              <p> <h6>Revolutionizing the way we live, work and play.</h6> </p>
        </div>

        <div className='post2'> </div>
        https://mehtaint.com/wp-content/uploads/2018/11/wall-leaves-wooden-207301.jpg
*/





