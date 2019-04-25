import Link from 'next/link';
import styled from "styled-components";
import React from 'react';

const LinkStyle = styled.a`
    margin-right: 1rem;
`

export const Header = () => {
    return (
        <div>
            <Link href="/" ><LinkStyle>홈</LinkStyle></Link>
            <Link as={`/boards`} href={{
                pathname: '/board',
                query:{
                    name: 'padakim'
                }
            }}><LinkStyle>게시판</LinkStyle></Link>
        </div>
    );
};
