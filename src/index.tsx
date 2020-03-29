import React from 'react'
import ReactDOM from 'react-dom'
import OffCanvasPanel from './PanelComponent/App'
import { ThemeProvider, theme } from './PanelComponent/theme'

// const mybutton = React.createRef()
// <button className="custombutton" ref={mybutton}>
// test
// </button>

ReactDOM.render(
	<React.Fragment>
		<ThemeProvider theme={theme}>
			<OffCanvasPanel animation={'door-left'} customButtonReference={false} buttonPosition={'right'}></OffCanvasPanel>
		</ThemeProvider>
	</React.Fragment>,
	document.getElementById('root')
)
