
# Andorra Eats - Frontend 🥗🍴

¡Bienvenido al frontend de **Andorra Eats**! 🌟 Una app para descubrir los mejores restaurantes en Andorra 🇦🇩. Explora por tipo de comida 🍕, país 🌍 y mucho más, con una interfaz fácil de usar y un diseño atractivo.

![Logo](/public/img/logo/BannerSocial.png)

## Índice 📑

- [Andorra Eats - Frontend 🥗🍴](#andorra-eats---frontend-)
  - [Índice 📑](#índice-)
  - [Tecnologías utilizadas 💻](#tecnologías-utilizadas-)
  - [Estructura del proyecto 📁](#estructura-del-proyecto-)
  - [Instalación y ejecución ⚙️](#instalación-y-ejecución-️)
  - [Archivos importantes 🗂️](#archivos-importantes-️)
  - [Contribución 🤝](#contribución-)
  - [Licencia 📜](#licencia-)
    - [¡Gracias por ser parte de la comunidad de Andorra Eats! 🍴🎉](#gracias-por-ser-parte-de-la-comunidad-de-andorra-eats-)

## Tecnologías utilizadas 💻

Este proyecto está construido utilizando las siguientes tecnologías:

- **React** ⚛️: Librería de JavaScript para construir interfaces de usuario.
- **CSS** 🎨: Estilos personalizados.
- **React Context** 🧑‍💻: Para el manejo de estado global.
- **Custom Hooks** 🎣: Usados para gestionar breakpoints de Bootstrap y obtener datos desde Google Sheets.
- **React Router** 🛤️: Para la navegación entre páginas.
- **Swiper** 🚴: Para los carruseles de imágenes.
- **FontAwesome** 💎: Para los íconos.

## Estructura del proyecto 📁

La estructura de directorios de este proyecto es la siguiente:

```
public/
├── api/                # Datos estáticos y filtrados de restaurantes y países
├── assets/             # Imágenes y recursos estáticos
├── css/                # Estilos globales
├── fonts/              # Fuentes personalizadas
├── icons/              # Iconos para favicon y manifest
├── img/                # Imágenes de países, tipos de comida y logotipos
├── manifest.json       # Configuración para Progressive Web App (PWA)
├── robots.txt          # Configuración para motores de búsqueda
└── sitemap.xml         # Sitemap para SEO

src/
├── components/         # Componentes reutilizables (Carrusel, Footer, Restaurante, etc.)
├── context/            # Contextos para el manejo de datos globales
├── hooks/              # Custom hooks
├── main.jsx            # Punto de entrada principal
└── pages/              # Páginas de la aplicación (Explorar, Restaurantes, Resultados, etc.)
```

## Instalación y ejecución ⚙️

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu_usuario/andorra-eats-frontend.git
   ```

2. **Instala las dependencias**:
   Asegúrate de tener [Node.js](https://nodejs.org) instalado en tu máquina. Luego, ejecuta:
   ```bash
   cd andorra-eats-frontend
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**:
   Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para arrancar el servidor de desarrollo:
   ```bash
   npm start
   ```
   El proyecto estará accesible en [http://localhost:3000](http://localhost:3000) 🌐.

## Archivos importantes 🗂️

- **public/api**: Contiene los archivos JSON con la información de los restaurantes, países, tipos de comida y otros datos estáticos 📊.
- **public/assets**: Contiene imágenes de productos, banners y más recursos estáticos 🖼️.
- **src/components**: Los componentes principales como el carrusel, los restaurantes recomendados y más 🧩.
- **src/pages**: Las páginas que conforman la aplicación, como la página de inicio, resultados de búsqueda y detalles de un restaurante 📄.
- **src/hooks**: Custom hooks que facilitan el manejo de datos y la lógica 🎯.

## Contribución 🤝

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor abre un **pull request** o plantea tus ideas a través de un **issue**.

1. Haz un fork de este repositorio 🍴.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`) 🧑‍💻.
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva característica'`) 💬.
4. Envía un pull request para revisión 📨.

## Licencia 📜

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

---

### ¡Gracias por ser parte de la comunidad de Andorra Eats! 🍴🎉
