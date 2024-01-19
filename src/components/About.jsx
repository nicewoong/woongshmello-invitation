import React from "react";

const About = () => {

  const handleKakaoMapOpen = () => {
    const address = "서울 서초구 서초대로74길 11";
    const url = "https://map.kakao.com/link/search/" + encodeURIComponent(address);
    window.open(url, '_blank');
  };

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
                    style={{ backgroundImage: "url(img/about/6.jpg)" }}
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
                  <h3>Join the Festivities!</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  style={{ padding: "10px" }}
                >
                  <p><strong>웅</strong>장한 &nbsp;&nbsp;사랑의 &nbsp; 축제가 &nbsp;시작돼</p>
                  <p><strong>제</strong>일 소중한 존재로 &nbsp;서로가 만나</p>
                  <p><strong>은</strong>은한 미소로 &nbsp;물들어가는 &nbsp;순간</p>
                  <p><strong>경</strong>건한 &nbsp;약속, &nbsp;&nbsp;우리의 &nbsp;결혼식 날</p>
                  <br />
                  <p>웅제와 은경이가 결혼합니다!</p>
                  <p>늘 곁에서 아껴주셨던 고마운 분들을 모십니다.</p>
                  <p>당신이 없으면 시작을 못해요!😍</p>
                  <hr style={{ width: '20%', margin: '20px 5px' }} />
                  <p><strong>한준식＊김태경</strong> 의 아들 <strong>한웅제</strong></p>
                  <p><strong>권경택＊김은화</strong> 의 &nbsp;&nbsp;&nbsp;&nbsp;딸 <strong>권은경</strong></p>
                  <br />
                  <p>2024년 6월 30일 일요일 오전 11시</p>
                  <p>삼성전자 서초사옥 5층 (강남역 8번 출구앞)</p>
                  <p>서울 서초구 서초대로74길 11 삼성전자빌딩</p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="#" onClick={(e) => { e.preventDefault(); handleKakaoMapOpen(); }}>
                    오시는길
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
