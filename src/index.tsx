import React from 'react'
import ReactDOM from 'react-dom'
import OffCanvasPanel from './PanelComponent/App'

// const mybutton = React.createRef()
// <button className="custombutton" ref={mybutton}>
// test
// </button>

ReactDOM.render(
	<React.Fragment>
		<OffCanvasPanel
			animation={'door-left'}
			transitionDuration={'0.5s'}
			borderRadius={'7px'}
			customButtonReference={false}
			innerPadding={'0px'}
			backgroundColor={'#E3DFDA'}
			buttonPosition={'right'}
			buttonBackgroundColor={'#8DBFD1'}
			buttonColor={'#fff'}></OffCanvasPanel>
	</React.Fragment>,
	document.getElementById('root')
)
