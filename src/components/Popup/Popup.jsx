import React, {useState} from 'react';

const Popup = () => {
    const [status, setStatus] = useState('signIn');
    console.log('status->',status
    )
    return (
        <div className={'overlay'}>
            <div className={'popup'}>
                <form className="popup__form">
                    <div className="popup__form-top">
                        <h2 onClick={()=>setStatus('signIn')} className={'popup__title'}>
                            Войти
                        </h2>
                        <h2 onClick={()=>setStatus('signUp')} className={'popup__title'}>
                            Регистрация
                        </h2>
                    </div>
                    <input type="email"/>
                    {
                        status === 'signUp' && <input type="text"/>
                    }
                    <input type="password"/>
                    <button type={'button'}>
                        {status === 'signIn' ? 'Войти' : 'Регистрация'}
                    </button>
                </form>

            </div>

        </div>
    );
};

export default Popup;
