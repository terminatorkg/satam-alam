import React from 'react';
import {Link} from "react-router-dom";
import Popup from "../../components/Popup/Popup";

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className="header__nav">
                    <div className="header__left">
                        <h1 className='header__title'>
                            <Link to='/'>Сатам-алам</Link>
                        </h1>
                        <Link className='header__link' to='#'>Для бизнеса</Link>
                    </div>
                    <div className="header__right">
                        <p className='header__login'>Войти - Регистрация</p>
                        <button type='submit' className='header__btn'>Подать обьявление</button>
                    </div>
                </div>
            </div>
            <Popup/>
        </header>
    );
};

export default Header;
