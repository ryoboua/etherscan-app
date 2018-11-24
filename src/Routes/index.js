import React from 'react';
import { Route } from "react-router-dom";

import AccountView from '../Components/Account/AccountView'
import BlockView from '../Components/Block/BlockView'
import TransactionView from '../Components/Transaction/TransactionView'

export const AccountRoute = ({ path, ...props}) => {
    return (
        <Route 
            path={path} 
            render={ reactRouterProps => <AccountView {...reactRouterProps} {...props} /> }
        />
    )
}
export const BlockRoute = ({ path, ...props}) => {
    return (
        <Route 
            path={path} 
            render={ reactRouterProps => <BlockView {...reactRouterProps} {...props} /> }
        />
    )
}
export const TxRoute = ({ path, ...props}) => {
    return (
        <Route 
            path={path} 
            render={ reactRouterProps => <TransactionView {...reactRouterProps} {...props} /> }
        />
    )
}