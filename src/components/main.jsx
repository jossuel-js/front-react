import React, { useState } from "react";
import "../assets/App.css";

export function Mains() {

    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [name, setName] = useState();

    const calcBmi = () => {
        let aux = (
            [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBmi(aux);

        if (aux < 18.5) {
            setInfo("Voce esta abaixo do peso");
        } else if (aux > 18.5 && aux <= 24.9) {
            setInfo("Voce esta saudavel");
        } else if (aux > 24.9 && aux < 30) {
            setInfo("Voce esta Acima do Peso");
        } else {
            setInfo("Voce esta Obeso");
        }
    }

    return (
        <main>
            <div>
                <h1>BMI Calculator</h1>
 
                <form>

                    <div className="input-control">
                        <label> Name: </label>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            autocomplete="off" id="name"
                        />

                    </div>
                    <div className="input-control">
                        <label> Altura: </label>
                        <input
                            type="number"
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="Altura(cm)"
                            autocomplete="off" id="weight"
                        />

                    </div>
                    <div className="input-control">
                        <label> Peso: </label>
                        <input
                            type="number"
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Peso(kg)"
                            autocomplete="off" step="0.01" id="height"
                        />

                    </div>

                    <button id="btn_calculate" onClick={calcBmi}>Calculate</button>

                    <section id="bmi"> {bmi} </section>
                    <h1>{name} {info}</h1>
                </form>
            </div>

        </main>)

}