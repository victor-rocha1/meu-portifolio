import Icons from '../../components/Icons/Icons';
import './footer.css'

function Footer() {
    const icons = ['instagram', 'github', 'linkedin', 'envelope-fill'];
    return (
        <footer>
            <div className="interface">
                <div className="line-footer">
                    <div className="flex">
                        <div className="logo-footer">
                            <img id='logotipo' src="./public/images/logo.png" alt="Logo Victor Rocha" />
                        </div>
                        <Icons icons={[icons[0], icons[1], icons[2]]} size="2rem" alignment="left" />
                    </div>
                </div>

                <span className="line-separator"></span>
                <div className="line-footer">
                    <p className='line'>
                        <div className="icon-container">
                            <Icons icons={[icons[3]]} size="2.5rem" alignment="left" />
                            <a href="mailto:victorrocha3202@gmail">victorrocha3202@gmail</a>
                        </div>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;