import { TitleBlock, TextBlock, ColumnsBlock, ImgBlock } from './classes/blocks';
import image from './assets/cat.jpg';

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(240deg, #ebdc9b 5%, #bb8400 108%)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'

        }
    }),
    new TextBlock('Here we go with some text', {
        styles: {
            padding: '1.5rem 1rem'
        }
    }),
    new ImgBlock(image, {
        styles: {
            display: 'flex',
            'justify-content': 'center'
        },
        imgStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это самая красивая картинка'
    }),
    new ColumnsBlock( 
        [
            '1111111111',
            '2222222222',
            '3333333333'
        ], 
        {
            styles: {
                padding: '2rem',
                'font-weight': 'bold',
                background: 'linear-gradient(180deg, #fff 0%, #aab4b4 132%)'
            }
        }
    ),
];