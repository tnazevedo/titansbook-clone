import React,{Component} from 'react';
import './Header.css';
class Header extends Component {
    render(){
        return (
            <>
                <header>
                    <nav className="header__nav container">
                        <h1 className="title">TiTansbook</h1>
                        <div>
                            <span> Meu Perfil</span>
                            <i className="material-icons">account_circle</i>
                        </div>
                    </nav>
                                       
                    
                </header>

                
            </>

        );
    }
}

export default Header;