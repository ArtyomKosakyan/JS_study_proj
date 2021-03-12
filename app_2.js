class mainTools {
    constructor(wait = 1500, timeInterval = 500){
        this.wait = wait
        this.timeInterval = timeInterval
        this.i = 0
    }
    addText() {
        console.log('Text is None')
    }

    addStyle() {
        console.log('Style is None')
    }
    addAnimation() {
        console.log('Object for animation is None')
    }
    delay(wait=this.wait){
        const promiseDelay = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, wait)
        })
        return promiseDelay
    }

    interval(interv=this.timeInterval, obj){
        let i = this.i
        const promiseInterval = new Promise((resolve, reject) => {
            setInterval(() => {
                if (i === 30) {
                    clearInterval()
                    return
                }
                else if (i % 2 === 0) {
                    obj.style.backgroundColor = 'red'
                    obj.style.color = 'black'
                }
                else {
                    obj.style.backgroundColor = 'green'
                    obj.style.color = 'orange'
                }
                i += 1
                console.log(i)
                resolve()
            }, interv)

        })
        return promiseInterval
    }
}

class ObjectForAnim_1 extends mainTools {
    constructor(object) {
        super()
        this.obj = object
    }

    addStyle(item, text, color, fontSize) {
        this.addText(item, text, color, fontSize)
        item.style.textAlign = 'center'
        item.style.padding = '2rem'
    }

    addText(item, text='None', color='black', fontSize) {
        // super.addText()
        item.textContent = text
        item.style.color = color
        if (fontSize){
            item.style.fontSize = fontSize
        }
    }

    async addAnimation(text = 'None', color = 'black',
                 fontSize = '1rem', by_class) {
        let h = this.obj
        try {
            await this.delay(1500)
            console.log('waited')
            if (by_class) {
                for (let item of by_class) {
                    this.addStyle(item, text, color, fontSize)
                }
            }
            else {
                this.addStyle(h, text, color, fontSize)
            }
            await this.interval(500, h)

        } catch {
            console.log('error')
        }
    }
}
class ObjectForAnim_2 extends mainTools {
    constructor(object) {
        super()
        this.obj = object
    }

    addStyle(item, text, color, fontSize) {
        this.addText(item, text, color, fontSize)
        item.style.textAlign = 'left'
        item.style.padding = '3rem'
        item.style.backgroundColor = 'yellow'
    }

    addText(item, text='None', color='black', fontSize) {
        // super.addText()
        item.textContent = text
        item.style.color = color
        if (fontSize){
            item.style.fontSize = fontSize
        }
    }

    async addAnimation(text = 'None', color = 'black',
                       fontSize = '1rem', by_class) {
        // super.addAnimation()
        let h = this.obj

        try {
            await this.delay(1500)
            console.log('waited')
            if (by_class) {
                for (let item of by_class) {
                    this.addStyle(item, text, color, fontSize)
                }
            }
            else {
                this.addStyle(h, text, color, fontSize)
            }
        } catch {
            console.log('error')
        }
    }
}

const firstObject = document.getElementById('Art')
const secondObjects = document.querySelectorAll('.h')

const example_1 = new ObjectForAnim_1(firstObject)
example_1.addAnimation('JS H1', 'darkred', '2rem')

const example_2 = new ObjectForAnim_2(firstObject)
example_2.addAnimation('JS H2 AND H3', 'darkred', '1rem', by_class = secondObjects)
