export function styleHtmlBody(lock: boolean) {
	const htmlObj = document.querySelector('html')
	const bodyObj = document.querySelector('body')
	if (lock) {
		if (bodyObj) {
			bodyObj.style.height = '100%'
			bodyObj.style.width = '100%'
			bodyObj.style.overflow = 'hidden'
			bodyObj.style.position = 'fixed'
		}
		if (htmlObj) {
			htmlObj.style.height = '100%'
			htmlObj.style.width = '100%'
			htmlObj.style.overflow = 'hidden'
			htmlObj.style.position = 'fixed'
		}
	} else {
		if (bodyObj) {
			bodyObj.style.height = ''
			bodyObj.style.width = ''
			bodyObj.style.overflow = ''
			bodyObj.style.position = ''
		}
		if (htmlObj) {
			htmlObj.style.height = ''
			htmlObj.style.width = ''
			htmlObj.style.overflow = ''
			htmlObj.style.position = ''
		}
	}
}
