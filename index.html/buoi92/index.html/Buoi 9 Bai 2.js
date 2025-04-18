// Danh sách ảnh (bạn cần có các file ảnh trong cùng thư mục hoặc sửa đường dẫn)
const images = ["https://thewillnews.com/wp-content/uploads/2023/03/Ronaldo.jpeg", "https://media.gq-magazine.co.uk/photos/5d139f7b003d75649cae6ad5/master/pass/Ronaldo-GQ-23nov17_GettyImages875941708.jpg", "https://i2-prod.birminghammail.co.uk/incoming/article29487903.ece/ALTERNATES/s810/0_Portugal-v-France-Quarter-Final-UEFA-EURO-2024.jpg", "https://cdn.mos.cms.futurecdn.net/oVGCJx9HWZAUi4ojciHEA-1200-80.jpg"];
let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById("slide");
  img.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
