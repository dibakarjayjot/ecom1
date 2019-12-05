import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[{
               title:'hats',
                id:1,
                imageUrl:'https://i.ibb.co/cvpntL1/hats.png'
            },
            {
                title:'jackets',
                id:2,
                imageUrl:'https://i.ibb.co/px2tCc3/jackets.png'
            },
            {
                title:'sneakers',
                id:3,
                imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png'
            },
        {
            title:'womens',
            id:4,
            imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
            size:'large'
        },
    {
        title:'mens',
        id:5,
        imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
        size:'large'
    }]
        }
    }
    render(){
        return (
            <div className='directory-menu'>
                { this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={ id } title={ title } imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }

}

export default Directory;