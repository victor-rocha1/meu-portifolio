import Button from "../../elements/Button/Button"

function Top() {
    return(
        <main>
            <section className="topo-do-site">
                <div className="interface">
                    <div className="flex">
                        <div className="text-site">
                            <h1>Analista de Sistemas</h1>
                            <p>Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e programação.</p>
                        <Button>Entre em contato</Button>
                        </div>
                <div className="avatar">
                <img id="avatar" src="./public/images/avatar.jpg" alt="avatar" />
                </div>

                    </div>
                </div> 

            </section>
        </main>
    )
}

export default Top