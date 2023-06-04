import React from 'react'
import ReactDOM from 'react-dom'

import OffCanvasPanel from './PanelComponent/App'
import { theme, ThemeProvider } from './PanelComponent/theme'

ReactDOM.render(
	<React.Fragment>
		<ThemeProvider theme={theme}>
			<OffCanvasPanel state={''} showButton={true} animation={'flip-top'}></OffCanvasPanel>
		</ThemeProvider>
	</React.Fragment>,
	document.getElementById('root')
)
