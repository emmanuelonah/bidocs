import React from 'react';

import { useUniqueIds } from 'hooks';

type CssUnits = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc' | 'em' | 'rem' | 'ex' | '%' | 'vh' | 'vw' | 'vmin' | 'vmax' | 'ch';

function setCssRootProperty(key: string, value: string) {
  document.documentElement.style.setProperty(key, value);
}

function getCssRootProperty(key: string, fallbackValue?: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(key);

  return value || (fallbackValue ?? value);
}

function changeFontSize(value: string, unit?: CssUnits) {
  setCssRootProperty('--bidocs-font-size', value.concat(unit ?? 'px'));
}

function changeLineSpacing(value: string) {
  setCssRootProperty('--bidocs-line-spacing', value);
}

function changeWordSpacing(value: string) {
  setCssRootProperty('--bidocs-word-spacing', value);
}

function changeBackgroundColor(value: string) {
  setCssRootProperty('--bidocs-background-color', value);
}

function changeHeadingColor(value: string) {
  setCssRootProperty('--bidocs-heading-color', value);
}

function changeParagraphColor(value: string) {
  setCssRootProperty('--bidocs-paragraph-color', value);
}

const DEFAULT_CONFIGS = {
  selectedLanguage: '',
  bgColor: getCssRootProperty('--bidocs-background-color', '#1e90ff'),
  headingColor: getCssRootProperty('--bidocs-heading-color', '#ffc0cb'),
  paragraphColor: getCssRootProperty('--bidocs-paragraph-color', '#fdbefd'),
  htmlFontSize: getCssRootProperty('--bidocs-font-size', '16'),
  lineSpacing: getCssRootProperty('--bidocs-line-spacing', '1.2'),
  wordSpacing: getCssRootProperty('--bidocs-word-spacing', '5'),
};
const LANGUAGES = [
  { id: 'engLg', value: 'english', text: 'English' },
  { id: 'igboLg', value: 'igbo', text: 'Igbo' },
  { id: 'hausaLg', value: 'hausa', text: 'Hausa' },
  { id: 'yorubaLg', value: 'yoruba', text: 'Yoruba' },
  { id: 'swahiliLg', value: 'swahili', text: 'Swahili' },
  { id: 'twiLg', value: 'twi', text: 'Twi' },
].sort((curr, next) => {
  let currVal = curr.value;
  let nextVal = next.value;

  if (currVal < nextVal) return -1;
  if (currVal > nextVal) return 1;
  return 0;
});

function useAccessibility() {
  const [configs, setConfigs] = React.useState(DEFAULT_CONFIGS);
  const [bgInputId, paragraphInputId, headingInputId, fontSizeInputId, lineSpacingInputId, wordSpacingInputId] = useUniqueIds(6);
  const INPUTS = {
    color: [
      {
        id: bgInputId,
        type: 'color',
        name: 'bgColor',
        label: 'Change background',
        onChange(ev: React.ChangeEvent<HTMLInputElement>) {
          changeBackgroundColor(ev.target.value);
        },
      },
      {
        id: headingInputId,
        type: 'color',
        name: 'headingColor',
        label: 'Change Heading',
        onChange(ev: React.ChangeEvent<HTMLInputElement>) {
          changeHeadingColor(ev.target.value);
        },
      },
      {
        id: paragraphInputId,
        type: 'color',
        name: 'paragraphColor',
        label: 'Change Paragraph',
        onChange(ev: React.ChangeEvent<HTMLInputElement>) {
          changeParagraphColor(ev.target.value);
        },
      },
    ],
    font: [
      {
        id: fontSizeInputId,
        type: 'number',
        name: 'htmlFontSize',
        label: 'Change Font Size',
        onChange(ev: React.ChangeEvent<HTMLInputElement>) {
          changeFontSize(ev.target.value);
        },
      },
      {
        id: lineSpacingInputId,
        type: 'number',
        name: 'lineSpacing',
        label: 'Change Line Spacing',
        onChange(ev: React.ChangeEvent<HTMLInputElement>) {
          changeLineSpacing(ev.target.value);
        },
      },
      {
        id: wordSpacingInputId,
        type: 'number',
        name: 'wordSpacing',
        label: 'Change Word Spacing',
        onChange(ev: React.ChangeEvent<HTMLInputElement>) {
          changeWordSpacing(ev.target.value);
        },
      },
    ],
  };

  function onConfigChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setConfigs((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  return {
    data: {
      configs,
      languages: LANGUAGES,
      inputs: INPUTS,
    },
    dispatch: {
      changeFontSize,
      changeLineSpacing,
      changeWordSpacing,
      onConfigChange,
    },
  };
}

export { useAccessibility, getCssRootProperty, setCssRootProperty };
