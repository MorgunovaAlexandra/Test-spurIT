
const button = document.querySelector('.collapsible__button'),
      showButton = document.querySelector('.collapsible__action--visible'),
      hideButton = document.querySelector('.collapsible__action--hidden'),
      content = document.querySelector('.collapsible__content');

const animationOptions = {
  fill: 'forwards',
  duration: 300,
};

let contentVisible = false;

hideButton.style.display = 'none';

const showContent = () => {
    content.animate({ opacity: 0, opacity:1 }, animationOptions);
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
    contentVisible = false;
};

const hideContent = () => {
  content.animate({ opacity: 1, opacity:0 }, animationOptions);
  showButton.style.display = 'none';
  hideButton.style.display = 'block';
  contentVisible = true;
};


button.addEventListener('click', () => {
  return contentVisible ? showContent() : hideContent();
});
