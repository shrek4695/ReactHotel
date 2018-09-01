import React from 'react';
import Side from './side';
import Display from './display';


class parent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state= {
            items: {
                Button: {
                    name:'Button',
                    description:'This is a clickable button',
                    types: [
                        {id:'0',itemname:'Book Now',itemdescription:'<html Code>',itemmodel:'Book Now' },
                        {id:'1',itemname:'Book On Available',itemdescription:'<html Code>',itemmodel:'Book On Available'},
                        {id:'2',itemname:'Not Available',itemdescription:'<html Code>',itemmodel:'Not Available'},
                        {id:'3',itemname:'Search',itemdescription:'<html Code>',itemmodel:'Search'}
                    ]   
                    },
                Datepicker: {
                    name:'Datepicker',
                    description:'Picking to and from date from Calender',
                    types: [
                        {id:'0',itemname:'DatePicker',itemdescription:'<html Code>',itemmodel:'DatePicker'}
                    ]
                },
                Searchbox:{
                    name:'Searchbox',
                    description:'Enter the Hotel Name',
                    types: [
                        {id:'0',itemname:'SearchBox',itemdescription:'<html Code>',itemmodel:'SearchBox'}
                    ]
                },
                Logo:{
                    name:'Logo',
                    description:'Logo of Hotel',
                    types: [
                        {id:'0',itemname:'Logo',itemdescription:'<html Code>',itemmodel:'Logo'}
                    ]
                }
            },
            selecteditem:'Button'
        }
    }

    updateState = (selecteditem) => {
        this.setState({selecteditem})
    }

    render()
    {
        return(              
            <div>
              <div>
              <Side content={this.state.items} selected={this.state.selecteditem} updateState={this.updateState}/>
              </div>
              <div>
              <Display content={this.state.items[this.state.selecteditem]} />
              </div>
            </div>
        );
    }
}
export default parent;