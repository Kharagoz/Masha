import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
    return (
        <div className='dropDownProfile'>
            <ul className='burguer'>
                <li>
                    <Link href='/card'>Canasta</Link>
                </li>
                <li>
                    <Link href='/favorites'>Favoritos</Link>
                </li>
                <li>
                    <Link href='/novedades'>Novedades</Link>
                </li>
                <li>
                    <Link href='/catalogo'>Catálogo</Link>
                </li>
                <li>
                    <Link href='/descuentos'>Descuentos</Link>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;



