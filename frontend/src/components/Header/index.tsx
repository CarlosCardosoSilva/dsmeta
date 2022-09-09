import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
  return(
    
    <header>
        <div className="dsmete-logo-container">
            <img src={logo} alt="DSMete"/>
            <h1>DSMeta</h1>
                <p>
                  Desenvolvido por 
                  <a href="https://github.com/CarlosCardosoSilva/CarlosCardoso.git">@devsuperior.ig</a>
               </p>
        </div>
        
    </header>
    
  )
}

export default Header;
