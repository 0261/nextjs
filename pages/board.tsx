import React from "react";
import Link from "next/link";
import { Layout } from '@components/Layout';

const BoardLink: React.FunctionComponent<{title:string, id:number}> = ({title, id}) => (
    <li>
        <Link href={`/boardview`} as={`/boards/${id}`} >
            <a> {title} </a>
        </Link>
    </li>
)

const Index: React.FunctionComponent = (props) => (
    <Layout>
        <h2>게시판 리스트</h2>
        <ul>
            <BoardLink id={1} title="Next Board 1" />
            <BoardLink id={2} title="Next Board 2" />
            <BoardLink id={3} title="Next Board 3" />
        </ul>
    </Layout>
);

export default Index