import React, { useState, useEffect } from 'react'
import { css, createGlobalStyle } from './theme'
import Overlay from './Overlay'
import PanelButton from './PanelButton'
import Panel from './Panel'

const GlobalStyle = createGlobalStyle<{ visible: boolean }>`
body {
	${props =>
		props.visible &&
		css`
			height: 100%;
			width: 100%;
			overflow: hidden;
			position: fixed;
		`}
}

html {
	${props =>
		props.visible &&
		css`
			height: 100%;
			width: 100%;
			overflow: hidden;
			position: fixed;
		`}
}
`

export interface FlyPanelsProps {
	animation: 'door-left' | 'door-right' | 'flip-bottom' | 'flip-top'
	customButtonReference: boolean
	buttonPosition: string
	children?: JSX.Element[] | JSX.Element
}

function OffCanvasPanel(props: FlyPanelsProps) {
	const [togglePanel, setTogglePanel] = useState<boolean>(false)
	const [isPanelVisible, setPanelVisible] = useState<boolean>(false)
	const [hasOverlayAnimationEnded, sethasOverlayAnimationEnded] = useState<boolean>(false)
	const [hasPanelTransitionEnded, sethasPanelTransitionEnded] = useState<boolean>(false)
	const [hideOverlay, setHideOverlay] = useState<boolean>(false)
	const [fadeout, setFadeout] = useState<boolean>(false)
	const [fadein, setFadein] = useState<boolean>(false)
	const [isPanelButtonVisible, setIsPanelButtonVisible] = useState<boolean>(true)

	useEffect(() => {
		if (props.customButtonReference) {
			// props.customButtonReference.addEventListener('click', openPanel)
			// setIsPanelButtonVisible(false)
		}
	}, [props.customButtonReference])

	useEffect(() => {
		if (togglePanel) {
			setHideOverlay(false)
			setPanelVisible(true)
			setFadein(true)
			if (hasOverlayAnimationEnded && hasPanelTransitionEnded) {
				sethasOverlayAnimationEnded(false)
				sethasPanelTransitionEnded(false)
			}
		} else {
			if (isPanelVisible) {
				setPanelVisible(false)
				setFadeout(true)
			}
			if (hasOverlayAnimationEnded && fadeout) {
				setHideOverlay(true)
				setFadeout(false)
				setFadein(false)
			}
		}
	}, [hasOverlayAnimationEnded, hasPanelTransitionEnded, togglePanel, isPanelVisible, fadeout])

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
			<GlobalStyle visible={isPanelVisible} />

			<Overlay
				fadein={fadein}
				fadeout={fadeout}
				hide={hideOverlay}
				handleEvent={closePanel}
				onAnimationEnd={onOverlayAnimationEnd}
			/>

			<Panel
				animation={props.animation}
				visible={isPanelVisible}
				onTransitionEnd={onPanelTransitionEnd}
				children={props.children}
			/>
			{isPanelButtonVisible && <PanelButton position={props.buttonPosition} handleEvent={openPanel}></PanelButton>}
		</React.Fragment>
	)
}

export default OffCanvasPanel
