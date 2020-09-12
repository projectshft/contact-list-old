
function HeaderContacts() {

  handleAddContact() {
    console.log('clickedto AddContact!');
  }

  return (
    <div className='container header-contacts'>
      <div className='row'>
        <div className='col-md-3 offset-md-3'>
          <h1 style={{ display: 'inline-block' }}>Contacts</h1>
          <button type="button" className='add-contact' style={{ display: 'inline-block' }} onClick={this.handleAddContact}>
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderContacts