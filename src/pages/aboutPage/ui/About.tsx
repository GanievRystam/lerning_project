import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
      <div>
          <h1>{t('О сайте')}</h1>
      </div>
  )
}

export default About;
