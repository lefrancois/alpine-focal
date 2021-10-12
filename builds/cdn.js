import Focal from '../src/index'

document.addEventListener('alpine:initializing', () => {
    window.Alpine.plugin(Focal)
})
