//SurveyNew shows SurveyForm and SurveyForm review
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (!this.state.showFormReview) {
			return (
				<SurveyForm
					onSurveySubmit={() => this.setState({ showFormReview: true })}
				/>
			);
		}
		return (
			<SurveyFormReview
				onCancel={() => this.setState({ showFormReview: false })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: 'SurveyForm'
})(SurveyNew);
