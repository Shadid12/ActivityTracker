import React, { Component } from 'react'
import { NavBar } from './NavBar'
import { Form, CardList } from './Form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class App extends Component {
	state = {
		cards: [
		]
	};

	addNewCard = (cardInfo) => {
		this.setState((prevState, props) => {
		  return {cards: prevState.cards.concat(cardInfo)};
		});
	}

	render() {
		return (
			<div className="container">
				<NavBar />
				<br />
				<br />
				<MuiThemeProvider>
					<div className="row">
						<div className="col">
					 		<Form onSubmit={this.addNewCard}/>
					 	</div>
				 	</div>
				</MuiThemeProvider>
				<CardList cards={this.state.cards} />

			</div>
			)
	}
}