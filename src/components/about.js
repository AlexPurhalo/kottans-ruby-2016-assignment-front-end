// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class About extends Component {
	render() {
		return (
			<div className="about-page">
				<div className="about-introduction">
					<div className="about-section">
						<h2 className="about-title">Alex Purhalo</h2>
					</div>
				</div>

				<div className="about-video-intro">
					<div className="about-section">
						<iframe className="about-video"
										src="https://www.youtube.com/embed/DGaTMws-6_Q">
						</iframe>
					</div>
				</div>
				<div className="about-technologies">
					<ul className="technologies-list">
						<li className="technology">Grape micro-framework for comfortable communication with JSON</li>
						<li className="technology">Sidekiq for destruction in certain moment</li>
						<li className="technology">Heroku to show deployed version of app</li>
						<li className="technology">React for communication with Ruby API</li>
						<li className="technology">Swagger as UI for request creating to Grape App</li>
						<li className="technology">RSpec for testing our application</li>
						<li className="technology">I tried to write a weal commit story to watch application development process step by step</li>
						<li className="technology">Here is my <a href="https://github.com/AlexPurhalo/kottans-ruby-2016-assignment-front-end">front-end GitHub source</a></li>
						<li className="technology">Here is my <a href="https://github.com/AlexPurhalo/kottans-ruby-2016-back">back-end GitHub source</a></li>
					</ul>
				</div>
			</div>
		);
	}
}
