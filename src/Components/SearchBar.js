import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Box, Button, Grommet, TextInput } from 'grommet'
import { isAddress, isHexStrict } from 'web3-utils'
import { isBlockNumber } from '../helpers'
import theme from './theme'

class SearchBar extends Component {
    state = {
        searchParam: '0xf149d7a772a5dd8811a45a898c4766a316d3718e',
    }

    handleChange = e => this.setState({ searchParam: e.target.value })

    handleSearch = () => {
        const { searchParam } = this.state
        const { history, location } = this.props

        if(searchParam === ''){
            alert('Please enter an Ethereum Account Address, Transaction Hash or Block Number')
        } else if(isAddress(searchParam)){
            history.push(`/address/${searchParam}`)
        } else if(isHexStrict(searchParam)) {
            history.push(`/tx/${searchParam}`)
        } else if(isBlockNumber(searchParam)) {
            history.push(`/block/${searchParam}`)
        } else {
            alert('Please enter a valid Address, Txhash or Block Number ')
            this.setState({ searchParam: '' })
        }
    }

    handleClear = () => {
        this.setState({ searchParam: '' })
        this.props.history.push('/')
    }

    render(){
        return (
            <Grommet theme={theme}>
                <Box
                width="medium"
                style={{
                    margin: '50px auto'
                }}
                >
                    <p>Search by Address, Transaction Hash or Block Number</p>
                    <TextInput
                        id="SearchInput"
                        name="SearchInput"
                        size="small" 
                        value={this.state.searchParam}
                        onChange={this.handleChange}
                    />
                    <div style={{ textAlign: 'center', marginTop: '1em'}}>
                        <Button 
                            label="Search"
                            style={{
                                width: '100px',
                                marginRight: '1em'
                            }}
                            onClick={this.handleSearch}
                        />
                        <Button 
                            label="Clear"
                            style={{
                                width: '100px',
                            }}
                            onClick={this.handleClear}
                        />
                    </div>  
                </Box>
            </Grommet>
        )
    }
}

export default withRouter(SearchBar)