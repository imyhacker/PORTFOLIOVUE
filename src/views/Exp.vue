<template>
  <div class="about mt-5 py-5 tes">
    <div class="container mb-4">
      <div class="row">
        <div class="col-md-8 offset-md-2" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <div class="text-center">
            <h3 class="title fw-bolder">My <font class="text-warning"> Experience</font></h3>
            <p style="font-family: Sora">This is my work experience.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-5 col-md-5 text-center">
                <img src="https://ari-fn.github.io/image/hire.svg" class="img-fluid" alt="" data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="1000" />
              </div>

              <div class="col-12 col-lg-5 col-md-5 benefit-container ">
                <p class="titles fw-bolder fs-2" data-aos="fade-up" data-aos-delay="300">What the benefits of hiring me?</p>
                <div class="benefits mt-4">
                  <div class="d-flex flex-row benefit-item mb-3" data-aos="fade-up" data-aos-delay="400">
                    <img src="https://ari-fn.github.io/image/check-mark.svg" alt="" />
                    <span class="ms-3">Active, fast, on time and easy to understand</span>
                  </div>
                  <div class="d-flex flex-row benefit-item mb-3" data-aos="fade-up" data-aos-delay="600">
                    <img src="https://ari-fn.github.io/image/check-mark.svg" alt="" />
                    <span class="ms-3">Easy to work in teams and work alone</span>
                  </div>
                  <div class="d-flex flex-row benefit-item mb-3" data-aos="fade-up" data-aos-delay="800">
                    <img src="https://ari-fn.github.io/image/check-mark.svg" alt="" />
                    <span class="ms-3">and lastly, you got me trained in the discipline</span>
                  </div>
                </div>
                <div class="d-flex flex-row mt-4 row-button flex-start" data-aos="zoom-in-right" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">
                  <a href="#" class="btn btn-outline-secondary with-icon">
                    <span class="fas fa-envelope" />
                    <span class="ms-2">Email Me</span>
                  </a>
                  <a href="#" target="_blank" class="ms-2 btn btn-outline-white shadow-sm align-self-center with-icon">
                    <span class="fas fa-download" />
                    <span class="ms-2">Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 mt-5">
          <div class="row justify-content-center">
            <table class="table table-hover">
              <thead>
                <tr class="text-center">
                  <th>No</th>
                  <th>Job Name</th>
                  <th>Work Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Teacher Programming Of Extracurricular in Vocational High School Telematics Indramayu</td>
                  <td>2018-2019</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Internship at PT. Telkom Indonesia</td>
                  <td>2018-2019</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Freelance Web Developer</td>
                  <td>2019-2020</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Blogger at www.suteki.my.id</td>
                  <td>2018-Now</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>IT Support at Vocational High School Telematics Indramayu</td>
                  <td>2020-Now</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>IT Web Developer at Vocational High School Telematics Indramayu</td>
                  <td>2021-Now</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: Poppins;
  src: url(https://fonts.googleapis.com/css2?family=Poppins);
}

.tes {
  font-family: Poppins;
}

@media only screen and (max-width: 506px) {
  section.hire .benefit-container h3 {
    text-align: center;
  }
}

@media only screen and (max-width: 576px) {
  section.hire .benefit-container {
    margin-top: 25px;
  }
}

section.hire .benefit-container .benefits {
  margin-top: 1px;
}

section.hire .benefit-container .benefits .benefit-item {
  margin-top: 33px;
}

section.hire .benefit-container .benefits .benefit-item span {
  font-size: 13px;
  font-weight: 600;
}
.titles {
  line-height: 52px;
  color: #0e1554;
  font-family: Poppins;
}
.with-icon {
  border-radius: 20px;
}
</style>
