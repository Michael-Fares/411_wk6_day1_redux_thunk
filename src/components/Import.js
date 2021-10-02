import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Menu, MenuItem} from '@material-ui/core'

import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    // fill out this component
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


    return (
        <Container>
            <Button variant="contained" color="primary"
            onClick={props.fetchMakes}>Import</Button>
            <h2>{`Count: ${props.makes.length}`}</h2>
            <TableBody>
                <TableRow>
                
                        <TableCell>Make Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
              
                </TableRow>
                {props.makes.map((make, index) => {
                    return (
                        <TableRow key={make.MakeId}>
                            <TableCell> {make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>
                                <MoreVert onClick={handleClick} />
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
            <Menu id="basic-menu"
                  anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                <MenuItem onClick={() => {
                    let index = 3
                    props.deleteMake(props.makes[index])
                    }}>
                    Delete
                </MenuItem>
            </Menu>
        </Container>
    )
}

export default Import