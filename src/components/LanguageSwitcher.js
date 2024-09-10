import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={handleChange} value={i18n.language}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es-ES">Spanish (Spain)</option>
      <option value="de">German</option>
      
    </select>
  );
};

export default LanguageSwitcher;
