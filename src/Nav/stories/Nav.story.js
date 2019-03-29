import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import { Nav, NavItem } from '../index';
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
				<NavItem href="#" active>
					link 1
				</NavItem>
				<NavItem href="#">linke</NavItem>
				<NavItem href="#" disabled>
					disabled
				</NavItem>
			</Nav>
		</div>
	))
	.add('Center Nav example', () => (
		<div>
			<Nav justify="center">
				<NavItem href="#" active>
					link 1
				</NavItem>
				<NavItem href="#">linke</NavItem>
				<NavItem href="#" disabled>
					disabled
				</NavItem>
			</Nav>
		</div>
	))
	.add('Tab example', () => (
		<div>
			<Nav type="tabs">
				<NavItem href="#" active>
					link 1
				</NavItem>
				<NavItem href="#">linke</NavItem>
				<NavItem href="#" disabled>
					disabled
				</NavItem>
			</Nav>
		</div>
	))
	.add('Pill example', () => (
		<div>
			<Nav type="pills">
				<NavItem href="#" active>
					link 1
				</NavItem>
				<NavItem href="#">linke</NavItem>
				<NavItem href="#" disabled>
					disabled
				</NavItem>
			</Nav>
		</div>
	))
	.add('Fully customized example', () => (
		<div>
			<Nav type="pills" justify="end" vertical>
				<NavItem href="#" active>
					link 1
				</NavItem>
				<NavItem href="#">linke</NavItem>
				<NavItem href="#" disabled>
					disabled
				</NavItem>
			</Nav>
		</div>
	))
	.add('Pill with fill example', () => (
		<div>
			<Nav type="pills" fill>
				<NavItem href="#" active>
					link 1
				</NavItem>
				<NavItem href="#">linke</NavItem>
				<NavItem href="#" disabled>
					disabled
				</NavItem>
			</Nav>
		</div>
	));
