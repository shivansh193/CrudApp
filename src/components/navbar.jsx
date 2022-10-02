import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/ToolBar';
import styled from '@mui/styled-engine';

const Header=styled(AppBar)`
    background: #111111;
    
`
const Tabs=styled('p')`
    font-size:20px;
    margin-right:20px
`
const Navbar=()=>{
    return(
        <Header>
            <ToolBar>
                <Tabs>CRUD App</Tabs>
                <Tabs>All Users</Tabs>
                <Tabs>Add User</Tabs>

            </ToolBar>
        </Header>
    )
}
export default Navbar;