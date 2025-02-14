import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const RestaurantBoardPage = () => {
  const { t } = useTranslation(); // Usamos i18next para la traducción
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    isInApp: false, // Estado para el checkbox
  });
  const [imagePreview, setImagePreview] = useState(null); // Para almacenar la URL de la imagen

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el cambio en el campo de imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validar que el archivo sea una imagen
      if (file.type.startsWith("image/")) {
        // Crear una URL de la imagen para la previsualización
        setImagePreview(URL.createObjectURL(file));
        setFormData({ ...formData, image: file });
      } else {
        alert(t("image_error"));
      }
    }
  };

  // Función para manejar el cambio del checkbox
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, isInApp: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario, por ejemplo, subir la imagen
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">
        {t("pages.dashboard.restaurant.restaurant_form_title")}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            {t("pages.dashboard.restaurant.restaurant_name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
            required
            aria-describedby="nameHelp"
          />
          <div id="nameHelp" className="form-text">
            {t("pages.dashboard.restaurant.name_help")}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            {t("pages.dashboard.restaurant.description")}
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleInputChange}
            rows="3"
            required
            aria-describedby="descriptionHelp"
          />
          <div id="descriptionHelp" className="form-text">
            {t("pages.dashboard.restaurant.description_help")}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            {t("pages.dashboard.restaurant.image")}
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
            required
            aria-describedby="imageHelp"
          />
          <div id="imageHelp" className="form-text">
            {t("pages.dashboard.restaurant.image_help")}
          </div>

          {/* Previsualización de la imagen */}
          {imagePreview && (
            <div className="mt-3">
              <img
                src={imagePreview}
                alt="Image Preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
                className="img-thumbnail"
              />
            </div>
          )}
        </div>

        {/* Checkbox para preguntar si ya aparece en la app */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            id="isInApp"
            name="isInApp"
            className="form-check-input"
            checked={formData.isInApp}
            onChange={handleCheckboxChange}
            aria-describedby="isInAppHelp"
          />
          <label className="form-check-label" htmlFor="isInApp">
            {t("pages.dashboard.restaurant.is_in_app")}
          </label>
          <div id="isInAppHelp" className="form-text">
            {t("pages.dashboard.restaurant.is_in_app_help")}
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          {t("pages.dashboard.restaurant.submit")}
        </button>
      </form>
    </div>
  );
};

export default RestaurantBoardPage;
