import Icons from '../../components/Icons/Icons';
import logo from '/public/images/logo.png';
import './footer.css';

function Footer() {
    const socialIcons = [
        { name: 'instagram', link: 'https://www.instagram.com/victor-rocha924' },
        { name: 'github', link: 'https://www.github.com/victor-rocha1' },
        { name: 'linkedin', link: 'https://www.linkedin.com/in/victor-rocha-dos-reis-751376267/' },
    ];
    const contactIcon = { name: 'envelope-fill', link: 'mailto:victorrocha3202@gmail' };

    return (
        <footer>
            <div className="interface">
                <div className="line-footer">
                    <div className="flex">
                        <div className="logo-footer">
                            <img id='logotipo' src={logo} alt="Logo Victor Rocha" />
                        </div>
                        <Icons icons={socialIcons} size="2rem" alignment="left" />
                    </div>
                </div>

                <span className="line-separator"></span>
                <div className="line-footer email-container">
                    <div className="icon-container">
                        <Icons icons={[contactIcon]} size="2.5rem" alignment="left" />
                        <a href={contactIcon.link}>victorrocha3202@gmail</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
