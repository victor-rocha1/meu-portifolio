import Icons from '../../components/Icons/Icons';
import './footer.css'

function Footer(){
    const socialIcons = ['instagram', 'github', 'linkedin'];
    return(
        <footer>
            <div className="interface">
                <div className="line-footer">
                    <div className="logo-footer">
                        <img id='logotipo' src="./public/images/logo.png" alt="Logo Victor Rocha" />
                    </div>
                    <Icons icons={socialIcons} size="2.5rem" />
                </div>

                <div className="line-footer">
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;