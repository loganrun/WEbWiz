import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
//import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Formik, Field,Form} from "formik";
import {TextField, CheckboxWithLabel} from "formik-material-ui";
import * as yup from "yup"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import *as actions from '../../actions'
import {connect} from 'react-redux'

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignIn = ({signIn, isLoggedIn}, props) => {
  const classes = useStyles();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .label("Email")
      .required(),
    password: yup
      .string()
      .label("Password")
      .required()
  });

  if (isLoggedIn){
    return <Redirect to='/bathMap'/>
  }

  return (
    <Formik initialValues={{email: "", password: ""}} validationSchema = {validationSchema} 
    onSubmit={async (values, { setSubmitting, resetForm}) => {
     try{
      console.log(values)
      await signIn(values)
      setSubmitting(false)
      resetForm()
     }catch(err){
       console.log(err.message)
     }
    }}
    >
      {({handleSubmit, isSubmitting}) =>(
        <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Form className={classes.form} onSubmit={handleSubmit}>
            <Field
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              component={TextField}
            />
            <Field
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              component={TextField}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
              component={CheckboxWithLabel}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              disabled={isSubmitting}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='#' Links variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/signup' Links variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Form>
        </div>
      </Container>

      )}
    
    </Formik>
  );
}

const mapStateToProps = ({firebase}) => ({
  isLoggedIn: firebase.auth.uid,
});

const mapDispatchToProps = {
  signIn: actions.signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
