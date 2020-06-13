import FlashMessageComponent, { EventEmitter } from './src/FlashMessage'

const showFlash = ({ type, title, desc }) => EventEmitter.emit('SHOW_FLASH', { type: type, title: title, desc: desc })

export { showFlash };

export default FlashMessageComponent;