//spread operator
//rest operator



// ------------------------------------------spread operator----------------------
//-----------------------------------------------------------------------------------

//-------array
const team1 : string []= ['siam' , 'habib', 'mannan']
const team2 : string []= ['siam' , 'habib', 'mannan']

team1.push(...team2)  //spread operator(...)


//---------object
const mentors1 = {
    typescript :'mesba',
    redux : 'Mir',
    dbms : 'Mizan'
}
const mentors2 = {
    typescript :'siam',
    redux : 'Mira',
    dbms : 'habib'
}

const mentorList ={
    ...mentors1,
    ...mentors2
}

//-------------------------------------------rest operator-----------------------------------------
//----------------------------------------------------------------------------------------------------

const greetFriend = ( ...friends : string [] ) => {
            friends.forEach((friend:String) => console.log(`Hi friend how are you ${friend}`))    
}

greetFriend('abul', 'kabul','habul', 'babul')






