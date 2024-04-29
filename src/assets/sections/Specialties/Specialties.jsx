import Title from "../../components/Title/Title.jsx";
import "./specialties.css";

function Specialties() {
    return (
        <div className="specialities">
            <section className="especialidades">
                <div className="interface">
                    <Title text="MINHAS " spantext="ESPECIALIDADES"/>
                    <div className="flex">
                        <div className="box">
                            <i class="bi bi-code-square"></i>
                            <h2>FRONT END</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugiat perspiciatis nihil quis alias magnam. Nesciunt deserunt reprehenderit ducimus numquam!</p>
                        </div>

                        <div className="box">
                            <i class="bi bi-laptop"></i>
                            <h2>BACK END</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugiat perspiciatis nihil quis alias magnam. Nesciunt deserunt reprehenderit ducimus numquam!</p>
                        </div>

                        <div className="box">
                            <i class="bi bi-database"></i>
                            <h2>DADOS</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugiat perspiciatis nihil quis alias magnam. Nesciunt deserunt reprehenderit ducimus numquam!</p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Specialties