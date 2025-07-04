import React from 'react';
//import PropTypes from 'prop-types';
//import clsx from 'clsx';
//import Button from '@material-ui/core/Button';
//import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
//import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
//import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
//import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
//import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

// const variantIcon = {
//   success: CheckCircleIcon,
//   warning: WarningIcon,
//   error: ErrorIcon,
//   info: InfoIcon,
// };

const useStyles1 = makeStyles(theme => ({
  // success: {
  //   backgroundColor: green[600],
  // },
  error: {
    backgroundColor: theme.palette.error.dark,
    maxWidth: 600
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  // warning: {
  //   backgroundColor: amber[700],
  // },
  icon: {
    fontSize: 20,
    // opacity: 0.9,
    // marginRight: theme.spacing(1),
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  }
}));

function Alert(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  //const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classes.error}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <ErrorIcon className={classes.icon} />
          {message}
        </span>
      }
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

// MySnackbarContentWrapper.propTypes = {
//   className: PropTypes.string,
//   message: PropTypes.string,
//   onClose: PropTypes.func,
//   variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
// };

export default Alert

// const useStyles2 = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

// export default function CustomizedSnackbars() {
//   const classes = useStyles2();
//   const [open, setOpen] = React.useState(false);

//   function handleClick() {
//     setOpen(true);
//   }

//   function handleClose(event, reason) {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   }

//   return (
//     <div>
//       <Button variant="outlined" className={classes.margin} onClick={handleClick}>
//         Open success snackbar
//       </Button>
//       <Snackbar
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         open={open}
//         autoHideDuration={6000}
//         onClose={handleClose}
//       >
//         <MySnackbarContentWrapper
//           onClose={handleClose}
//           variant="success"
//           message="This is a success message!"
//         />
//       </Snackbar>
//       <MySnackbarContentWrapper
//         variant="error"
//         className={classes.margin}
//         message="This is an error message!"
//       />
//       <MySnackbarContentWrapper
//         variant="warning"
//         className={classes.margin}
//         message="This is a warning message!"
//       />
//       <MySnackbarContentWrapper
//         variant="info"
//         className={classes.margin}
//         message="This is an information message!"
//       />
//       <MySnackbarContentWrapper
//         variant="success"
//         className={classes.margin}
//         message="This is a success message!"
//       />
//     </div>
//   );
// }