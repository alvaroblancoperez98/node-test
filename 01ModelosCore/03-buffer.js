<<<<<<< HEAD
/*
var buf = new Buffer.alloc(100),
    buf2 = new Buffer.alloc(26),
    str = '\u00bd + \u00bc = \u00be'

buf.write('abcd', 0, 4, 'ascii')

console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + 'caracteres',
    Buffer.byteLength(str, 'utf8') + 'bytes',
    buf2.length
)

*/

var buf = Buffer.alloc(100),
    buf2 = Buffer.alloc(26),// 26 letras del abecedario
    str = '\u00bd + \u00bc = \u00be'

for ( var i = 0; i < buf2.length; i++ )
{
    // Buscar que número en ascii corresponde a la a en minúsculas y completar el array buf2
    buf2[i] = i + 97
}

console.log(buf2.toString('ascii'))
// Pintar el array completo para ver el abecedario
=======
/*
var buf = new Buffer.alloc(100),
    buf2 = new Buffer.alloc(26),
    str = '\u00bd + \u00bc = \u00be'

buf.write('abcd', 0, 4, 'ascii')

console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + 'caracteres',
    Buffer.byteLength(str, 'utf8') + 'bytes',
    buf2.length
)

*/

var buf = Buffer.alloc(100),
    buf2 = Buffer.alloc(26),// 26 letras del abecedario
    str = '\u00bd + \u00bc = \u00be'

for ( var i = 0; i < buf2.length; i++ )
{
    // Buscar que número en ascii corresponde a la a en minúsculas y completar el array buf2
    buf2[i] = i + 97
}

console.log(buf2.toString('ascii'))
// Pintar el array completo para ver el abecedario
>>>>>>> 0eaba20a44c3d1461484c90785ba0bcebdefa246
