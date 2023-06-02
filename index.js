// Fetch the CSV data and generate the cards
fetch('names.csv')
    .then(response => response.text())
    .then(data => {
        // Split the CSV data into rows
        const rows = data.trim().split('\n');

        // Iterate over each row and generate the cards
        rows.forEach(row => {
            // Split the row into columns
            const [imageUrl, name, description, hyperlink] = row.split(';');

            console.log(imageUrl);

            // Create the card HTML
            const cardHTML = `
                <div class="col-md-3 d-flex">
                    <div class="card card-container mb-5">
                        <img src="${imageUrl}" class="card-img-top" alt="Card Image"> 
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${description}</p>
                            <p class="card-text"><a href="${hyperlink}">Link</a></p>
                        </div>
                    </div>
                </div>

            `;

            // Append the card HTML to the cardRow element
            document.getElementById('cardRow').innerHTML += cardHTML;
        });
    });

