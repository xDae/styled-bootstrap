import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import Nav from '../index';
// import Collapse from '../../Collapse';

export default storiesOf('Nav', module)
	.addDecorator(withKnobs)
	.addDecorator(
		host({
			align: 'center',
			width: 460
		})
	)
	.add('Basic Nav example', () => (
		<div>
			<Nav>
				<Nav.Item href="#" active>
					link 1
				</Nav.Item>
				<Nav.Item href="#">linke</Nav.Item>
				<Nav.Item href="#" disabled>
					disabled
				</Nav.Item>
			</Nav>
		</div>
	))
	.add('Center Nav example', () => (
		<div>
			<Nav justify="center">
				<Nav.Item href="#" active>
					link 1
				</Nav.Item>
				<Nav.Item href="#">linke</Nav.Item>
				<Nav.Item href="#" disabled>
					disabled
				</Nav.Item>
			</Nav>
		</div>
	))
	.add('Tab example', () => (
		<div>
			<Nav type="tabs">
				<Nav.Item href="#" active>
					link 1
				</Nav.Item>
				<Nav.Item href="#">linke</Nav.Item>
				<Nav.Item href="#" disabled>
					disabled
				</Nav.Item>
			</Nav>
		</div>
	))
	.add('Pill example', () => (
		<div>
			<Nav type="pills">
				<Nav.Item href="#" active>
					link 1
				</Nav.Item>
				<Nav.Item href="#">linke</Nav.Item>
				<Nav.Item href="#" disabled>
					disabled
				</Nav.Item>
			</Nav>
		</div>
	))
	.add('Fully customized example', () => (
		<div>
			<Nav type="pills" justify="end" vertical>
				<Nav.Item href="#" active>
					link 1
				</Nav.Item>
				<Nav.Item href="#">linke</Nav.Item>
				<Nav.Item href="#" disabled>
					disabled
				</Nav.Item>
			</Nav>
		</div>
	))
	.add('Pill with fill example', () => (
		<div>
			<Nav type="pills" fill>
				<Nav.Item href="#" active>
					link 1
				</Nav.Item>
				<Nav.Item href="#">linke</Nav.Item>
				<Nav.Item href="#" disabled>
					disabled
				</Nav.Item>
			</Nav>
		</div>
	));
