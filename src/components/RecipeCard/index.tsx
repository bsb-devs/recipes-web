import React from 'react';

import {Recipe} from './styles';

function RecipeCard() {
	return(
		<>
			<Recipe>
				<img src="https://images.unsplash.com/photo-1519148246701-3dc1897a7a21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY2lwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Brownie"/>

				<div className="container">
					<h2>Brownie de Chocolate</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat ex nihil? Magnam voluptatem sint soluta voluptatum ea, exercitationem, quas facere cumque laborum inventore culpa expedita beatae veniam quos dignissimos!</p>
					
					<ul className="ingredients">
						<li>- Chocolate</li>
						<li>- Açúcar Mascavo</li>
						<li>- Chocolate em pó</li>
						<li>- Baunilha</li>
						<li>- Gelo</li>
						<li>- Gelo</li>
						<li>- Gelo</li>
						<li>- Gelo</li>
						<li>- Gelo</li>
						<li>- Gelo</li>
						<li>- Gelo</li>
					</ul>

					<ul className="tags">
						<li>sobremesa</li>
						<li>10 minutos</li>
						<li>fácil</li>
						<li>3 porções</li>
					</ul>
				</div>
			</Recipe>
		</>
	)
}

export default RecipeCard;