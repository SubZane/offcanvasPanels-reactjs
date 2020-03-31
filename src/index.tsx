import React from 'react'
import ReactDOM from 'react-dom'
import OffCanvasPanel from './Components/App'
import { GlitzClient } from '@glitz/core'
import { GlitzProvider } from '@glitz/react'
import transformers from '@glitz/transformers'

const glitz = new GlitzClient({ transformer: transformers() })

ReactDOM.render(
	<React.Fragment>
		<GlitzProvider glitz={glitz}>
			<OffCanvasPanel state={''} showButton={true} animation={'door-left'}></OffCanvasPanel>
		</GlitzProvider>
	</React.Fragment>,
	document.getElementById('root')
)
