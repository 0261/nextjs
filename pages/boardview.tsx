import React from 'react';
import { NextFunctionComponent, NextContext } from 'next';
import { Layout } from "@components/Layout";


interface BoardViewItem {
    title: string
}

const BoardView: NextFunctionComponent<BoardViewItem>= ({title}) => (
    <Layout>
        <h2> 제목: {title}</h2>
        <p>
            상세내용
        </p>
    </Layout>
)

BoardView.getInitialProps = ({ req, pathname, query }: NextContext) => {
    console.log(query.id);
    return {
        title: pathname
    }
}

export default BoardView;

//  Boardview;