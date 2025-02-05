const Stars = ({ rating }) => {
  // Convertir el rating a número y asegurarse de que está entre 0 y 5
  const parsedRating = parseFloat(rating);

  // Si rating es inválido, mostrar mensaje en lugar de estrellas
  if (isNaN(parsedRating) || rating === "" || rating === null) {
    return (
      <p style={{ color: "gray", fontStyle: "italic", fontSize: "18px" }}>
        ☆☆☆ No hay información disponible
      </p>
    );
  }

  const validRating = Math.min(5, Math.max(0, parsedRating));

  // Generar las estrellas llenas, medias y vacías
  const fullStars = Math.floor(validRating);
  const halfStar = validRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <p style={{ color: "orange", fontSize: "18px" }}>
      {"★".repeat(fullStars)}
      {halfStar ? "✩" : ""}
      {"☆".repeat(emptyStars)} ({validRating.toFixed(1)})
    </p>
  );
};

export default Stars;
