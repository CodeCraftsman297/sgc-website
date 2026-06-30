import { useState, useEffect } from "react";
import galleryData from "../data/galleryData";
import "./Gallery.css";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = [
    "All",
    "Classroom",
    "Celebrations",
    "SGCPL",
    "Picnic",
  ];

  const filteredGallery =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === selectedCategory
        );

  const selectedImage =
    selectedImageIndex !== null
      ? filteredGallery[selectedImageIndex]
      : null;

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === filteredGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredGallery.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;

      if (e.key === "ArrowRight") nextImage();

      if (e.key === "ArrowLeft") prevImage();

      if (e.key === "Escape") setSelectedImageIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow =
      selectedImageIndex !== null ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedImageIndex, filteredGallery]);

  return (
    <section className="gallery" id="gallery">

      <div className="gallery-header">

        <span className="section-tag">
          OUR GALLERY
        </span>

        <h2>Moments Beyond the Classroom</h2>

        <p>
          A glimpse into our classrooms, celebrations,
          SGC Premier League, picnics and memorable
          moments at
          <span> Shree Ganesh Classes.</span>
        </p>

      </div>

      <div
        className="gallery-filters"
        role="group"
        aria-label="Gallery Categories"
      >

        {categories.map((category) => (

          <button
            key={category}
            className={
              selectedCategory === category
                ? "active"
                : ""
            }
            onClick={() => {
              setSelectedCategory(category);
              setSelectedImageIndex(null);
            }}
          >
            {category}
          </button>

        ))}

      </div>

      <div className="gallery-grid">

        {filteredGallery.map((item, index) => (

          <div
            key={item.id}
            className="gallery-card"
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
            onClick={() =>
              setSelectedImageIndex(index)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedImageIndex(index);
              }
            }}
          >

            <img
              src={item.image}
              alt={`${item.title} - ${item.category}`}
              loading="lazy"
              decoding="async"
            />

            <div
              className="overlay"
              aria-hidden="true"
            >

              <div className="overlay-content">

                <h3>{item.title}</h3>

                <p>{item.category}</p>

                <span>🔍 View Photo</span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {selectedImage && (

        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() =>
            setSelectedImageIndex(null)
          }
        >

          <div
            className="lightbox-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="image-counter">
              {selectedImageIndex + 1}
              {" / "}
              {filteredGallery.length}
            </div>

            <button
              className="close-btn"
              aria-label="Close Image"
              onClick={() =>
                setSelectedImageIndex(null)
              }
            >
              ✕
            </button>

            <button
              className="nav-btn left"
              aria-label="Previous Image"
              onClick={prevImage}
            >
              ❮
            </button>

            <button
              className="nav-btn right"
              aria-label="Next Image"
              onClick={nextImage}
            >
              ❯
            </button>

            <img
              src={selectedImage.image}
              alt={`${selectedImage.title} - ${selectedImage.category}`}
              decoding="async"
            />

            <div className="lightbox-info">

              <h3>{selectedImage.title}</h3>

              <p>{selectedImage.category}</p>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Gallery;