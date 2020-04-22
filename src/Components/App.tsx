import React, { useState, useEffect } from 'react'
import { styleHtmlBody } from './helpers/functions'
import Overlay from './Overlay'
import PanelButton from './PanelButton'
import Panel from './Panel'
import { fadeType, animationType, openType } from './helpers/types'

interface iProps {
	animation: animationType
	children?: JSX.Element[] | JSX.Element
	showButton: boolean
	state: openType
}

function OffCanvasPanel(props: iProps) {
	const [togglePanel, setTogglePanel] = useState<boolean>(false)
	const [isPanelVisible, setPanelVisible] = useState<boolean>(false)
	const [hasOverlayAnimationEnded, sethasOverlayAnimationEnded] = useState<boolean>(false)
	const [hasPanelTransitionEnded, sethasPanelTransitionEnded] = useState<boolean>(false)
	const [fade, setFade] = useState<fadeType>('')

	useEffect(() => {
		if (props.state === 'open') {
			openPanel()
		} else if (props.state === 'close') {
			closePanel()
		}
	}, [props.state])

	useEffect(() => {
		styleHtmlBody(isPanelVisible)
	}, [isPanelVisible])

	useEffect(() => {
		if (togglePanel) {
			setPanelVisible(true)
			setFade('in')
			if (hasOverlayAnimationEnded && hasPanelTransitionEnded) {
				sethasOverlayAnimationEnded(false)
				sethasPanelTransitionEnded(false)
			}
		} else {
			if (isPanelVisible) {
				setPanelVisible(false)
				setFade('out')
			}
			if (hasOverlayAnimationEnded && fade === 'out') {
				setFade('')
			}
		}
	}, [hasOverlayAnimationEnded, hasPanelTransitionEnded, togglePanel, isPanelVisible, fade])

	function closePanel() {
		setTogglePanel(false)
	}

	function openPanel() {
		setTogglePanel(true)
	}

	function onOverlayAnimationEnd() {
		sethasOverlayAnimationEnded(true)
	}

	function onPanelTransitionEnd() {
		sethasPanelTransitionEnded(true)
	}

	return (
		<React.Fragment>
			<Overlay fade={fade} handleEvent={closePanel} onAnimationEnd={onOverlayAnimationEnd} />

			<Panel
				animation={props.animation}
				visible={isPanelVisible}
				onTransitionEnd={onPanelTransitionEnd}
				children={props.children}
			/>
			{props.showButton && <PanelButton handleEvent={openPanel}></PanelButton>}
		</React.Fragment>
	)
}

export default OffCanvasPanel
