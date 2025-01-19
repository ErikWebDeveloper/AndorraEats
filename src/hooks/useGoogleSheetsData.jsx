import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const useGoogleSheetsSearch = () => {
  const [data, setData] = useState([]); // Datos cargados del CSV
  const [loading, setLoading] = useState(true);

  const googleSheetsURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQrNN8zrJMHYinv86NOUsXNbns4rT86lfjU4ugQgMchJnVtA79n14vb86oQvnVGlx6nvmBJNvkK2tK4/pub?output=csv";

  // Cargar los datos del CSV al montar el componente
  useEffect(() => {
    setLoading(true);
    Papa.parse(googleSheetsURL, {
      download: true,
      header: true, // Convierte automáticamente a formato JSON usando la primera fila como claves
      complete: (result) => {
        // Transformar los datos después de cargar el CSV
        const transformedData = result.data.map((item) => ({
          ...item,
          features: JSON.parse(item.features || "[]"), // Convierte features a un array
          type: JSON.parse(item.type || "[]"), // Convierte type a un array
          price: Number(item.price) || 0, // Convierte price a número
          rating: Number(item.rating.replace(",", ".") || 0), // Convierte rating a número, y maneja las comas
          id: Number(item.id) || 0, // Convierte id a número
          location: JSON.parse(item.location || "{}"), // Convierte location a objeto
        }));

        // Actualizar el estado con los datos transformados
        setData(transformedData);
      },
      error: (error) => console.error("Error al cargar el CSV:", error),
    });
    setLoading(false);
  }, []);

  return { data, loading };
};

export default useGoogleSheetsSearch;
