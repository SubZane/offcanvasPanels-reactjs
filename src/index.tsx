import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import OffCanvasPanel from './PanelComponent/App'
import { theme, ThemeProvider } from './PanelComponent/theme'
import { animationTypes } from './PanelComponent/types'

function OffCanvasContainer() {
	const [effect, setEffect] = useState<animationTypes>('door-left')

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<OffCanvasPanel state={''} showButton={true} animation={effect}></OffCanvasPanel>
				<div className="select">
					<select onChange={(e) => setEffect(e.currentTarget.value as animationTypes)}>
						<option value="door-left">Door Left</option>
						<option value="door-right">Door Right</option>
						<option value="flip-top">Flip Top</option>
						<option value="flip-bottom">Flip Bottom</option>
					</select>
				</div>
			</ThemeProvider>
		</React.Fragment>
	)
}
ReactDOM.render(<OffCanvasContainer />, document.getElementById('root'))
