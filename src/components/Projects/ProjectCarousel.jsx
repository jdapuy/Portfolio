import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Projects.module.css';

export const ProjectCarousel = ({ images, title, icon }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Si no hay imágenes, mostrar placeholder
  if (!images || images.length === 0) {
    return (
      <div className={styles.projectImagePlaceholder}>
        <div className={styles.placeholderIcon}>
          {icon}
        </div>
        <p className={styles.placeholderText}>Add your project images here</p>
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      {/* Imagen actual */}
      <div className={styles.carouselImageWrapper}>
        <img 
          src={images[currentIndex]} 
          alt={`${title} - ${currentIndex + 1}`}
          className={styles.carouselImage}
        />
      </div>

      {/* Controles solo si hay más de una imagen */}
      {images.length > 1 && (
        <>
          {/* Botones de navegación */}
          <button 
            className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <button 
            className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
            onClick={nextSlide}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>

          {/* Indicadores */}
          <div className={styles.carouselIndicators}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.carouselDot} ${index === currentIndex ? styles.carouselDotActive : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className={styles.carouselCounter}>
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

