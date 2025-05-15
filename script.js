const colorImages = {
    white: [
      'white front.jpg',
      'white back.jpg',
      'white up.jpg',
      'white right.jpg'
    ],
    lavender: [
      'lavender front.jpg',
      'lavender back.jpg',
      'lavender up.jpg',
      'lavender right.jpg'
    ],
    blue: [
      'blue front.webp',
      'blue back.webp',
      'blue up.webp',
      'blue right.png'
    ]
  };
  
  let currentColor = 'white';
  let currentIndex = 0;
  
  const mainImage = document.getElementById('mainImage');
  const thumbsContainer = document.getElementById('thumbsContainer');
  const colorName = document.getElementById('colorName');
  
  function updateThumbnails(color) {
    thumbsContainer.innerHTML = '';
    colorImages[color].forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.onclick = () => setMainImage(index);
      img.classList.toggle('active', index === currentIndex);
      thumbsContainer.appendChild(img);
    });
  }
  
  function setMainImage(index) {
    currentIndex = index;
    mainImage.src = colorImages[currentColor][index];
    updateThumbnails(currentColor);
  }
  
  function changeColor(color) {
    currentColor = color;
    currentIndex = 0;
    colorName.textContent = getColorName(color);
    setMainImage(currentIndex);
  }
  
  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
      setMainImage(currentIndex);
    }
  }
  
  function nextImage() {
    if (currentIndex < colorImages[currentColor].length - 1) {
      currentIndex++;
      setMainImage(currentIndex);
    }
  }
  
  function getColorName(color) {
    switch (color) {
      case 'white': return 'White';
      case 'lavender': return 'Lavender';
      case 'blue': return 'Blue';
      default: return color;
    }
  }
  
  // Init
  changeColor('white');