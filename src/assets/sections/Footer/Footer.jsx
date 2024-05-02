import Icons from '../../components/Icons/Icons';
import './footer.css'

function Footer(){
    const icons = ['instagram', 'github', 'linkedin', 'envelope-fill'];
    return(
        <footer>
            <div className="interface">
                <div className="line-footer">
                    <div className="logo-footer">
                        <img id='logotipo' src="./public/images/logo.png" alt="Logo Victor Rocha" />
                    </div>
                    <Icons icons={[icons[0], icons[1], icons[2]]} size="2.5rem" alignment="left" />
                </div>

                <div className="line-footer">
                    <p> <Icons icons={[icons[3]]} size="2.5rem" alignment="left"/> <a href="mailto:victorrocha3202@gmail">victorrocha3202@gmail</a></p>
                
                </div>
            </div>
        </footer>
    )
}

export default Footer;