import React from 'react'
import "./Navigation.css"
import Scanner from '../QuestScanner/Scanner';
import Logo from '../Quest Logo/Logo';
import Address from '../QuestAddress/Address';

 function Navigation() {
  return (
    <div className='navigation-container'>
        <div className='logo'>
            <Logo/>
        </div>
        <div className='address'>
            <Address/>
        </div>
        <div className='scanner'>
            < Scanner/>
        </div>

    </div>
  )
}
export default Navigation;
