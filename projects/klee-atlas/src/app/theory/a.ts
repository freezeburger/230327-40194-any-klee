

export function foo(){
    console.log('foo')
}

console.log('Module A')

setTimeout(foo, 3000 );

export default 123;