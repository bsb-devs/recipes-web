import React from 'react';

import {IndexPage} from './styles';

import RecipeCard from '../RecipeCard';

function Index() {
	return(
		<IndexPage>
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
		</IndexPage>
	)
}

export default Index;