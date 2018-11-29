import React from "react"
import { Box, Grommet } from "grommet"
import { Link } from "react-router-dom"
import { fromWei, hexToNumber } from "web3-utils"
import { getDate, toNumber } from "../../helpers"
import theme from "../theme"

export default ({ tx, getAccountData }) => {
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
        <div style={{ display: "flex", width: "100%", padding: "1em" }}>
          <div style={{ padding: "0.5em 1em", width: "50%" }}>
            <h3>
              TxHash:{" "}
              <Link
                to={`/tx/${tx.hash}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {tx.hash}
              </Link>
            </h3>
          </div>

          <div style={{ padding: "0.5em 1em", marginLeft: "200px" }}>
            <h3>
              Block Number{" "}
              <Link
                to={`/block/${toNumber(tx.blockNumber)}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {toNumber(tx.blockNumber)}
              </Link>
            </h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "1em",
            marginBottom: "1em"
          }}
        >
          <div style={{ padding: "0.5em 1em", width: "50%" }}>
            {tx.timeStamp !== undefined ? (
              <h3>Transaction Date: {getDate(tx.timeStamp)}</h3>
            ) : (
              <h3>Nonce: {hexToNumber(tx.nonce)}</h3>
            )}
          </div>

          <div style={{ padding: "0.5em 1em", marginLeft: "180px" }}>
            <h3>Amount: {fromWei(tx.value, "ether")}</h3>
          </div>
        </div>
        <div style={{ padding: "0.5em 2em" }}>
          <h3>
            From:{" "}
            <Link
              to={`/address/${tx.from}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {tx.from}
            </Link>
          </h3>
        </div>
        <div style={{ padding: "0.5em 2em" }}>
          <h3>
            To:{" "}
            <Link
              to={`/address/${tx.to}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {tx.to}
            </Link>
          </h3>
        </div>
      </Box>
    </Grommet>
  )
}
