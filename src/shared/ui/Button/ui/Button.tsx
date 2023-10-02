import React, { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss"
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, theme, children, ...otherProps} = props
    return(
        <button 
            className={classNames(cls.Button, {}, [className, cls[theme]])} 
            {...otherProps}>
            {children}
        </button>
    );
}