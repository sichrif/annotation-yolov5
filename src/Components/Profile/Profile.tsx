import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';
import styles from './style.module.css'
import { Button, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';

interface FadeProps {
    children: React.ReactElement;
    in?: boolean;
    onClick?: any;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement, isAppearing: boolean) => void;
    ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null as any, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null as any, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40vw",
    height: "60vh",
    background: 'linear-gradient(133.84deg, #4E4E4E -16.04%, #333333 9.33%, #1A1A1A 32.02%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Profile({ open, handleClose }: any) {


    return (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            Edit Profile
                        </Typography>
                        <form className={styles.form}>
                            <TextField sx={{ width: "40%" }} id="filled-basic" label="User Name" variant="filled" />
                            <TextField sx={{ width: "40%" }} type='email' id="filled-basic" label="Email" variant="filled" />
                            <TextField sx={{ width: "40%" }} id="filled-basic" label="First Name" variant="filled" />
                            <TextField sx={{ width: "40%" }} id="filled-basic" label="Last Name" variant="filled" />
                            <TextField sx={{ width: "40%" }} type='tel' id="filled-basic" label="Phone Number" variant="filled" />
                            <div style={{ width: "100%", display: "flex", gap: "10%" }}>
                                <Button style={{ width: "40%", paddingLeft: "10px" }} variant="contained" color="primary">
                                    save
                                </Button>
                                <Button style={{ width: "40%" }} variant="contained" color="primary" onClick={handleClose}>
                                    Cancel
                                </Button></div>
                        </form>


                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}