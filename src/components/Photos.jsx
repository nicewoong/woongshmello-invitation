import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const tabList = ["Gallery", "Feed"];

const tabListContent = [
  {
    img: "/img/photos/1.jpg",
    title: " My Story",
    meta: "Design",
    portfolioLink: "/",
  },
  {
    img: "/img/photos/2.jpg",
    title: "Design Trend",
    meta: "Branding",
    portfolioLink: "/",
  },
  {
    img: "/img/photos/3.jpg",
    title: "Soft Cream",
    meta: "Photography",
    portfolioLink: "/",
  },
  {
    img: "/img/photos/4.jpg",
    title: "sample Design",
    meta: "Design",
    portfolioLink: "/",
  },
  {
    img: "/img/photos/5.jpg",
    title: " Sweet Cherry",
    meta: "Photography",
    portfolioLink: "/",
  },
  {
    img: "/img/photos/6.jpg",
    title: "Behance Shoot",
    meta: "Branding",
    portfolioLink: "/",
  }, {
    img: "/img/photos/7.jpg",
    title: " My Story",
    meta: "Design",
    portfolioLink: "/",
  },
  {
    img: "/img/photos/8.jpg",
    title: "Design Trend",
    meta: "Branding",
    portfolioLink: "/",
  },
  {
    img: "/img/photos/9.jpg",
    title: "Soft Cream",
    meta: "Photography",
    portfolioLink: "/",
  },
  {
    img: "/img/photos/10.jpg",
    title: "sample Design",
    meta: "Design",
    portfolioLink: "/",
  },
  {
    img: "/img/photos/11.jpg",
    title: " Sweet Cherry",
    meta: "Photography",
    portfolioLink: "/",
  },
  {
    img: "/img/photos/12.jpg",
    title: "Behance Shoot",
    meta: "Branding",
    portfolioLink: "/",
  },
];

const Photos = () => {
  return (
    <div className="woongshmello_section" id="photos" >
      <div className="woongshmello_photos">
        <div className="container">
          <div className="positon-relative">
            <div className="woongshmello_title">
              <div className="title_flex">
                <div className="left">
                  <span>Photos</span>
                  <h3>Brilliant Moments</h3>
                </div>
              </div>
            </div>
            {/* End title */}

            <div className="photo_filter" >
              <Tabs>
                <TabList>
                  {tabList.map((val, i) => (
                    <Tab key={i}>{val}</Tab>
                  ))}
                </TabList>
                {/* End tablist */}

                <div className="photo_list has-effect">
                  <Gallery>
                    {/* <TabPanel key={0}>

                    </TabPanel> */}
                    <TabPanel key={1}>
                      <ul className="gallery_zoom">
                        {tabListContent.map((item, i) => (
                          <li
                            key={i}
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay={item.delayAnimation}
                          >
                            <div className="inner">
                              <div className="entry woongshmello_photos_animation_wrap">
                                <Item
                                  original={item.img}
                                  thumbnail={item.img} // 추후 썸네일폴더 따로 만들기 
                                  width={'1000px'}
                                  style={{ objectFit: "contain" }}
                                >
                                  {({ ref, open }) => (
                                    <img
                                      src={item.img}
                                      alt="portfolio"
                                      role="button"
                                      ref={ref}
                                      onClick={open}
                                    />
                                  )}
                                </Item>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href={item.portfolioLink}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    {item.title}
                                  </a>
                                </h3>
                                <span>{item.meta}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </TabPanel>
                  </Gallery>
                  {/* End tabpanel */}
                </div>
                {/* End list wrapper */}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
