import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import {styled, alpha, Theme} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Search = styled('div')(({theme}: {theme: Theme}) => ({
    position: 'relative',
    borderRadius: 'theme.shape.borderRadius',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme} : {theme: Theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme} : {theme: Theme}) => ({
    color: 'inherit',        
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',        
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },    
}));


function PrimaryNavigation() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2}}
                    onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu 
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{ list: {
                            'aria-labelledby': 'basic-button',
                        }
                        }}
                        >
                            <MenuItem onClick={handleClose}>All</MenuItem>
                            <MenuItem onClick={handleClose}>Prime Video</MenuItem>
                            <MenuItem onClick={handleClose}>Amazon Music</MenuItem>
                        </Menu>
                        <Typography variant="h6" component="div" sx={{flexGrow: 0, mr: 2}}>
                        Amazon
                        </Typography>
                        <Search sx={{flexGrow: 1}}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search..."
                                inputProps={{'aria-label': 'search'}}
                                />
                        </Search>
                        <Button color='inherit'>Prime</Button>
                        <Button color='inherit'>Today's Deals</Button>
                        <Button color='inherit'>Customer Service</Button>
                        <Button color='inherit'>Registry</Button>
                        <Button color='inherit'>Gift Cards</Button>
                        <Button color='inherit'>Sell</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default PrimaryNavigation;