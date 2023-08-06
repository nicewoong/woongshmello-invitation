import React from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Gallery as GridGallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useEffect } from "react";



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

const initialImages2 = [
  {
    src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
    caption: "8H (gratisography.com)",
    thumbnailCaption: "8H",
    original: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
  },
  {
    src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
    caption: "286H (gratisography.com)",
    thumbnailCaption: "286H",
    original: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
  },
  {
    src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    caption: "315H (gratisography.com)",
    thumbnailCaption: "315H",
    original: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
  },
  {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    caption: "201H (gratisography.com)",
    thumbnailCaption: "201H",
    original: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
  },
  {
    src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    caption: "Big Ben (Tom Eversley - isorepublic.com)",
    thumbnailCaption: "Big Ben",
    original: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
  },
  {
    src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    caption: (
      <span style={{ color: "darkred" }}>
        Red Zone - <i>Paris</i>
      </span>
    ),
    thumbnailCaption: (
      <span style={{ color: "darkred" }}>
        Red Zone - <i>Paris</i>
      </span>
    ),
    original: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
  },
  {
    src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    caption: "Wood Glass (Tom Eversley - isorepublic.com)",
    thumbnailCaption: "Wood Glass",
    original: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
  },
  {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    thumbnailCaption: "Flower Interior Macro",
    original: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
  },
];

// 이제 initialImages2 배열에 original 속성이 추가되었습니다.



const initialImages = [];

for (let i = 1; i <= 12; i++) {
  initialImages.push(
    {
      src: `/img/photos/${i}.jpg`,
      original: `/img/photos/${i}.jpg`,
      caption: `Image ${i}`,
      width: 0, // 초기 값은 0으로 설정
      height: 0, // 초기 값은 0으로 설정
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
    });
}

const MyPhotos = () => {
  const [images, setImages] = useState(initialImages);

  const [lightBoxIndex, setLightBoxIndex] = useState(-1);

  const currentImage = images[lightBoxIndex];
  const nextIndex = (lightBoxIndex + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (lightBoxIndex + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setLightBoxIndex(index);
  const handleClose = () => setLightBoxIndex(-1);
  const handleMovePrev = () => setLightBoxIndex(prevIndex);
  const handleMoveNext = () => setLightBoxIndex(nextIndex);

  const [loadedImages, setLoadedImages] = useState(0);
  // 이미지의 크기를 업데이트
  const updateImageDimensions = (index, width, height) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = { ...updatedImages[index], width, height };
      return updatedImages;
    });
  };

  const handleImageLoad = (index) => (event) => {
    const imgWidth = event.target.width;
    const imgHeight = event.target.height;
    updateImageDimensions(index, imgWidth, imgHeight);

    setLoadedImages((prevLoadedImages) => prevLoadedImages + 1);
  };

  useEffect(() => {

    // 모든 이미지가 로딩 완료된 후에 실행
    if (loadedImages === images.length) {
      console.log("모든 이미지 로딩 완료!");
    }
  }, [images, loadedImages]);

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
                  <TabPanel key={0}>
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1200"
                    >
                      {images.map((image, index) => (
                        <img
                          key={image.src}
                          src={image.src}
                          alt={image.caption}
                          style={{ display: "none" }} // 화면에 보이지 않게 설정
                          onLoad={handleImageLoad(index)} // 이미지 로딩 완료시 handleImageLoad 호출
                        />
                      ))}
                      <GridGallery
                        images={images}
                        onClick={handleClick}
                        enableImageSelection={false}
                      />
                      {currentImage && (
                        <Lightbox
                          mainSrc={currentImage.original}
                          imageTitle={currentImage.caption}
                          mainSrcThumbnail={currentImage.src}
                          nextSrc={nextImage.original}
                          nextSrcThumbnail={nextImage.src}
                          prevSrc={prevImage.original}
                          prevSrcThumbnail={prevImage.src}
                          onCloseRequest={handleClose}
                          onMovePrevRequest={handleMovePrev}
                          onMoveNextRequest={handleMoveNext}
                          disableScroll // 모바일 뒤로 가기 버튼으로 라이트박스 닫기 방지
                        />
                      )}
                    </div>
                  </TabPanel>
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



export default MyPhotos;
