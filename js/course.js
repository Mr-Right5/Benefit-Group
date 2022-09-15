// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
var sliderImages2 = Array.from(document.querySelectorAll('.slider-container2 img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;
var slidesCount2 = sliderImages.length;

// Set Current Slide
var currentSlide = 1;
var currentSlide2 = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');
var slideNumberElement2 = document.getElementById('slide-number2');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var nextButton2 = document.getElementById('next2');
var prevButton = document.getElementById('prev');
var prevButton2 = document.getElementById('prev2');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
nextButton2.onclick = nextSlide2;
prevButton.onclick = prevSlide;
prevButton2.onclick = prevSlide2;

// Create The Main UL Element
var paginationElement = document.createElement('ul');
var paginationElement2 = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');
paginationElement2.setAttribute('id', 'pagination-ul2');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

// Create The LI
var paginationItem = document.createElement('li');

// Set Custom Attribute
paginationItem.setAttribute('data-index', i);

// Set Item Content
paginationItem.appendChild(document.createTextNode(i));

// Append Items to The Main Ul List
paginationElement.appendChild(paginationItem);

}
for (var i = 1; i <= slidesCount2; i++) {

// Create The LI
var paginationItem2 = document.createElement('li');

// Set Custom Attribute
paginationItem2.setAttribute('data-index2', i);

// Set Item Content
paginationItem2.appendChild(document.createTextNode(i));

// Append Items to The Main Ul List
paginationElement2.appendChild(paginationItem2);

}

// Add The Created UL Element to The Page
document.getElementById('ind').appendChild(paginationElement);
document.getElementById('ind2').appendChild(paginationElement2);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');
var paginationCreatedUl2 = document.getElementById('pagination-ul2');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
var paginationsBullets2 = Array.from(document.querySelectorAll('#pagination-ul2 li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

paginationsBullets[i].onclick = function () {

currentSlide = parseInt(this.getAttribute('data-index'));

theChecker();

}

}
for (var i = 0; i < paginationsBullets2.length; i++) {

paginationsBullets2[i].onclick = function () {

currentSlide2 = parseInt(this.getAttribute('data-index2'));

theChecker2();

}

}

// Trigger The Checker Function
theChecker();
theChecker2();

// Next Slide Function
function nextSlide() {

if (nextButton.classList.contains('disabled')) {

// Do Nothing
return false;

} else {

currentSlide++;

theChecker();

}

}
function nextSlide2() {

if (nextButton2.classList.contains('disabled')) {

// Do Nothing
return false;

} else {

currentSlide2++;

theChecker2();

}

}

// Previous Slide Function
function prevSlide() {

if (prevButton.classList.contains('disabled')) {

// Do Nothing
return false;

} else {

currentSlide--;

theChecker();

}

}
function prevSlide2() {

if (prevButton2.classList.contains('disabled')) {

// Do Nothing
return false;

} else {

currentSlide2--;

theChecker2();

}

}

// Create The Checker Function
function theChecker() {

// Set The Slide Number
//slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

// Remove All Active Classes
removeAllActive();

// Set Active Class On Current Slide
sliderImages[currentSlide - 1].classList.add('active');

// Set Active Class on Current Pagination Item
paginationCreatedUl.children[currentSlide - 1].classList.add('active');

// Check if Current Slide is The First
if (currentSlide == 1) {

// Add Disabled Class on Previous Button
prevButton.classList.add('disabled');

} else {

// Remove Disabled Class From Previous Button
prevButton.classList.remove('disabled');

}

// Check if Current Slide is The Last
if (currentSlide == slidesCount) {

// Add Disabled Class on Next Button
nextButton.classList.add('disabled');

} else {

// Remove Disabled Class From Next Button
nextButton.classList.remove('disabled');

}

}
function theChecker2() {

// Set The Slide Number
//slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

// Remove All Active Classes
removeAllActive2();

// Set Active Class On Current Slide
sliderImages2[currentSlide2 - 1].classList.add('active');

// Set Active Class on Current Pagination Item
paginationCreatedUl2.children[currentSlide2 - 1].classList.add('active');

// Check if Current Slide is The First
if (currentSlide2 == 1) {

// Add Disabled Class on Previous Button
prevButton2.classList.add('disabled');

} else {

// Remove Disabled Class From Previous Button
prevButton2.classList.remove('disabled');

}

// Check if Current Slide is The Last
if (currentSlide2 == slidesCount2) {

// Add Disabled Class on Next Button
nextButton2.classList.add('disabled');

} else {

// Remove Disabled Class From Next Button
nextButton2.classList.remove('disabled');

}

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

// Loop Through Images
sliderImages.forEach(function (img) {

img.classList.remove('active');

});

// Loop Through Pagination Bullets
paginationsBullets.forEach(function (bullet) {

bullet.classList.remove('active');

});

}
function removeAllActive2() {

// Loop Through Images
sliderImages2.forEach(function (img) {

img.classList.remove('active');

});

// Loop Through Pagination Bullets
paginationsBullets2.forEach(function (bullet) {

bullet.classList.remove('active');

});

}
//-----------
const hamNav = document.getElementById('tog');
const ulNav = document.getElementById('ul');
hamNav.addEventListener("click", () => {
    ulNav.classList.toggle('active');

}
)