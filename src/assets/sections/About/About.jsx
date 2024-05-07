import Icons from '../../components/Icons/Icons.jsx';
import Title from '../../components/Title/Title';
import './about.css';

function About() {
    const socialIcons = ['instagram', 'github', 'linkedin'];
    return (
        <section className='about'>
            <div className="interface">
                <div className="flex">
                    <div className="img-about">
                        <img id='img-txt' src="./public/images/avatar.jpg" alt="avatar" />
                    </div>

                    <div className="txt-about">
                        <Title text="PRAZER, SOU" spantext=" VICTOR ROCHA." />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus distinctio ex tenetur, blanditiis temporibus cupiditate autem, rem pariatur at iste facere incidunt officia alias recusandae deleniti aperiam provident. Totam!</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit unde saepe repudiandae vitae tempora. Nostrum nulla soluta a eligendi, laboriosam illo accusamus, quo dolores neque iste inventore vel sit!</p>

                        <Icons icons={socialIcons} className="small-icons" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;