// Main requirements:

__Index page with:

    __Its own route

    __A list of all contacts


__Allow the user to add a contact with:
    __Name

    __Image

    __Email

    __Phone number


__You must use Proptypes!



// Extensions:


__Extension 1 - Delete

  Enable deleting of a contact from the main contact list view.


__Extension 2 - Edit

  When the user clicks 'edit' next to a contact, this should navigate the user to /contacts/:id/edit. There, you should find a pre-filled form (looks much like the one at /contacts/new) in which you can confirm any changes to the user's data.


__Extension 3 - Delete Confirmation

  In whatever way you wish, when the user clicks delete, add some kind of confirmation - perhaps a modal/pop-up asking "are you sure!?"


__Extension 4 - Centralized State

  Use our state.js file from yesterday to manage your application's state or use the Context API.


__Super Ninja Extension

  Using the Google Contacts API, sync your app with the contacts you have in Google.

  This is difficult as it will require you to authenticate your user with OAuth and get an ACCESS_TOKEN that you'll need to send with requests to the Google Contacts API.

  But here's a bone. That link is an example of how to authenticate with Google. You'll first need to go to https://console.developers.google.com/apis to enable the Google Contacts API and get your API Key and Client ID.

  Additionally, it will ask you to set a Redirect URI (which will be something like https://localhost:3000) so it can take your user back to your page with the ACCESS_TOKEN in the URL.
