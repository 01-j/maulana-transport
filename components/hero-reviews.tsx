"use client";

import { ArrowLeft, ArrowRight, Star } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const reviews = [
  { name: "Dwika Yulia", text: "pelayanan ramah, fast respon, ga nyesel deh pokonya, langganan terus nih, ada banyak unit juga top dehh👍👍.." },
  { name: "dian purnomo adi", text: "Respon cepat. Armada sehat, bersih. Driver sopan. Mantab.. Recommended." },
  { name: "abadi kinasih", text: "Liburan menhyenangkan sewa mobil disini, respon cepat mobil bersih" },
  { name: "Adinda Tabyta Anggraini", text: "Sewa mobil dengan service yang memuaskan, respon cepat, owner ramah" },
  { name: "Aprilia retnowati", text: "Pelayanan ramah... chat ny balasny kilat... pokokny klo yg mau sewa mboil d jogja sangat rekomen bgt dah😍..." },
  { name: "Desi Oktaviani", text: "Pelayanan bagus dan mobilnya juga bgus recommend banget buat sewa disini sih" },
  { name: "Dina Nur Halimah", text: "Pelayanan sangat bagus, owner ramah kebersihan unit dan driver terjaga😊..." },
];

export function HeroReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  function goTo(index: number) {
    setActiveIndex((index + reviews.length) % reviews.length);
  }

  function next() {
    goTo(activeIndex + 1);
  }

  function previous() {
    goTo(activeIndex - 1);
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    touchStartX.current = event.clientX;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const distance = event.clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 42) return;
    if (distance < 0) next();
    else previous();
  }

  const review = reviews[activeIndex];

  return (
    <div
      className="hero-reviews"
      role="region"
      aria-roledescription="carousel"
      aria-label="Ulasan pelanggan"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="hero-review-topline">
        <span>Ulasan pelanggan</span>
        <span>{String(activeIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
      </div>
      <div className="hero-review-content" aria-live="polite">
        <strong>{review.name}</strong>
        <span className="hero-review-rating" aria-label="5 dari 5 bintang">
          <span>5 star</span>
          <span aria-hidden="true"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></span>
        </span>
        <p>“{review.text}”</p>
      </div>
      <div className="hero-review-controls">
        <div className="hero-review-dots" aria-label="Pilih ulasan">
          {reviews.map((item, index) => (
            <button
              type="button"
              key={item.name}
              className={index === activeIndex ? "is-active" : ""}
              aria-label={`Tampilkan ulasan dari ${item.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <div className="hero-review-arrows">
          <button type="button" aria-label="Ulasan sebelumnya" onClick={previous}><ArrowLeft size={15} weight="bold" /></button>
          <button type="button" aria-label="Ulasan berikutnya" onClick={next}><ArrowRight size={15} weight="bold" /></button>
        </div>
      </div>
    </div>
  );
}
