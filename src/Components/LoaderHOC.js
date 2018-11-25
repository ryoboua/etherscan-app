import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

//currying function - https://www.youtube.com/watch?v=LTunyI2Oyzw

export default propName => WrappedComponent => {
    return class LoaderHOC extends Component {
        isEmpty(prop){
            return (
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length === 0) || //check if prop is an array and length
                (prop.contructor === Object && Object.keys(prop).length ===0) // check if prop is an object
            )
        }
        render(){
            return !this.isEmpty(this.props[propName]) ? 
                (
                <WrappedComponent {...this.props} />
                ):(
                <div style={{ textAlign: 'center', paddingTop: '1em' }}>
                    <Loader type="Triangle" color="Black" height="100" width="100" />
                </div>
                )
        } 
    }
}   