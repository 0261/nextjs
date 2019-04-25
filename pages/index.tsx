import React from 'react';
import { Layout } from '@components/Layout';

interface Props {
	text: string;
	name: string;
}

const Index:React.FunctionComponent<Props> = ({text, name}) => (
	<Layout>
		<div>
			<h1> {text} Welcome {name}!</h1>
		</div>
	</Layout>
)

export default Index;