import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Nuestras redes</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Atención al cliente</h3>
                    <ul>
                        <li><a href="#">Formas de pago</a></li>
                        <li><a href="#">Cambios y devoluciones</a></li>
                        <li><a href="#">Métodos de Envío</a></li>
                        <li><a href="#">Guía de tallas</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Libro de Reclamaciones</h3>
                    <ul>
                        <li><a href="#">Hacer una reclamación</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
