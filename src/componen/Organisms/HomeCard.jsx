"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required components
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Container from "@mui/material/Container";
import Image from "next/image";
import cardData from "../../data/cardData";
import Text from "../Atoms/Text";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function Home() {
  const value = 3.5;
  return (
    <Container sx={{ mt: 10, mb: 20 }}>
      <Text
        text={
          <div className="pairenttextclients">
            <span className="textListen">Don’t Just Listen to Us</span>

            <span className="textclients">what our clients are saying</span>
          </div>
        }
        className="textListen"
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cardData.map((e, index) => (
          <SwiperSlide key={index}>
            <Card className="card">
              <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
                <Image
                  src={e.photo}
                  alt="image"
                  width={40}
                  height={40}
                  style={{
                    borderRadius: "50%",
                  }}
                />
                <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
                  {e.description}
                </Typography>{" "}
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
