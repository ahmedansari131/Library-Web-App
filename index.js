// Constructor =>
class books {
    constructor(givenName, givenAuthor, givenType) {
        this.name = givenName;
        this.author = givenAuthor;
        this.type = givenType;
    }
}

// Add methods to display =>
class Display {
    add(library) {
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                        <td>${library.name}</td>
                        <td>${library.author}</td>
                        <td>${library.type}</td>
                    </tr>`

        tableBody.innerHTML += uiString;
    }

    clear() {
        let form = document.getElementById('form');
        form.reset();
    }

    validate(library) {
        if (library.name.length < 3 || library.author.length < 3) {
            return false;
        } else {
            return true;
        }
    }

    show() {
        let message = document.getElementById('msgShow');
        message.innerHTML = `<p class="message">Book has been added, <strong>successfully !</strong></p>
                              <div class="icon">
                              <i class="fa-solid fa-square-xmark"></i>`
                              message.style.display = 'block';

        setTimeout(function() {
            message.innerHTML = '';
        }, 3000);
    }

}


// Adding event-listener to the button =>
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addBooks);

function addBooks(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    } else if (technology.checked){
        type = technology.value;
    } else if (science.checked){
        type = science.value;
    }

    let library = new books(name, author, type);

    let display = new Display();
    if (display.validate(library)) {
        display.add(library);
        display.clear();
        // display.show('success');
    } else {
        // display.show('error');
    }
}