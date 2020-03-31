import React from 'react'
import { pseudo, styled, theme } from './theme'

const PanelButton = styled.div({
	bottom: '20px',
	right: '20px',
	position: 'fixed',
	width: '50px',
	color: 'white',
	fontWeight: 'bold',
	borderRadius: '50px',
	height: '50px',
	border: { xy: { width: 0 } },
	zIndex: 50,
	backgroundColor: '#8DBFD1',
	cursor: 'pointer',
	...pseudo(':after', {
		right: '16px',
		color: '#fff',
		position: 'absolute',
		top: '14px',
		left: '13px',
		background: {
			image: 'url("img/menubars.svg")',
			repeat: 'no-repeat',
			position: 'fixed'
		},
		width: '24px',
		height: '24px',
		content: '""',
		display: 'inline-block'
	})
})

interface iProps {
	handleEvent: () => void
}

function PanelButtonContainer(props: iProps) {
	return <PanelButton onClick={props.handleEvent}></PanelButton>
}

export default PanelButtonContainer
