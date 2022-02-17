function useAccessibility() {
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

  return {
    data: {
      languages: LANGUAGES,
    },
  };
}

export { useAccessibility };
