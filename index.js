import FlashMessageComponent, { EventEmitter } from './src/FlashMessage'

/**
 * 
 * @param {Object} options - Flash options params
 * @param {'NEUTRAL'|'DANGER'|'WARNING'} options.type - Enum Types For Notification
 * @param {string} options.title - Title Flash Notification
 * @param {string} options.desc - Description Flash Notification
 */

const showFlash = ({ type, title, desc }) => EventEmitter.emit('SHOW_FLASH', { type: type, title: title, desc: desc })

export { showFlash };


export default FlashMessageComponent;