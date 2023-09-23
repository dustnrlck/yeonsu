import React from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

function Tournament() {
    const logoText = "오늘의 떡밥";

    return (
        <>
            <div className="tournament">
                <Header logoText={logoText} />

            </div>
        </>
    );
}

export default Tournament;
