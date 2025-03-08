const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    crossedPrice: 319,
    stars: 4,
    reviews: 250,
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg',
    url: 'https://www.pccomponentes.com/hp-essentials-255-g8-amd',
    discount: '9%',
    promo: 'Regalo: Mochila HP',
    shipping: 'Envío gratis. Recíbelo el lunes, 11 de marzo'
  },
  {
    name: 'Lenovo IdeaPad Slim 3 Gen 8 15IRH8 Intel Core i7-13620H/16GB/1TB SSD/15.6',
    price: 689,
    crossedPrice: 749,
    stars: 4,
    reviews: 84,
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1084/10847192/1390-lenovo-ideapad-slim-3-gen-8-15irh8-intel-core-i7-13620h-16gb-1tb-ssd-156.jpg',
    url: 'https://www.pccomponentes.com/lenovo-ideapad-slim-3-gen-8',
    discount: '8%',
    promo: 'Financiación 0%',
    shipping: 'Envío gratis. Recíbelo el martes, 12 de marzo'
  },
  {
    name: 'PcCom Ready Intel Core i5-12400F / 32GB / 1TB SSD / RTX4060',
    price: 879,
    crossedPrice: 999,
    stars: 4,
    reviews: 84,
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1086/10863323/1312-pccom-ready-intel-core-i5-12400f-32gb-1tb-ssd-rtx4060.jpg',
    url: 'https://www.pccomponentes.com/pccom-ready-i5-12400f-rtx4060',
    discount: '12%',
    promo: 'Cupón 20€ DTO',
    shipping: 'Envío gratis. Recíbelo el miércoles, 13 de marzo'
  },
  {
    name: 'Samsung Galaxy S24 Ultra 12/256GB Grey Titanium Libre',
    price: 899.01,
    crossedPrice: 999,
    stars: 4,
    reviews: 84,
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1081/10814355/1821-samsung-galaxy-s24-ultra-12-256gb-gris-titanium-libre.jpg',
    url: 'https://www.pccomponentes.com/samsung-galaxy-s24-ultra',
    discount: '10%',
    promo: 'Galaxy Buds de regalo',
    shipping: 'Envío gratis. Recíbelo el jueves, 14 de marzo'
  },
  {
    name: 'MSI GeForce RTX 4070 VENTUS 2X E OC 12GB GDDR6X DLSS3',
    price: 619.05,
    crossedPrice: 699,
    stars: 4,
    reviews: 84,
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1078/10780392/1169-msi-geforce-rtx-4070-ventus-2x-e-oc-12gb-gddr6-dlss3.jpg',
    url: 'https://www.pccomponentes.com/msi-geforce-rtx-4070-ventus',
    discount: '11%',
    promo: 'Cupón descuento 10%',
    shipping: 'Envío gratis. Recíbelo el lunes, 11 de marzo'
  },
  {
    name: 'AMD Ryzen 5 7600X 4.7 GHz Box sin Ventilador',
    price: 229.05,
    crossedPrice: 259,
    stars: 4,
    reviews: 84,
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1057/10570001/1881-amd-ryzen-5-7600x-47-ghz-box-sin-ventilador-comprar.jpg',
    url: 'https://www.pccomponentes.com/amd-ryzen-5-7600x',
    discount: '12%',
    promo: null,
    shipping: 'Envío gratis. Recíbelo el martes, 12 de marzo'
  },
  {
    name: 'Corsair K70 CORE Teclado Mecánico Gaming RGB Switch MLX Red Negro',
    price: 79.99,
    crossedPrice: 99.99,
    stars: 4,
    reviews: 84,
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1085/10857681/1312-corsair-k70-core-teclado-mecanico-gaming-rgb-switch-mlx-red-negro.jpg',
    url: 'https://www.pccomponentes.com/corsair-k70-core-teclado',
    discount: '20%',
    promo: 'Regalo: alfombrilla gaming',
    shipping: 'Envío gratis. Recíbelo el miércoles, 13 de marzo'
  },
  {
    name: 'ASUS TUF Gaming A15 FA506NCR-HN006 AMD Ryzen 7 7435HS/16GB/512GB SSD/RTX 3050/15.6',
    price: 669,
    crossedPrice: 749,
    stars: 4,
    reviews: 84,
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1084/10848624/1163-asus-tuf-gaming-a15-fa506ncr-hn006-amd-ryzen-7-7435hs-16gb-512gb-ssd-rtx-3050-156.jpg',
    url: 'https://www.pccomponentes.com/asus-tuf-gaming-a15',
    discount: '11%',
    promo: 'Financiación sin intereses',
    shipping: 'Envío gratis. Recíbelo el jueves, 14 de marzo'
  },
  {
    name: 'Gigabyte AMD Radeon RX 7800 XT GAMING OC 16GB GDDR6',
    price: 542.9,
    crossedPrice: 599.99,
    stars: 4,
    reviews: 84,
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1077/10771881/1517-gigabyte-amd-radeon-rx-7800-xt-gaming-oc-16gb-gddr6.jpg',
    url: 'https://www.pccomponentes.com/gigabyte-amd-radeon-rx-7800-xt',
    discount: '9%',
    promo: 'Cupón descuento 15€',
    shipping: 'Envío gratis. Recíbelo el lunes, 11 de marzo'
  },
  {
    name: 'Tempest Glare RGB Silla Gaming Gris/Negra Tela Transpirable',
    price: 152.9,
    crossedPrice: 179.99,
    stars: 4,
    reviews: 233,
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1079/10798099/1937-tempest-glare-rgb-silla-gaming-gris-negra-tela-transpirable-4ace2623-099e-4fb6-a76f-7bb0532e9c2f.jpg',
    url: 'https://www.pccomponentes.com/tempest-glare-rgb-silla-gaming',
    discount: '15%',
    promo: 'Cupón descuento 15€',
    shipping: 'Envío gratis. Recíbelo el martes, 12 de marzo'
  }
]

