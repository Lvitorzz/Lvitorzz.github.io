
const vendedores = {
  vendedor1: [
    { categoria: 'Empadas', nome: 'Empada de frango', preco: 4.00 },
    { categoria: 'Empadas', nome: 'Empada de frango com requeijão', preco: 5.00 },
    { categoria: 'Empadas', nome: 'Empada de Carne de Sol', preco: 7.00 },
    { categoria: 'Empadas', nome: 'Empada de Carne de Sol Cremosa', preco: 8.00 },
    { categoria: 'Empadas doces', nome: 'Empada de Leite condensado', preco: 3.00 },
    { categoria: 'Empadas doces', nome: 'Empada de Leite condensado (massa de chocolate)', preco: 4.50 },
    { categoria: 'Empadas doces', nome: 'Empada de Nutella (massa tradicional)', preco: 8.00 },
    { categoria: 'Empadas doces', nome: 'Empada de Nutella (massa de chocolate)', preco: 9.00 },
    { categoria: 'Açaí', nome: 'Açaí 300 ml', preco: 10.00 },
    { categoria: 'Açaí', nome: 'Açaí 400 ml', preco: 13.00 },
    { categoria: 'Açaí', nome: 'Açaí 500 ml', preco: 15.00 },
    { categoria: 'Sanduiches Naturais', nome: 'Sanduiche Natural', preco: 6.00 },
  ],
  vendedor2: [
    { categoria: 'Pastel', nome: 'Pastel de frango', preco: 7.00 },
    { categoria: 'Pastel', nome: 'Misto', preco: 7.00 },
    { categoria: 'Pastel', nome: 'Frango com Bacon', preco: 11.00 },
    { categoria: 'Pastel', nome: 'Frango com Cream Cheese', preco: 14.00 },
    { categoria: 'Pastel', nome: 'Frango com Cheddar', preco: 14.00 },
    { categoria: 'Pastel', nome: 'Frango com Queijo', preco: 8.00 },
    { categoria: 'Pastel', nome: 'Queijo Mussarela', preco: 7.00 },
    { categoria: 'Pastel', nome: 'Queijo Coalho', preco: 10.00 },
    { categoria: 'Pastel', nome: 'Presunto', preco: 7.00 },
    { categoria: 'Pastel', nome: 'Carne de Sol', preco: 13.00 },
    { categoria: 'Pastel', nome: 'Carne de Sol na Nata', preco: 14.00 },
    { categoria: 'Pastel', nome: 'Carne de Sol com Cream Cheese', preco: 15.00 },
    { categoria: 'Pastel', nome: 'Carne', preco: 12.00 },
    { categoria: 'Pastel', nome: 'Carne com Cheddar', preco: 14.00 },
    { categoria: 'Pastel', nome: 'Vegano (verdura)', preco: 12.00 },
    { categoria: 'Pastel', nome: 'Peito de Peru Defumado com Cream Cheese', preco: 14.00 },
    { categoria: 'Pastel', nome: 'Nutella', preco: 16.00 },
    { categoria: 'Pastel', nome: 'Chocolate com Queijo', preco: 10.00 },
    { categoria: 'Pastel', nome: 'Chocolate', preco: 8.00 },
    { categoria: 'Pastel', nome: 'Dois Amores', preco: 8.50 },
  ],
  vendedor6: [
    { categoria: 'Cerveja', nome: 'Sparten', preco: 4.50 },
    { categoria: 'Cerveja', nome: 'Petra', preco: 3.00 },
    { categoria: 'Refrigerante', nome: 'Coca Cola 500ml', preco: 4.00 },
    { categoria: 'Cremosinho', nome: 'Cremosinho', preco: 1.00 },
    { categoria: 'Amendoim', nome: 'Amendoim', preco: 2.00 },
  ]
};

function exibirCardapio(vendedor) {
  const homepage = document.getElementById('homepage');
  const catalogo = document.getElementById('catalogo');

  homepage.style.display = 'none';
  catalogo.style.display = 'block';
  catalogo.innerHTML = '';

  const tituloCardapio = document.createElement('h1');
  tituloCardapio.innerText = 'Cardápio';
  catalogo.appendChild(tituloCardapio);

  const voltarButton = document.createElement('button');
  voltarButton.innerText = 'Voltar';
  voltarButton.onclick = function () {
    homepage.style.display = 'block';
    catalogo.style.display = 'none';
  };
  catalogo.appendChild(voltarButton);

  const containerProdutos = document.createElement('div');
  catalogo.appendChild(containerProdutos);

  const produtos = vendedores[vendedor];
  let categoriaAtual = '';

  produtos.forEach((produto, index) => {
    if (produto.categoria !== categoriaAtual) {
      if (index !== 0) {
        // Adiciona uma linha horizontal após cada categoria, exceto a primeira
        const linhaHorizontal = document.createElement('hr');
        containerProdutos.appendChild(linhaHorizontal);
      }

      const categoriaHTML = `<h2>${produto.categoria}</h2>`;
      containerProdutos.innerHTML += categoriaHTML;
      categoriaAtual = produto.categoria;
    }

    const produtoHTML = `
      <div class="produto">
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      </div>
    `;
    containerProdutos.innerHTML += produtoHTML;
  });

  if (categoriaAtual === 'Açaí') {
    const acompanhamentosHTML = `
      <div class="produto">
        <h3>Acompanhamentos disponíveis:</h3>
        <p>Banana, leite ninho leite condensado, granola, amendoim</p>
      </div>
    `;
    containerProdutos.innerHTML += acompanhamentosHTML;
  }
}


class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
