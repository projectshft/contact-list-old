import { Link } from 'react-router-dom'
import React from 'react'

class NewContact extends React.Component {
    constructor () {
        super()

        this.state = {
            id: '',
            name: '',
            image_url: '',
            email: '',
            phone_number: ''
        }

        this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    }
}