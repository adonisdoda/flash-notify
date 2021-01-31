import FlashMessageComponent, { EventEmitter } from './src/FlashMessage'

/**
 * Shows a flash notification.
 * @param {Object} options - Flash options params
 * @param {'NEUTRAL'|'DANGER'|'WARNING'} [options.type] - Enum Types For Notification (If not set it will be 'NEUTRAL')
 * @param {string} [options.title] - Title Flash Notification
 * @param {string} [options.desc] - Description Flash Notification
 * @param {Array} [options.customColors] - 2 Custom Colors For Flash Notify
 */

const showFlash = ({ type, title, desc, customColors }) => EventEmitter.emit('SHOW_FLASH', { type, title, desc, customColors })

export { showFlash };


export default FlashMessageComponent;