import React from "react"
import { Box, Grommet } from "grommet"
import { fromWei, hexToNumberString } from "web3-utils"
import theme from "../theme"

export default ({ address, etherBalance, totalTransaction }) => {
  return (
    <Grommet theme={theme}>
      <Box
        elevation="xlarge"
        round="small"
        responsive
        width="800px"
        margin="medium"
        animation="fadeIn"
        background={{
          color: "white",
          opacity: "medium"
        }}
      >
        <div style={{ padding: "0.5em 2em" }}>
          <h3>Address: {address}</h3>
        </div>
        <div style={{ padding: "0.5em 2em" }}>
          <h3>Balance: {fromWei(etherBalance, "ether")}</h3>
        </div>

        <div style={{ padding: "0.5em 2em" }}>
          <h3>Sent Transactions: {hexToNumberString(totalTransaction)}</h3>
        </div>
      </Box>
    </Grommet>
  )
}
