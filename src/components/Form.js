import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FaBeer from 'react-icons/lib/fa/500px';


const Carda = (props) => {

	return (
		<MuiThemeProvider>
			<div className="col s4">
				<Card className="container">
					<CardHeader
						title={props.name}
						subtitle={props.login}
						avatar={props.avatar_url}
					/>
					<CardText>
						<span><i className="tiny material-icons">location_on</i>{props.location}</span><br />
						<a>{props.email}</a><br />
						<a>{props.company}</a><br />
						<span>public repos: {props.public_repos}</span>

						<p>
							It was popularised in the 1960s with the release of Letraset 
							sheets containing Lorem Ipsum passages, and more recently 
						</p>
					
						<RaisedButton label="View Profile" secondary={true} /> 
						<span>
						</span>
					
					</CardText>
				</Card>
			</div>
		</MuiThemeProvider>
	);
};


export const CardList = (props) => {
	return (
		<div className="row">
			{props.cards.map( card => <Carda key={card.id} {...card}/>)}
		</div>
	)
}



export class Form extends Component {

state = { 
		userName: '',
	 }

handleClick = (event) => {
	axios.get(`https://api.github.com/users/${this.state.userName}`)
			.then(res => {
				this.props.onSubmit(res.data);
				console.log(res.data);
				this.setState( {userName: ''} );
			});
}

render() {
	return (
		<div className="container">
			<TextField 
				value={this.state.userName}
				onChange={(event) => this.setState({ userName: event.target.value })}
				hintText="GitHub User name"/>
			<RaisedButton label="Git User" style={{  margin: 12 }} onClick= {this.handleClick}/>
		</div>
	);
}

}