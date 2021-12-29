const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true, },
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/2.jpg', isFav: false, },
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/3.jpg', isFav: true },
            ]
        }
    },
    methods: {
        changeTitle(title) {
            //  this.title = 'Words of radiance'
            this.title = title
        },
        toggleShowBooks() {

            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {

            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }

    },

})

app.mount("#app")