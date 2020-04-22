import React from 'react'
import { styled, theme } from './theme'
import { Style } from '@glitz/type'
import Content from './Content'
import { animationType } from './helpers/types'

const Panel = styled.div({
	position: 'fixed',
	maxWidth: '700px',
	zIndex: 2000,
	backfaceVisibility: 'hidden',
	visibility: 'hidden',
	transform: 'rotateX(0deg)',
})
const FlipTop = {
	top: 0,
	right: '10px',
	left: '50px',
	height: '400px',
	perspective: '1300px',
	'@media (min-width: 768px)': {
		left: 'auto',
		width: '30%',
		borderRadius: '0 5px',
	},
} as Style

const DoorLeft = {
	top: '10px',
	right: '50px',
	left: '0px',
	bottom: '10px',
	perspective: '1300px',
	'@media (min-width: 768px)': {
		right: 'auto',
		width: '30%',
		borderRadius: '0 5px',
	},
} as Style

const DoorRight = {
	top: '10px',
	right: '0px',
	left: '50px',
	bottom: '10px',
	perspective: '1300px',
	'@media (min-width: 768px)': {
		left: 'auto',
		width: '30%',
		borderRadius: '0 5px',
	},
} as Style

const FlipBottom = {
	top: '50px',
	right: '20px',
	left: '20px',
	bottom: '0px',
	perspective: '1300px',
	'@media (min-width: 768px)': {
		width: '600px',
		left: '50%',
		margin: {
			left: '-300px',
		},
	},
} as Style

const Visible = {
	visibility: 'visible',
	opacity: 1,
} as Style

function setStyle(animation: animationType, visible: boolean) {
	if (animation === 'door-left') {
		const css = DoorLeft
		if (visible) {
			const animatedCSS = { ...css, ...Visible }
			return animatedCSS
		} else {
			return css
		}
	} else if (animation === 'door-right') {
		const css = DoorRight
		if (visible) {
			const animatedCSS = { ...css, ...Visible }
			return animatedCSS
		} else {
			return css
		}
	} else if (animation === 'flip-bottom') {
		const css = FlipBottom
		if (visible) {
			const animatedCSS = { ...css, ...Visible }
			return animatedCSS
		} else {
			return css
		}
	} else if (animation === 'flip-top') {
		const css = FlipTop
		if (visible) {
			const animatedCSS = { ...css, ...Visible }
			return animatedCSS
		} else {
			return css
		}
	}
}

interface PanelContainerProps {
	visible: boolean
	animation: animationType
	onTransitionEnd: () => void
	children?: JSX.Element[] | JSX.Element
}

function PanelContainer(props: PanelContainerProps) {
	return (
		<Panel css={setStyle(props.animation, props.visible)} onTransitionEnd={props.onTransitionEnd}>
			<Content visible={props.visible} animation={props.animation} children={props.children} />
		</Panel>
	)
}

export default PanelContainer
