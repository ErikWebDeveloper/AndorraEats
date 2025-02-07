const Section = ({
  children,
  ariaLabel = "Sección",
  ariaLabelledby = "Sección",
  id = "Sección",
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`${className}`}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  );
};

export default Section;
