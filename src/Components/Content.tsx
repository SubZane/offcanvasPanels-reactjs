import React from 'react'
import { styled, theme } from './theme'
import { Style } from '@glitz/type'

const Content = styled.div({
	color: '#fff',
	backgroundColor: '#E3DFDA',
	maxWidth: '600px',
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	top: 0,
	left: 0,
	right: 0
})

const FlipTop = {
	borderRadius: '0px 0px 5px 5px',
	top: 0,
	right: 0,
	animationFillMode: 'forwards',
	animationIterationCount: 1,
	display: 'block',
	animationDuration: '0.5s',
	animationTimingFunction: 'ease-in',
	transformStyle: 'preserve-3d',
	transform: 'translateY(-100%) rotateX(90deg)',
	transformOrigin: '100% 0',
	opacity: 0,
	transitionProperty: 'all',
	transitionDuration: '0.3s',
	transitionTimingFunction: 'ease-out'
} as Style

const DoorLeft = {
	borderRadius: '0px 5px 5px 0px',
	transformStyle: 'preserve-3d',
	transform: 'translateZ(100px) translateX(0%) rotateY(90deg)',
	transformOrigin: '0 100%',
	opacity: 0,
	transitionProperty: 'all',
	transitionDuration: '0.3s'
} as Style

const DoorRight = {
	borderRadius: '5px 0px 0px 5px',
	transformOrigin: '100% 0',
	opacity: 0,
	transformStyle: 'preserve-3d',
	transform: 'translateZ(100px) translateX(30%) rotateY(-90deg)',
	transitionProperty: 'all',
	transitionDuration: '0.3s'
} as Style

const FlipBottom = {
	bottom: 0,
	borderRadius: '5px 5px 0px 0px',
	transformStyle: 'preserve-3d',
	transform: 'translateY(100%) rotateX(90deg)',
	transformOrigin: '0 100%',
	opacity: 0,
	transitionProperty: 'all',
	transitionDuration: '0.3s',
	transitionTimingFunction: 'ease-out'
} as Style

const AnimateDoor = {
	transform: 'translateZ(0px) translateX(0%) rotateY(0deg)',
	opacity: 1
} as Style

const AnimateFlip = {
	transform: 'translateY(0%) rotateX(0deg)',
	opacity: 1
} as Style

function setStyle(animation: 'door-left' | 'door-right' | 'flip-bottom' | 'flip-top', visible: boolean) {
	if (animation === 'door-left') {
		const css = DoorLeft
		if (visible) {
			const animatedCSS = { ...css, ...AnimateDoor }
			return animatedCSS
		} else {
			return css
		}
	} else if (animation === 'door-right') {
		const css = DoorRight
		if (visible) {
			const animatedCSS = { ...css, ...AnimateDoor }
			return animatedCSS
		} else {
			return css
		}
	} else if (animation === 'flip-bottom') {
		const css = FlipBottom
		if (visible) {
			const animatedCSS = { ...css, ...AnimateFlip }
			return animatedCSS
		} else {
			return css
		}
	} else if (animation === 'flip-top') {
		const css = FlipTop
		if (visible) {
			const animatedCSS = { ...css, ...AnimateFlip }
			return animatedCSS
		} else {
			return css
		}
	}
}

const Inner = styled.div({
	position: 'absolute',
	right: 0,
	left: 0,
	margin: {
		xy: 0
	},
	paddingLeft: 0,
	paddingRight: 0,
	bottom: 0,
	top: 0,
	overflowY: 'auto',
	font: {
		size: '1.15em',
		weight: 300
	}
})

interface iProps {
	visible: boolean
	animation: 'door-left' | 'door-right' | 'flip-bottom' | 'flip-top'
	children?: JSX.Element[] | JSX.Element
}

function PanelContent(props: iProps) {
	return (
		<Content css={setStyle(props.animation, props.visible)}>
			<Inner>{props.children}</Inner>
		</Content>
	)
}

export default PanelContent