const navigation = `
      <nav>
        <div class="container nav">
          <div class="logo">
            <img
              src="https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg"
              alt="PCComponentes Logo"
            />
          </div>
          <div class="menu_toggle" id="menu_toggle">&#9776;</div>
          <ul class="menu" id="menu">
            <li><a href="#">Mi cuenta</a></li>
            <li><a href="#">Mi cesta</a></li>
          </ul>
        </div>
      </nav>
`

const filter = `
        <aside class="sidebar">
            <form class="filter">
                <header class="filter__header">
                    <h2 class="filter__title">Filter Products</h2>
                </header>
                
                <div class="filter__group">
                    <div class="filter__control">
                        <input type="text" class="filter__search" placeholder="Search products...">
                    </div>
                </div>
                
                <div class="filter__group">
                    <h3 class="filter__group-title">Categories</h3>
                    <div class="filter__control">
                        <label class="filter__checkbox-label">
                            <input type="checkbox" class="filter__checkbox" name="category" value="smartphones">
                            Smartphones
                        </label>
                    </div>
                    <div class="filter__control">
                        <label class="filter__checkbox-label">
                            <input type="checkbox" class="filter__checkbox" name="category" value="laptops">
                            Laptops
                        </label>
                    </div>
                    <div class="filter__control">
                        <label class="filter__checkbox-label">
                            <input type="checkbox" class="filter__checkbox" name="category" value="tablets">
                            Tablets
                        </label>
                    </div>
                    <div class="filter__control">
                        <label class="filter__checkbox-label">
                            <input type="checkbox" class="filter__checkbox" name="category" value="accessories">
                            Accessories
                        </label>
                    </div>
                </div>
                
                <div class="filter__group">
                    <h3 class="filter__group-title">Price Range</h3>
                    <div class="filter__control">
                        <div class="filter__price-inputs">
                            <input type="number" class="filter__price-input" placeholder="Min" min="0">
                            <span class="filter__separator">-</span>
                            <input type="number" class="filter__price-input" placeholder="Max" min="0">
                        </div>
                        <input type="range" class="filter__slider" min="0" max="2000" step="50">
                    </div>
                </div>
                
                <div class="filter__group">
                    <h3 class="filter__group-title">Brand</h3>
                    <div class="filter__control">
                        <label class="filter__checkbox-label">
                            <input type="checkbox" class="filter__checkbox" name="brand" value="apple">
                            Apple
                        </label>
                    </div>
                    <div class="filter__control">
                        <label class="filter__checkbox-label">
                            <input type="checkbox" class="filter__checkbox" name="brand" value="samsung">
                            Samsung
                        </label>
                    </div>
                    <div class="filter__control">
                        <label class="filter__checkbox-label">
                            <input type="checkbox" class="filter__checkbox" name="brand" value="dell">
                            Dell
                        </label>
                    </div>
                    <div class="filter__control">
                        <label class="filter__checkbox-label">
                            <input type="checkbox" class="filter__checkbox" name="brand" value="microsoft">
                            Microsoft
                        </label>
                    </div>
                </div>
                
                <div class="filter__actions">
                    <button type="reset" class="filter__button filter__button--secondary">Reset</button>
                    <button type="submit" class="filter__button filter__button--primary">Apply</button>
                </div>
            </form>
        </aside>
`

