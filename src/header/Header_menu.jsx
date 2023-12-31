import './Header_menu.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import CartIcon from '../icon/icon-shopping-cart.png';
import ListIcon from '../icon/icon-ui.png';

import Cart from '../cart/Cart';
import Qr from './Qr';
import Dropdown from './Dropdown';


function Header_menu({ logoText }) {
    const [isDropdownView, setDropdownView] = useState(false)   // 드롭다운을 위한 함수 정의

    const handleClickContainer = () => {
        setDropdownView(!isDropdownView)
    }
    
    const handleBlurContainer = () => {
        setTimeout(() => {
            setDropdownView(false)
        }, 200);
    }

    return (
        <header>
            <div className='back'>
                <Link to="/menu">
                    <button className='back-button'>MENU&gt;</button>
                </Link>
            </div>
            <div className='nickname' id='menu_nickname'>닉네임</div>      {/* 나중에 연결 */}
            <div className="logo">{logoText}</div>      {/* 페이지 이름 */}
            <div className='icon-wrap'>
                <div className='icon'>                      {/* 아이콘 모음 */}
                    <div className='cart'>                  {/* 장바구니 */}
                        <div className='cart-button'>
                            <Link to="/cart"> {Cart}
                                <img src={CartIcon} alt="Cart" />
                            </Link>
                        </div>
                    </div>
                    <div className='qr'>         {/* QR코드 */}
                        <Qr />                   {/* 모달창 띄우는 컴포넌트 */}
                    </div>
                    <div className='list' onBlur={handleBlurContainer}>         {/* 메뉴 드롭다운_onBlur 사용 */}
                        <button className="list-button" onClick={handleClickContainer}>
                            <img src={ListIcon} alt="List" />
                            {isDropdownView && <Dropdown />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header_menu;
