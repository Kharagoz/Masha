'use client';

import Link from 'next/link';
import Logo from '@/components/elements/Logo/Logo';
import DropdownMenu from '@/components/elements/DropdownMenu/DropdownMenu.tsx/DropdownMenu';
import React, { useState } from 'react';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='header'>
            <div className='container Header__container'>
                <div className='Header__left'>
                    <div
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='Header__links__item__btn Header__links__item__btn--menuu'
                    >
                        <img src="/img/menuu.svg" alt="menuu" />
                    </div>
                    {isMenuOpen && <DropdownMenu />}
                </div>
                <div className="Header__logo">
                    <Logo />
                </div>
                <ul className='Header__links list-reset'>
                    <li className='Header__links__item'>
                        <button className='btn-reset Header__links__item__btn Header__links__item__btn--search' />
                    </li>
                    <li className='Header__links__item'>
                        <Link href='/favorites' className='Header__links__item__btn Header__links__item__btn--favorites'></Link>
                    </li>
                    <li className='Header__links__item'>
                        <Link href='/card' className='Header__links__item__btn Header__links__item__btn--card'></Link>
                    </li>
                    <li className='Header__links__item'>
                        <Link href='/login' className='Header__links__item__btn Header__links__item__btn--login'></Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;

