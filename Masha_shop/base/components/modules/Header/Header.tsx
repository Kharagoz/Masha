import Logo from '@/components/elements/Logo/Logo';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';





const Header = () => {
    return (
        <header className='Header'>
            <div className='container Header__container'>
                <button className='btn-reset header__shope'>
                </button>
                <div className="Header__logo">
                    <Logo />
                </div>
            <ul className='Header__links list-reset'>
                <li className='Header__links__item'>
                <button
              className='btn-reset Header__links__item__btn Header__links__item__btn--search'/>
  
                </li>
                <li className='Header__links__item'>
                    <Link
                    href='/favorites'
                    className='Header__links__item__btn Header__links__item__btn--favorites'>
                    </Link>
                </li>
                <li className='Header__links__item'>
                    <Link
                    href='/card'
                    className='Header__links__item__btn Header__links__item__btn--card'>
                    </Link>
                </li>
                <li className='Header__links__item'>
                    <Link
                    href='/login'
                    className='Header__links__item__btn Header__links__item__btn--login'>
                    </Link>
                </li>
            </ul>
            </div>
        </header>
    );
};

export default Header;
