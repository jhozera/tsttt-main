// barra mobile

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const barra = document.getElementById('barra');

  menuToggle.addEventListener('click', function() {
      barra.classList.toggle('show-menu');
  });
});



window.addEventListener('scroll', () => {
  const navbar = document.getElementById('desktop');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



// caixa perguntas
function showContent(contentID) {
  const sections = document.querySelectorAll('.form-container');
  const carteirasDiv = document.getElementById('form-box');
  

  sections.forEach(section => {
      section.style.display = 'none'; 
  });

  const selectedSection = document.getElementById(contentID);
  if (selectedSection) {
      selectedSection.style.display = 'flex'; 
      const contentHeight = selectedSection.scrollHeight; 
      carteirasDiv.style.height = contentHeight + 'px'; 
  }
}



///// tire suas duvidas

function showContente(id) {
  const content = document.getElementById(id);
  const isVisible = content.style.display === "block";

  const allContents = document.querySelectorAll('.bt-content');
  allContents.forEach(el => el.style.display = 'none');

  if (!isVisible) {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}


/// direcionamento div

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}

/// pc
const contButton = document.getElementById('aceconst')

contButton.addEventListener('click', () => {
  document.body.classList.toggle('contrast');


  if(document.body.classList.contains('contrast')){
    contrastIcon.src = '<img src="/imagem/Acessibilidade-gRANDE-300x300.png/>'
  } else {
    contrastIcon.src = '<img src="/imagem/Acessibilidade-gRANDE-300x300.png/>'
  }

})




// mobile
const conteButton = document.getElementById('aceconsta')

conteButton.addEventListener('click', () => {
  document.body.classList.toggle('contrast');


  if(document.body.classList.contains('contrast')){
    contrastIcon.src = '<img src="/imagem/Acessibilidade-gRANDE-300x300.png/>'
  } else {
    contrastIcon.src = '<img src="/imagem/Acessibilidade-gRANDE-300x300.png/>'
  }

})



// model atualiza 
function openModal(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  document.getElementById('modal-overlay').style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}