// https://bl.ocks.org/biovisualize/8187844
// https://bl.ocks.org/mbostock/6466603

const h = (tag, props) => Object.assign(document.createElement(tag), props)
const file = 'co-de-sign-hero.png'

const fixSafari = string => encodeURIComponent(string
	.replace(/externalResourcesRequired="true"/g, '')
	.replace(/<svg\s+/g, '<svg externalResourcesRequired="true" ')
)

const toDataURL = string => `data:image/svg+xml;utf8,${fixSafari(string)}`

const save = ($svg, download = file) => new Promise((resolve, reject) => {
	const {width, height} = $svg.viewBox.baseVal
	const $canvas = h('canvas', {width, height})
	const $image = new Image(width, height)
	$image.onload = () => {
		try{
			$canvas.getContext('2d').drawImage($image, 0, 0, width, height)
			h('a', {download, href: $canvas.toDataURL('image/png')}).click()
			resolve()
		}catch(e){
			reject(e)
		}
	}
	$image.onerror = reject
	$image.src = toDataURL(new XMLSerializer().serializeToString($svg))
})

export default save
