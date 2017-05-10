import { Component } from 'react'

export class NavBar extends Component {
	render(){
		return(
			<nav>
				<div className="nav-wrapper light-blue darken-2">
					<a href="/" className="brand-logo center">Git Tracker</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="/#/asdds">Components</a></li>
					</ul>
					<a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a>
				</div>
			</nav>
		)
	}
}