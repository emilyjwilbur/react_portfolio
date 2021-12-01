import React from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import animations from '../assets/data/animation';
import AnimationItem from "./AnimationItem";
import styled from "styled-components";
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation])

const AnimationSectionStyle = styled.div `
padding:10rem 0;
.animations_allItems{
    display:flex;
    gap: 3rem;
    margin-top:5rem;
}
.swiper-container {
    padding-top: 8rem;
    max-width: 100%;
}
.swiper-button-prev,
.swiper-button-next {
position:absolute;
height: 50px;
width: 50px;
background-color: var(--deep-dark);
z-index:10;
right:68px;
left:auto;
top:0;
transform: translateY(50%);
color: var(--gray-1);
border-radius: 8px;
}
.swiper-button-next{
    right:0;
}
.swiper-button-prev::after,
.swiper-button-next::after {
    font-size: 2rem;
}

@media only screen and (max-width: 768px) {
    .animations_allItems {
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
        margin-top: 7rem;
        gap: 5rem;
        .animationItem_img {
            width: 100%;
            height: 100%;
        }
    }
}

`

export default function AnimationSection () {
    return (
        <AnimationSectionStyle>
            <div className="container">
                <SectionTitle heading="CSS Animation" subheading="For fun, I've been working on some"></SectionTitle>
                <div className="animations_allItems">
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={
                        {
                            // when window width is >= 640px
                        648: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView:3,
                        }
                    }
                    }
                    >
                        {animations.map((animation, index) => {
                            if(index >= 9) return;
                            return(
                                <SwiperSlide key={animation.id}>
                                    <AnimationItem 
                                        title={animation.name}
                                        img={animation.img}
                                        desc={animation.desc}
                                        link={animation.link}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </AnimationSectionStyle>
    )
}