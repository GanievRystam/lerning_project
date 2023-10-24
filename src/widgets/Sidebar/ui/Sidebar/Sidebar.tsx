import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button';
import cls from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonSize, ThemeButton } from 'shared/ui/Button/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { t } from 'i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
      <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
          <Button
                data-testid="sidebar-toggle" className={cls.collapseBtn} size={ButtonSize.XL}
                onClick={onToggle}
                theme={ThemeButton.BACKGROUND_INVERTED} square>{collapsed ? '>' : '<'}</Button>
          <div className={cls.items}>
              <div className={cls.item}>
                  <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} >
                      <MainIcon className={cls.icon}/>
                      <span className={cls.link}>
                          {t('Главная')}
                      </span>
                  </AppLink>
              </div>
              <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                  <AboutIcon className={cls.icon}/>
                  <span className={cls.link}>
                      {t('О сайте')}
                  </span>
              </AppLink>
          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
      </div>
  );
};
