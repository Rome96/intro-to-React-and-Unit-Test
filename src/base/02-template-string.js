const name   = 'Turiano';
const lastname = 'Romero';

// const nameCompleto = name + ' ' + lastname;
const nameCompleto = `${ name } ${ lastname }`;

console.log( nameCompleto );


function getSaludo(name) {
    return 'Hola ' + name;
}

console.log( `Este es un texto: ${ getSaludo( name ) }  ` );