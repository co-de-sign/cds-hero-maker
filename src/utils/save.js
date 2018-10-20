// https://bl.ocks.org/biovisualize/8187844
// https://bl.ocks.org/mbostock/6466603

const h = (tag, props) => Object.assign(document.createElement(tag), props)
const file = 'co-de-sign-hero.png'

const fixSafari = string => encodeURIComponent(string
	.replace(/externalResourcesRequired="true"/g, '')
	.replace(/<svg\s+/g, '<svg externalResourcesRequired="true" ')
)

const toDataURL = string => `data:image/svg+xml;utf8,${fixSafari(string)}`

const save = ($svg, name = file) => new Promise((resolve, reject) => {
	const {width, height} = $svg.viewBox.baseVal
	const $canvas = <canvas width={width} height={height}/>
	const $image = <img width={width} height={height}/>
	$image.onload = () => {
		try{
			$canvas.getContext('2d').drawImage($image, 0, 0, width, height)
			const $link = <a download={name} href={$canvas.toDataURL('image/png')}/>
			document.body.appendChild($link)
			$link.click()
			document.body.removeChild($link)
			resolve()
		}catch(e){
			reject(e)
		}
	}
	$image.onerror = reject
	$image.src = toDataURL(new XMLSerializer().serializeToString($svg))
})

export default save
