import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ErrorPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();
  const reloadpage = (): void => {
    location.reload();
  }
  return (
      <div className={classNames(cls.ErrorPage, {}, [className])}>
          <span className={classNames(cls.ErrorPage__header, {}, [className])}>{t('Произошла непредвиденная ошибка')}</span>
          <Button onClick={reloadpage}>{t('Обновите страницу')}</Button>
      </div>
  )
}
