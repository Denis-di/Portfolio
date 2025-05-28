import React from 'react';

const Contacts: React.FC = () => {
    return (
        <header style={{ padding: '2rem 14.85rem', backgroundColor: '#333', color: 'white' }}>
            <h1>Контакты</h1>
            <p>Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами:</p>
            <ul>
                <li>Email: <a href="mailto:deniskaden261@gmail.com">Почта</a></li>
                <li>Телефон: <a href="tel:+79610679123">Денис Грачев</a></li>
                <li>Адрес: г. Волгоград</li>
            </ul>
            <p>Мы всегда рады помочь!</p>
            <p>Следите за нами в социальных сетях:</p>
            <ul>
                <li><a href="https://www.instagram.com">Instagram</a></li>
                <li><a href="https://www.vk.com">ВКонтакте</a></li>
                <li><a href="tg://resolve?domain=React_DGrachev">Telegram</a></li>
                <li><a href="https://www.whatsapp.com">WhatsApp</a></li>
                <li><a href="https://github.com/Denis-di">GitHub</a></li>
            </ul>
            <p>Спасибо за ваш интерес к нашему бизнесу!</p>
        </header>
    );
}
export default Contacts;