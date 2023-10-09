
let nol = [3,2,1,5,4]

// reverse array
function balik(a){
    let hasil = []
    for(let i = a.length - 1; i >= 0; i--){

        hasil.push(a[i])
        
    }
    return hasil
}

console.log(balik(nol))

// sum array

let nar=[3,4]

function sum(a){
let total = 0
    for(let i = 0;i < a.length;i++){
        total += a[i]
    }
return total
}

console.log(sum(nar))

// linear search

let mal = [7,9,8,4,6]

function cari(search, a){
    let isFind = false
        for(let i = 0;i < a.length ;i++){
    
                if(search == a[i]){
                    isFind = true
                    return search
                }
        }
        if (isFind == false){
            return undefined
        }
}
console.log(cari(7,mal))

// Fizz Buzz Array

let fizzBuzz=[4,5,9,15,19]
function fizBuz(a){
    let hasil = []
    for(let i = 0; i < a.length; i++){

        if(a[i] % 3 == 0 && a[i] % 5 == 0 ){
            hasil.push("Fizz Buzz")
        }
        else if(a[i] % 3 == 0 ){
            hasil.push("Fizz")
        }
        else if(a[i] % 5 == 0){
            hasil.push("Buzz")
        }
        else{
            hasil.push(a[i])
        }
    }
    return hasil
}
console.log(fizBuz(fizzBuzz))

// Get 3&5 number

let numor35 = [4,5,9,15,19]
function cari35(a){
    let hasil = []
    let cek = false
    for(let i = 0; i < a.length; i++){
        if(a[i] % 3 == 0){
            hasil.push(a[i])
            cek = true
        }
        else if(a[i] % 5 == 0){
            hasil.push(a[i])
            cek = true
        }
    }
    if(cek == false){
        return null
    }
    return hasil
}
console.log(cari35(numor35))

// Palindrome
let Palindrome1 = "apa"
let Palindrome2 = "opa"

function cekPalindrome(a){

    let hasil =""
    for(let i = a.length - 1; i >= 0; i--){
        hasil += a[i]
    }
    if(hasil == a){
        return true
    }
    else{
        return false
    }
}
console.log(cekPalindrome(Palindrome1))

// Max and Min

let maxMin = [3,9,4,5]
function cekMaxMin(a){
    let hasil = {
        Max : a[0] ,
        Min : a[0]
    }
    for(i = 0; i < a.length; i++){
        if(a[i] < hasil.Min){
            hasil.Min = a[i]
        }
        if(a[i] > hasil.Max){
            hasil.Max = a[i]
        }
    }
    return hasil
}
console.log(cekMaxMin(maxMin))

// Get 2d array

let array2d =[["topi",3],["kaos", 6],["jeans",4]]
function getArray2d(a){
    
    for(i = 0 ;i < a.length; i++){
        console.log(`jumlah ${a[i][0]} ada ${a[i][1]}`)
    }
    
}

getArray2d(array2d)

// Sum 2d Array

let array2dSum = [[1,2,3],[4,5,6],[7,8,9]]
function sumArray2d(a){
    let hasil = 0
    for(let i = 0; i < a.length; i++){
        n = a[i]
        for(let j = 0; j < n.length; j++){
            hasil += a[i][j]
        }
    }
    return hasil
}

console.log(sumArray2d(array2dSum))

// Max Min 2d Array

let MaxMin2d = [[1,2,3],[4,5,6],[7,8,9]]
function cekMaxMin2d(a){
    let hasil = []
    let cek = 0
    for(i = 0; i < a.length; i++){
        n = a[i]
        for(j = 0; j < n.length; j++){
            if (a[i][j] > cek){
                cek = a[i][j]
            }
        }
        hasil.push(cek)
    }
    
    return hasil
}

console.log(cekMaxMin2d(MaxMin2d))