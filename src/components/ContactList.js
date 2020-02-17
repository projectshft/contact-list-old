import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import $ from 'jquery'
import ContactDetail from './ContactDetail'


export default function ContactList(props) {

  useEffect(() => {
    //hide back button on the list
    $('.backToList').hide()
  }, [])

  const useStyles = makeStyles(theme => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <div className="contact-title">
        <h2 id="contact-label" className="inline">Contacts</h2>
        <div id="addBtn" className="inline">
          <Link to='/contacts/add' style={{ textDecoration: 'none' }}>
            <Button variant="outlined" >Add Contact</Button>
          </Link>
        </div>
      </div>
      { props.contacts.map(contact => {
          return (
            <Grid container spacing={3}>
              <Grid item xs={11}>

                  <div className="contact-list">
                    <ContactDetail
                      key={contact.id}
                      contactId={contact.id} 
                      contacts={props.contacts}
                    /> 
                  </div>

              </Grid>
              <Grid item xs={1}>
                <Button onClick={() => props.deleteContact(contact.id)} style={{ marginTop: '16px' }}>Delete</Button>
              </Grid>
            </Grid>
          )
      })} 
    </div>
  )

  ContactList.propTypes = {
    contact: PropTypes.object.IsRequired
  };
}