const footer = `
    <footer class="footer container">
      <div class="footer-container">
        <div class="footer-column">
          <h4>Sobre Nosotros</h4>
          <p>
            En 2005 PcComponentes nace con un capital social de 3000€. Nuestra
            historia da comienzo en una tienda física de 70m2, que era almacén,
            tienda y taller de ensamblaje y reparación.
          </p>
        </div>
        <div class="footer-column">
          <h4>Categorías</h4>
          <ul>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">PC de Escritorio</a></li>
            <li><a href="#">Componentes</a></li>
            <li><a href="#">Periféricos</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Atención al Cliente</h4>
          <ul>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Política de Devoluciones</a></li>
            <li><a href="#">Garantía</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
`

const createProductHTML = ({
  name,
  price,
  crossedPrice,
  stars,
  reviews,
  image,
  url,
  discount,
  promo,
  shipping
}) => {
  return createHTMLElementFromString(`
    <a href="${url}" target="_blank" rel="noopener">
      <div class="product">
        <div class="product__header">
          ${discount ? `<div class="product__pill">${discount}</div>` : ''}
          ${promo ? `<div class="product__promo">${promo}</div>` : ''}
          <img class="product__image" src="${image}" alt="${name}" />
        </div>
        <p class="product__name">${name}</p>
        <div class="product__price">
          <span class="product__price__current">${price}€</span>
          ${
            crossedPrice
              ? `<span class="product__price__crossed">${crossedPrice}€</span>`
              : ''
          }
        </div>
        <div class="product__rating">
          <span class="rating">${stars}/5</span>
          <svg class="product__rating__star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFA90D">
            <path d="M21.9 8.6c-.1-.4-.5-.6-.9-.6h-5.4l-2.7-5.4c-.3-.7-1.4-.7-1.8 0L8.4 8H3c-.4 0-.8.2-.9.6-.2.4-.1.8.2 1.1l4.6 4.6L5 20.7c-.1.4 0 .8.4 1.1.3.2.8.3 1.1 0l5.4-3.6 5.4 3.6c.2.1.4.2.6.2.2 0 .4-.1.6-.2.3-.2.5-.7.4-1.1l-1.8-6.4 4.6-4.6c.3-.3.4-.7.2-1.1z"></path>
          </svg>
          <span class="opinions">${reviews} opiniones</span>
          <span class="shipping">
            ${shipping ? `<span class="shipping__free">${shipping}</span>` : ''}
          </span>
        </div>
      </div>
    </a>
  `)
}

const BODY = document.body

const createHTMLElementFromString = (string) =>
  new DOMParser().parseFromString(string, 'text/html').body.firstElementChild

const PRODUCT_SECTION_ID = 'products'

const buildLayout = () => {
  const title = 'PcComponentes.com | Tienda de Informática y Tecnología online'
  document.title = title
  const basicPage = `
    <main>
      ${navigation}
      <section class="container products-layout">
        ${filter}
        <section class="products-list" id="${PRODUCT_SECTION_ID}">
        </section>
      </section>
      ${footer}
    </main>
  `
  BODY.innerHTML = basicPage
}

const buildProductsList = () => {
  const productsSection = document.getElementById(PRODUCT_SECTION_ID)
  for (const product of products) {
    const productHTML = createProductHTML(product)
    productsSection.insertAdjacentElement('afterbegin', productHTML)
  }
}

buildLayout()
buildProductsList()
