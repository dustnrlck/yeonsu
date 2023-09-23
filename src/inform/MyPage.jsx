import React from 'react';
import Header from '../header/Header';

function MyPage() {
    const logoText = "마이페이지";

    return (
        <div className="my-page">
        <Header logoText={logoText} />

        </div>
    );
}

export default MyPage;
