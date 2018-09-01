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
                        {id:'1',itemname:'Book Now',itemdescription:'<html Code>'},
                        {id:'2',itemname:'Book On Available',itemdescription:'Available on Selected Dates'},
                        {id:'3',itemname:'Not Available',itemdescription:'Not Available'},
                        {id:'4',itemname:'Search',itemdescription:'Search the hotel'}
                    ]   
                    },
                Datepicker: {
                    name:'Datepicker',
                    description:'Picking to and from date from Calender',
                    types: [
                        {id:'1',itemname:'DatePicker',itemdescription:'Picking From and To Date'}
                    ]
                },
                Searchbox:{
                    name:'Searchbox',
                    description:'Enter the Hotel Name',
                    types: [
                        {id:'1',itemname:'DatePicker',itemdescription:'Hotel Search'}
                    ]
                },
                Logo:{
                    name:'Logo',
                    description:'Logo of Hotel',
                    types: [
                        {id:'1',itemname:'Logo',itemdescription:'Logo of hotel'}
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