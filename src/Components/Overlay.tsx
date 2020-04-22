import React from 'react'
import { styled } from './theme'
import { fadeType } from './helpers/types'

const Overlay = styled.div({
	backfaceVisibility: 'hidden',
	position: 'fixed',
	zIndex: 1000,
	top: '-5000px',
	right: '-5000px',
	bottom: '-5000px',
	left: '-5000px',
	display: 'none',
	background: {
		color: 'rgba(43, 46, 56, 0.9)',
	},
})

const fadeIn = {
	animationName: {
		'0%': {
			opacity: 0,
		},
		'100%': {
			opacity: 1,
		},
	},
	animationFillMode: 'forwards',
	animationIterationCount: 1,
	display: 'block',
	animationDuration: '0.5s',
	animationTimingFunction: 'ease-in',
}

const fadeOut = {
	animationName: {
		'100%': {
			opacity: 0,
		},
		'0%': {
			opacity: 1,
		},
	},
	animationFillMode: 'forwards',
	animationIterationCount: 1,
	display: 'block',
	opacity: 1,
	animationDuration: '0.5s',
	animationTimingFunction: 'ease-out',
}

const hide = {
	display: 'none',
}

function setStyle(fade: string) {
	if (fade === 'in') {
		return fadeIn
	} else if (fade === 'out') {
		return fadeOut
	} else {
		return hide
	}
}

interface OverlayProps {
	fade: fadeType
	handleEvent: () => void
	onAnimationEnd: () => void
}

function OverlayContainer(props: OverlayProps) {
	return <Overlay css={setStyle(props.fade)} onClick={props.handleEvent} onAnimationEnd={props.onAnimationEnd} />
}

export default OverlayContainer
