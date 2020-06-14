import FlashMessageComponent, { EventEmitter } from './src/FlashMessage'

/**
 * Shows a flash notification.
 * @param {Object} options - Flash options params
 * @param {'NEUTRAL'|'DANGER'|'WARNING'} [options.type] - Enum Types For Notification (If not set it will be 'NEUTRAL')
 * @param {string} [options.title] - Title Flash Notification
 * @param {string} [options.desc] - Description Flash Notification
 */

const showFlash = ({ type, title, desc }) => EventEmitter.emit('SHOW_FLASH', { type: type, title: title, desc: desc })

export { showFlash };


export default FlashMessageComponent;