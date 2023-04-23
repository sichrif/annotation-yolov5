import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

interface PopupStateProps {
    element: any;
    items: string[];
}

export default function MenuPopupState({ element, items }: PopupStateProps) {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <div {...bindTrigger(popupState)}>
                        {element}
                    </div>
                    <Menu sx={{
                        "& .MuiPaper-root": {
                            background: 'linear-gradient(133.84deg, #4E4E4E -16.04%, #333333 9.33%, #1A1A1A 32.02%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%)',
                            boxShadow: '2px 6px 15px 2px rgba(12, 10, 11, 0.8)',
                            borderRadius: "16px",
                            color: "#FFFFFF",
                            fontFamily: "Inter, sans-serif",
                            marginLeft: "-23px"
                        }
                    }}  {...bindMenu(popupState)}>
                        {items.map((item) => (
                            <MenuItem onClick={popupState.close}>{item}</MenuItem>
                        ))}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}