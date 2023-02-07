import Dropdown from 'react-bootstrap/Dropdown';

function MainDropdow() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Comments
      </Dropdown.Toggle>

      <Dropdown.Menu style={{margin:"0 8%" , backgroundColor:"#A8CCC9"}}>
        <Dropdown.Item className='comment'><strong>Ghada :</strong> Is the new Batman any good? What this film does achieve, however, is telling a solid new Batman story</Dropdown.Item>
        <Dropdown.Item className='comment'><strong>Khalil :</strong> ne with some pretty compelling twists and a strong point-of-view on who, exactly</Dropdown.Item>
        <Dropdown.Item className='comment'><strong>Chedli :</strong> the Caped Crusader is. By default, that makes it one of the better Batman movies ever made.</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MainDropdow;