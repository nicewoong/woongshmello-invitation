import React from "react";

const About = () => {
  return (
    <>
      <div className="woongshmello_section" id="about">
        <div className="woongshmello_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />

                  <div
                    className="main"
                    style={{ backgroundImage: "url(img/about/2-1.jpg)" }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="woongshmello_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Invitation</span>
                  <h3>We sincerely invite you.</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  style={{ padding: "10px" }}
                >
                  <p>06월 30일, 우리는 처음으로 마주한 날이었죠. 그 후로 3년이라는 시간이 흘렀고, 우리의 사랑은 더욱 깊어져 결심을 하게 되었습니다.
                  이제 우리는 서로의 인생을 함께하고자 합니다. 결혼식은 삼성전자 서초사옥에서 소중한 가족과 친구들 앞에서 소박하게 진행될 예정입니다.
                  저희의 결혼식에 함께해주시길 진심으로 바라며, 당일을 함께해주실 수 없는 분들에게도 따뜻한 축하와 기도를 부탁드립니다. 이 날이 저희 둘에게 뜻깊고 아름다운 날이 되도록 많은 사랑과 축복 부탁드립니다.</p>
                  <br/>
                  <p>한준식＊김태경 의 子 웅제</p>
                  <p>권경택＊김은화 의 女 은경</p>
                  <p>일시 : 24년 06월 30일 일요일 오전 11시</p>
                  <p>장소 : 삼성전자 서초사옥 </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="/">
                    Way to come
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;
