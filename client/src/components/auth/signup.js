import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField, CheckboxWithLabel } from "formik-material-ui";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import * as actions from "../../actions";
import { connect } from "react-redux";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp = ({ signUp, isLoggedIn }) => {
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
      .min(8)
      .max(20),
    firstName: yup
      .string()
      .label("First name")
      .required(),
    lastName: yup
      .string()
      .label("Last name")
      .required(),
    userName: yup
      .string()
      .label("Username")
      .required()
  });

  if (isLoggedIn) {
    return <Redirect to='/bathMap' />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            userName: "",
            promotions: true
          }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            //console.log(values);
            await signUp(values);
            setSubmitting(false);
            resetForm();
          }}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    variant='outlined'
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='lname'
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant='outlined'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant='outlined'
                    required
                    fullWidth
                    id='userName'
                    label='Username'
                    name='userName'
                    autoComplete='username'
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color='primary' />}
                    label='I want to receive coupons, special discounts, promotions and updates via email.'
                    name='promotions'
                    component={CheckboxWithLabel}
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                disabled={isSubmitting}
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify='flex-end'>
                <Grid item>
                  <Link to='login' variant='body2'>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

const mapStateToProps = ({ firebase }) => ({
  isLoggedIn: firebase.auth.uid
});

const mapDispatchToProps = {
  signUp: actions.signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
