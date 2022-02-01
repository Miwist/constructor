export class Site {
    constructor(selector) {
        this.$el = document.querySelector('#site')
    }
    render(model) {
        this.$el.innerHTML = ''
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}