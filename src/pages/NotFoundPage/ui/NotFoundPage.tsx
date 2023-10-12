import React from 'react';
import { useTranslation } from 'react-i18next';
// import { classNames } from 'shared/lib/classNames/classNames';
interface NotFoundPageProps {
  className?: string
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
      <div>
          <h1>{t('Страница не найдена')}</h1>
      </div>
  )
}
