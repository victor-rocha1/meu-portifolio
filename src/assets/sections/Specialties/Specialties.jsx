import Title from "../../elements/Button/Title/Title.jsx";
import "./specialties.css";

function Specialties() {
    return (
        <div className="specialities">
            <section className="especialidades">
                <div className="interface">
                    
                    <div className="flex">
                        <div className="box">
                            <i class="bi bi-code-square"></i>
                            <Title text="FRONT END"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugiat perspiciatis nihil quis alias magnam. Nesciunt deserunt reprehenderit ducimus numquam!</p>
                        </div>

                        <div className="box">
                            <i class="bi bi-laptop"></i>
                            <Title text="BACK END"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi error distinctio animi amet saepe perferendis, aliquid beatae ad laboriosam.</p>
                        </div>

                        <div className="box">
                            <i class="bi bi-database"></i>
                            <Title text="DADOS"/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt sit voluptatem voluptas delectus a facilis commodi magni quo excepturi fuga?</p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Specialties