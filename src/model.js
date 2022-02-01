import image from './assets/indi.jpg'
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from './classes/blocks'

export const model = [
    new TitleBlock( 'Конструктор сайтов', {
    tag: 'h1',
    styles: {
        'font-size': "3,9em",
        'text-align': 'center',
        background: 'linear-gradient(to right, #ff0099, #493240'
    }
    }),

new TextBlock( 'Здесь можно создать несколько элементов типа: Текст и заголовок', {
    styles: {
        color: '#52b2b2b',
        'font-size': "1,9em",
        'text-align': 'center',
        background: 'linear-gradient(to right, #ffffff, #593122)'
    }
}),
    
new ColumnsBlock( [ 'Для того, чтобы создать что-то, заполните поля в левом верхнем углу', 'Вписывайте текст в поле "Текст/заголовок"', 'первая колонка - это содержимое. А вторая - это стили CSS, можно ввести к примеру: color: green;'], {
    styles: {
        color: '#ffebeb',
        background: 'linear-gradient(to right, #000ff0, #583700)',
       'text-align': 'center'

    }
}),

new ImageBlock( image, {
    styles: {
            
    },
    imageStyles: {
        width: '99%',
        'box-sizing': 'content-box'
    },
    alt: 'это картинка'
    })
]
