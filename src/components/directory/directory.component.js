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
                imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                linkUrl:'hats'
            },
            {
                title:'jackets',
                id:2,
                imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                linkUrl:'hats'
            },
            {
                title:'sneakers',
                id:3,
                imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                linkUrl:'hats'
            },
        {
            title:'womens',
            id:4,
            imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
            size:'large',
            linkUrl:'hats'
        },
    {
        title:'mens',
        id:5,
        imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
        size:'large',
        linkUrl:'hats'
    }]
        }
    }
    render(){
        return (
            <div className='directory-menu'>
                { this.state.sections.map(({id, ...otherSectionProps }) => (
                    <MenuItem key={ id } {...otherSectionProps} />
                ))}
            </div>
        )
    }

}

export default Directory;