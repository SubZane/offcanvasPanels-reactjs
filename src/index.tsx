import React from 'react'
import ReactDOM from 'react-dom'
import OffCanvasPanel from './PanelComponent/App'
import { ThemeProvider, theme } from './PanelComponent/theme'

ReactDOM.render(
	<React.Fragment>
		<ThemeProvider theme={theme}>
			<OffCanvasPanel state={''} showButton={true} animation={'door-left'}></OffCanvasPanel>
		</ThemeProvider>
	</React.Fragment>,
	document.getElementById('root')
)
