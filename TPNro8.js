class CZooAnimal {
    constructor(name, cageNumber, weight, IdTypeAnimal) {
        this.IdAnimal = Math.floor(Math.random() * 1000); 
        this.name = name;
        this.cageNumber = cageNumber;
        this.weight = weight;
        this.IdTypeAnimal = IdTypeAnimal;
    }
}

const zooAnimals = [
    new CZooAnimal("León", 1, 150, 1),   
    new CZooAnimal("Tigre", 2, 200, 1),  
    new CZooAnimal("Águila", 3, 2, 2),   
    new CZooAnimal("Cobra", 4, 1, 3),    
    new CZooAnimal("Jaguar", 5, 100, 1)
];

function mostrarDatos() {
    document.write("<h2>Animales en el Zoo</h2>");
    const table = `
        <table border='1'>
            <tr>

                <th>Nombre</th>
                <th>Jaula</th>
                <th>Peso (kg)</th>
            </tr>
            ${zooAnimals.map(animal => `
                <tr>
                    <td>${animal.name}</td>
                    <td>${animal.cageNumber}</td>
                    <td>${animal.weight}</td>

                </tr>`).join('')}
        </table>
    `;
    document.write(table);
}

const countLightAnimalsInCage5 = zooAnimals.filter(animal => animal.cageNumber === 5 && animal.weight < 3).length;
document.write(`<p>Cantidad de animales en la Jaula 5 con peso menor a 3 kg: ${countLightAnimalsInCage5}</p>`);

const countFelineAnimals = zooAnimals.filter(animal => animal.IdTypeAnimal === 1 && animal.cageNumber >= 2 && animal.cageNumber <= 5).length;
document.write(`<p>Cantidad de animales de tipo felino entre las Jaulas 2 y 5: ${countFelineAnimals}</p>`);

const lightAnimalInCage4 = zooAnimals.find(animal => animal.cageNumber === 4 && animal.weight < 120);
if (lightAnimalInCage4) {
    document.write(`<p>Nombre del animal en la Jaula 4 con peso menor a 120 kg: ${lightAnimalInCage4.name}</p>`);
} else {
    document.write("<p>No hay animales en la Jaula 4 con peso menor a 120 kg.</p>");
}

mostrarDatos();
