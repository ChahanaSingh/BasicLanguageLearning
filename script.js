function openCategory(category) {
    var options = document.querySelector('.options');
    var categoryContent = document.getElementById('categoryContent');

    options.style.display = 'none';
    categoryContent.style.display = 'block';

    // Set category content
    var content = getCategoryContent(category);
    categoryContent.innerHTML = content;
}

function getCategoryContent(category) {
    var content = ''; // Declare content variable only once

    switch (category) {
        case 'Animals':
            content = `
            <h2>Animals</h2>
            <ul>
                <li><img src="dog.jpg" alt="Dog">Chien - Dog</li>
                <li><img src="cat.png" alt="Cat">Chat - Cat</li>
                <li><img src="horse.jpg" alt="Horse">Cheval - Horse</li>
                <li><img src="rabbit.jpg" alt="Rabbit">Lapin - Rabbit</li>
                <li><img src="wolf.webp" alt="Wolf">Loup - Wolf</li>
                <li><img src="kitten.jpg" alt="Kitten">Chaton - Kitten</li>
                <li><a href="https://acupoffrench.com/french-vocabulary/pets-animals/" style="color: #777; font-size: 0.8em;">More Animals</a></li>
                <li><a href="index.html"  style="color: #777; font-size: 0.8em;">Home</a></li>
            </ul>`;

        break;
        case 'Colors':
            content = `
                <h2>Colors</h2>
                <ul>
                    <li><img src="red.jpg" alt="Red">Rouge - Red</li>
                    <li><img src="blue.jpg" alt="Blue">Bleu - Blue</li>
                    <li><img src="green.jpg" alt="Green">Vert - Green</li>
                    <li><img src="pink.png" alt="Pink">Rose - Pink</li>
                    <li><img src="yellow.avif" alt="Yellow">Jaune - Yellow</li>
                    <li><img src="orange.avif" alt="Orange">Orange - Orange</li>
                    <li><a href="https://www.transtle.com/french/french-a1/colors-in-french/" style="color: #777; font-size: 0.8em;">To know more colors click here</a></li>
                    <li><a href="index.html"  style="color: #777; font-size: 0.8em;">Home</a></li>

                </ul>
            `;
            break;
        case 'Food':
            content = `
                <h2>Food</h2>
                <ul>
                    <li><img src="bread.jpg" alt="Bread">Pain - Bread</li>
                    <li><img src="apple.avif" alt="Apple">Pomme - Apple</li>
                    <li><img src="cheese.jpg" alt="Cheese">Fromage - Cheese</li>
                    <li><img src="pizza.avif" alt="Pizza">Pizza - Pizza</li>
                    <li><img src="tomato.jpg" alt="Tomato">Tomate- Tomato</li>
                    <li><img src="burger.avif" alt="Burger">Burger - Burger</li>
                    <li><a href="https://www.frenchtoday.com/blog/french-vocabulary/food-audio/" style="color: #777; font-size:0.8em;">To know more about food click here</a></li>
                    <li><a href="index.html"  style="color: #777; font-size: 0.8em;">Home</a></li>

                </ul>
            `;
            break;
        case 'Places':
            content = `
                <h2>Places</h2>
                <ul>
                    <li><img src="city.avif" alt="City">Ville - City</li>
                    <li><img src="beach.jpg" alt="Beach">Plage - Beach</li>
                    <li><img src="mountain.jpg" alt="Mountain">Montagne - Mountain</li>
                    <li><img src="rest.jpg" alt="Restaurant">Restaurant - Restaurant</li>
                    <li><img src="school.jpg" alt="School">école - School</li>
                    <li><img src="host.avif" alt="Hospital">hôpital - Hospital</li>
                    <li><a href="https://french.kwiziq.com/learn/theme/34" style="color: #777; font-size:0.8em;">To know more about places click here</a></li>
                    <li><a href="index.html"  style="color: #777; font-size: 0.8em;">Home</a></li>
                </ul>
            `;
            break;
            case 'Objects':
            content = `
                <h2>Objects</h2>
                <ul>
                    <li><img src="table.jpg" alt="Table">
                    table en bois - Wooden Table</li>
                    <li><img src="car.jpg" alt="Car">Voiture - Car</li>
                    <li><img src="computer.jpg" alt="Cheese">ordinateur
                    - Computer</li>
                    
                    <li><a href="https://www.learnentry.com/english-french/vocabulary/household-items-in-french/" style="color: #777; font-size:0.8em;">To know more about Objects click here</a></li>
                    <li><a href="index.html"  style="color: #777; font-size: 0.8em;">Home</a></li>
                    

                </ul>
            `;
            break;
            case 'Introduce Yourself':
            content = `
                <h2>Introduce Yourself</h2>
                <ul>
                    <li><img src="hello.webp" alt="Hello">Bonjour - Hello</li>
                    <li><img src="student.avif" alt="I am a Student">je suis étudiant - I am a Student</li>
                    <li><img src="friends.jpg" alt="I like to make new friends">J'aime me faire de nouveaux amis - I like to make new friends</li>
                    <li><a href="https://www.tandem.net/blog/the-complete-guide-to-introducing-yourself-in-french/" style="color: #777; font-size:0.8em;">To know more about introducing yourself click here</a></li>
                    <li><a href="index.html"  style="color: #777; font-size: 0.8em;">Home</a></li>
                    

                </ul>
            `;
            break;
    }

    return content;
}
