const sliderEl = document.querySelector('.effect-level__slider');
const sliderValueEl = document.querySelector('.effect-level__value');
const imagePreviewEl = document.querySelector('.img-upload__preview img');
const effectsListEl = document.querySelector('.effects__list');
const effectsListItemEl = document.querySelector('.effects__item');
const effectBarEl = document.querySelector('.img-upload__effect-level');
const effectsRadioButtonsEl = document.querySelectorAll('.effects__radio');

noUiSlider.create(sliderEl, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.01,
  connect: 'lower',
});

const resetEffects = () => {
  imagePreviewEl.removeAttribute('style');
  effectBarEl.classList.add('hidden');
  imagePreviewEl.classList.add('.effects__preview--none');
};

sliderEl.noUiSlider.on('update', () => {
  sliderValueEl.value = sliderEl.noUiSlider.get();
});

const onEffectButton = (evt) => {
  const targetButton = evt.target.closest('.effects__radio');

  if (targetButton) {
    const effValue = targetButton.value;
    if (effValue === 'none') {
      imagePreviewEl.removeAttribute('style');
      effectBarEl.classList.add('hidden');
    } else {
      effectBarEl.classList.remove('hidden');
      console.log(effValue);
      if (effValue === 'chrome') {
        sliderEl.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.01,
          connect: 'lower',
        });
        sliderEl.noUiSlider.on('update', () => {
          imagePreviewEl.style.filter = `grayscale(${sliderValueEl.value})`;
        });
      }
      if (effValue === 'sepia') {
        sliderEl.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.01,
          connect: 'lower',
        });
        sliderEl.noUiSlider.on('update', () => {
          imagePreviewEl.style.filter = `sepia(${sliderValueEl.value})`;
        });
      }
      if (effValue === 'marvin') {
        sliderEl.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.01,
          connect: 'lower',
        });
        sliderEl.noUiSlider.on('update', () => {
          imagePreviewEl.style.filter = `invert(${sliderValueEl.value})`;
        });
      }
      if (effValue === 'phobos') {
        sliderEl.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.01,
          connect: 'lower',
        });
        sliderEl.noUiSlider.on('update', () => {
          imagePreviewEl.style.filter = `blur(${sliderValueEl.value}px)`;
        });
      }
      if (effValue === 'heat') {
        sliderEl.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start: 3,
          step: 0.01,
          connect: 'lower',
        });
        sliderEl.noUiSlider.on('update', () => {
          imagePreviewEl.style.filter = `brightness(${sliderValueEl.value})`;
        });
      }
    }
    imagePreviewEl.removeAttribute('class');
    imagePreviewEl.classList.add(`effects__preview--${effValue}`);
  }
};

const initEffects = () => {
  effectBarEl.classList.add('hidden');
  imagePreviewEl.removeAttribute('style');
  imagePreviewEl.removeAttribute('class');
  effectsListEl.addEventListener('change', onEffectButton);
};

export {initEffects};
