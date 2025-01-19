import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const GoogleSheetsSearch = () => {
  const [data, setData] = useState([]); // Datos cargados del CSV
  const [query, setQuery] = useState(""); // Texto de búsqueda
  const [filteredData, setFilteredData] = useState([]); // Resultados filtrados

  const googleSheetsURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQrNN8zrJMHYinv86NOUsXNbns4rT86lfjU4ugQgMchJnVtA79n14vb86oQvnVGlx6nvmBJNvkK2tK4/pub?output=csv";

  // Cargar los datos del CSV al montar el componente
  useEffect(() => {
    Papa.parse(googleSheetsURL, {
      download: true,
      header: true, // Convierte automáticamente a formato JSON usando la primera fila como claves
      complete: (result) => {
        setData(result.data); // Guardar los datos en el estado
        setFilteredData(result.data); // Inicialmente, todos los datos son visibles
      },
      error: (error) => console.error("Error al cargar el CSV:", error),
    });
  }, []);

  // Filtrar datos en base al texto de búsqueda
  useEffect(() => {
    const results = data.filter((row) =>
      Object.values(row)
        .join(" ") // Unir todas las columnas del row en un string
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setFilteredData(results);
  }, [query, data]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Buscador de Google Sheets</h1>
      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {/* Mostrar los resultados */}
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {/* Mostrar encabezados dinámicamente */}
            {data.length > 0 &&
              Object.keys(data[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSheetsSearch;
