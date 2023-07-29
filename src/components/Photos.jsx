import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const tabList = ["Gallery", "Feed"];

const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/photos/22.jpg",
        title: "sample Design",
        meta: "Design",
        portfolioLink:
          "https://dribbble.com/shots/16529282-sample-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/photos/7.jpg",
        title: " Sweet Cherry",
        meta: "Photography",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/photos/1.jpg",
        title: " My Story",
        meta: "Design",
        portfolioLink: "https://www.instagram.com/",
      },
      {
        img: "/img/photos/2.jpg",
        title: "Design Trend",
        meta: "Branding",
        portfolioLink:
          "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "/img/photos/14.jpg",
        title: "Soft Cream",
        meta: "Photography",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
      {
        img: "/img/photos/22.jpg",
        title: "sample Design",
        meta: "Design",
        portfolioLink:
          "https://dribbble.com/shots/16529282-sample-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/photos/7.jpg",
        title: " Sweet Cherry",
        meta: "Photography",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/photos/3.jpg",
        title: "Behance Shoot",
        meta: "Branding",
        portfolioLink: "https://www.behance.net/ib-themes",
      },
    ],
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
                    {tabListContent.map((tabContent, i) => (
                      <TabPanel key={i}>
                        <ul className="gallery_zoom">
                          {tabContent.porftoliItems.map((val, i) => (
                            <li
                              key={i}
                              data-aos="fade-right"
                              data-aos-duration="1200"
                              data-aos-delay={val.delayAnimation}
                            >
                              <div className="inner">
                                <div className="entry woongshmello_photos_animation_wrap">
                                  <Item
                                    original={val.img}
                                    thumbnail={val.img}
                                    width={1000}
                                    height={1000}
                                  >
                                    {({ ref, open }) => (
                                      <img
                                        src={val.img}
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
                                      href={val.portfolioLink}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      {val.title}
                                    </a>
                                  </h3>
                                  <span>{val.meta}</span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPanel>
                    ))}
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
