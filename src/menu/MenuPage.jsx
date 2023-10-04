// MenuPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function MenuPage() {
    // React Router를 사용하여 URL에서 파라미터를 받아옵니다.
    const { menuName } = useParams();

    // 메뉴 페이지의 내용을 동적으로 생성합니다.
    // 예를 들어, 메뉴 이름에 따라 다른 내용을 보여줄 수 있습니다.
    const menuDescription = getMenuDescription(menuName);

    return (
        <div className="menu-page">
            {/* 메뉴 페이지의 내용을 렌더링합니다. */}
            <h1>{menuName}</h1>
            <p>{menuDescription}</p>
        </div>
    );
}

export default MenuPage;

// 메뉴에 따른 내용을 동적으로 반환하는 함수
function getMenuDescription(menuName) {
    switch (menuName) {
        case '고기리들기름파스타':
            return '고기리들기름파스타의 설명입니다.';
        case '우삼겹알리올리오':
            return '우삼겹알리올리오의 설명입니다.';
        // 다른 메뉴에 대한 설명을 추가합니다.
        default:
            return '해당 메뉴에 대한 설명이 없습니다.';
    }
}
