import React, { useState } from 'react';
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }
  return (
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <button onClick={onToggle}>______</button>
          <div className={cls.switchers}>
              <ThemeSwitcher/>
              <LangSwitcher className={cls.lang }/>
          </div>
      </div>
  )
}
