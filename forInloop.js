let a = {
    a : '1',
    b : '2'

}

for (const key in a) {
    if (Object.hasOwnProperty.call(a, key)) {
        const element = a[key];
        console.log(key, element)
        
    }
}